package com.paulotech.servidor_topestoque.service;

import com.paulotech.servidor_topestoque.io.CategoryRequest;
import com.paulotech.servidor_topestoque.io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);

    List<CategoryResponse> read();

    void delete(String categoryId);
}
