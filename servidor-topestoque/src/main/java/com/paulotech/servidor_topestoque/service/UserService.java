package com.paulotech.servidor_topestoque.service;

import com.paulotech.servidor_topestoque.io.UserRequest;
import com.paulotech.servidor_topestoque.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
