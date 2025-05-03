package com.paulotech.servidor_topestoque.controller;

import com.paulotech.servidor_topestoque.io.AuthRequest;
import com.paulotech.servidor_topestoque.io.AuthResponse;
import com.paulotech.servidor_topestoque.service.UserService;
import com.paulotech.servidor_topestoque.service.topestoque.service.impl.AppUserDetailsService;
import com.paulotech.servidor_topestoque.utils.JwtUnit;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticateManager;
    private final AppUserDetailsService appUserDetailsService;
    private final UserService userService;
    private final JwtUnit jwtUnit;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) throws Exception {
        authenticate(request.getEmail(), request.getPassword());
        final UserDetails userDetails = appUserDetailsService.loadUserByUsername(request.getEmail());
        final String jwtToken = jwtUnit.generateToken(userDetails);
        String role = userService.getUserRole(request.getEmail());
        return new AuthResponse(request.getEmail(), jwtToken, role);
    }

    private void authenticate(String email, String password) throws Exception {
        try {
            authenticateManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        }catch (DisabledException e){
            throw new Exception("User disabled");
        }catch (BadCredentialsException e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email or password invalid");
        }
    }

    @PostMapping("/encode")
    public String encodePassword(@RequestBody Map<String, String> request){
        return passwordEncoder.encode(request.get("password"));
    }
}
