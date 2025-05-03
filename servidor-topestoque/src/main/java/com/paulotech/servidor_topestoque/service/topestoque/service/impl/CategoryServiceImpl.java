package com.paulotech.servidor_topestoque.service.topestoque.service.impl;

import com.paulotech.servidor_topestoque.entity.CategoryEntity;
import com.paulotech.servidor_topestoque.io.CategoryRequest;
import com.paulotech.servidor_topestoque.io.CategoryResponse;
import com.paulotech.servidor_topestoque.io.ItemResponse;
import com.paulotech.servidor_topestoque.repository.CategoryRepository;
import com.paulotech.servidor_topestoque.repository.ItemRepository;
import com.paulotech.servidor_topestoque.service.CategoryService;
import com.paulotech.servidor_topestoque.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final FileUploadService fileUploadService;
    private final ItemRepository itemRepository;

    @Override
    public CategoryResponse add(CategoryRequest request, MultipartFile file) {
        String imgUrl = fileUploadService.UploadFile(file);
        CategoryEntity newCategory = covertToEntity(request);
        newCategory.setImageUrl(imgUrl);
        newCategory = categoryRepository.save(newCategory);
        return covertToResponse(newCategory);
    }

    @Override
    public List<CategoryResponse> read() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryEntity -> covertToResponse(categoryEntity))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String categoryId) {
        CategoryEntity existingCategory = categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(()-> new RuntimeException("Category not found:" + categoryId));
        fileUploadService.deleteFile(existingCategory.getImageUrl());
        categoryRepository.delete(existingCategory);
    }

    private CategoryResponse covertToResponse(CategoryEntity newCategory){
        Integer itemsCount = itemRepository.countByCategoryId(newCategory.getId());
        return CategoryResponse.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColor(newCategory.getBgColor())
                .createdAt(newCategory.getCreatedAt())
                .updatedAt(newCategory.getUpdatedAt())
                .imageUrl(newCategory.getImageUrl())
                .items(itemsCount)
                .build();
    }

    private CategoryEntity covertToEntity(CategoryRequest request){
        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .build();
    }
}
