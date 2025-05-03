package com.paulotech.servidor_topestoque.service.topestoque.service.impl;

import com.paulotech.servidor_topestoque.entity.CategoryEntity;
import com.paulotech.servidor_topestoque.entity.ItemEntity;
import com.paulotech.servidor_topestoque.io.ItemRequest;
import com.paulotech.servidor_topestoque.io.ItemResponse;
import com.paulotech.servidor_topestoque.repository.CategoryRepository;
import com.paulotech.servidor_topestoque.repository.ItemRepository;
import com.paulotech.servidor_topestoque.service.FileUploadService;
import com.paulotech.servidor_topestoque.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final FileUploadService fileUploadService;
    private final ItemRepository itemRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public ItemResponse add(ItemRequest request, MultipartFile file) {
        String imgUrl = fileUploadService.UploadFile(file);
        ItemEntity newItem = covertToEntity(request);
        CategoryEntity existingCategory = categoryRepository.findByCategoryId(request.getCategoryId())
                .orElseThrow(()-> new RuntimeException("Category not found" +request.getCategoryId()));
        newItem.setCategory(existingCategory);
        newItem.setImgUrl(imgUrl);
        newItem = itemRepository.save(newItem);
        return convertToResponse(newItem);
    }

    private ItemResponse convertToResponse(ItemEntity newItem) {
        return ItemResponse.builder()
                .itemId(newItem.getItemId())
                .name(newItem.getName())
                .description(newItem.getDescription())
                .price(newItem.getPrice())
                .imgUrl(newItem.getImgUrl())
                .categoryName(newItem.getCategory().getName())
                .categoryId(newItem.getCategory().getCategoryId())
                .createdAt(newItem.getCreatedAt())
                .updatedAt(newItem.getUpdatedAt())
                .build();
    }

    private ItemEntity covertToEntity(ItemRequest request) {
        return ItemEntity.builder()
                .itemId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .price(request.getPrice())
                .build();
    }

    @Override
    public List<ItemResponse> fetchItems() {
        return itemRepository.findAll()
                .stream()
                .map(itemEntity -> convertToResponse(itemEntity))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteItem(String itemId) {
        ItemEntity existingItem = itemRepository.findByItemId(itemId)
                .orElseThrow(()-> new RuntimeException("Item not found" + itemId));
        boolean isFileDelete = fileUploadService.deleteFile(existingItem.getImgUrl());
        if(isFileDelete){
            itemRepository.delete(existingItem);
        } else {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unable to delete this image");
        }
    }
}
