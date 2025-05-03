package com.paulotech.servidor_topestoque.service;

import com.paulotech.servidor_topestoque.io.ItemRequest;
import com.paulotech.servidor_topestoque.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {

    ItemResponse add(ItemRequest request, MultipartFile file);

    List<ItemResponse> fetchItems();

    void deleteItem(String itemId);
}
