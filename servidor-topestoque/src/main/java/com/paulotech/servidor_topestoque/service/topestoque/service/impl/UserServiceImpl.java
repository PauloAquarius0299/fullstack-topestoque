package com.paulotech.servidor_topestoque.service.topestoque.service.impl;

import com.paulotech.servidor_topestoque.entity.UserEntity;
import com.paulotech.servidor_topestoque.io.UserRequest;
import com.paulotech.servidor_topestoque.io.UserResponse;
import com.paulotech.servidor_topestoque.repository.UserRepository;
import com.paulotech.servidor_topestoque.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createUser(UserRequest request) {
        UserEntity newUser = covertToEntity(request);
        newUser = userRepository.save(newUser);
        return covertToResponse(newUser);
    }

    private UserResponse covertToResponse(UserEntity newUser) {
        return UserResponse.builder()
                .name(newUser.getName())
                .email(newUser.getEmail())
                .role(newUser.getRole())
                .userId(newUser.getUserId())
                .createdAt(newUser.getCreatedAt())
                .updatedAt(newUser.getUpdatedAt())
                .build();
    }

    private UserEntity covertToEntity(UserRequest request) {
        return UserEntity.builder()
                .userId(UUID.randomUUID().toString())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole().toUpperCase())
                .name(request.getName())
                .build();
    }

    @Override
    public String getUserRole(String email) {
       UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found for this: " + email));
       return existingUser.getRole();
    }

    @Override
    public List<UserResponse> readUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> covertToResponse(user))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteUser(String id) {
        UserEntity existingUser = userRepository.findByUserId(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found for this: " + id));
        userRepository.delete(existingUser);
    }
}
