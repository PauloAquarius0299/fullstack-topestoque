package com.paulotech.servidor_topestoque.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.paulotech.servidor_topestoque.io.ItemRequest;
import com.paulotech.servidor_topestoque.io.ItemResponse;
import com.paulotech.servidor_topestoque.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @PostMapping("/admin/items")
    public ItemResponse addItem(@RequestPart("item")String itemString,
                                @RequestPart("file")MultipartFile file){
        ObjectMapper objectMapper = new ObjectMapper();
        ItemRequest itemRequest =null;
        try {
            itemRequest = objectMapper.readValue(itemString, ItemRequest.class);
            return itemService.add(itemRequest, file);
        }catch (JsonProcessingException ex){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format", ex);
        }
    }

    @GetMapping("/items")
    public List<ItemResponse> fetchItems(){
        return itemService.fetchItems();
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/admin/items/{itemId}")
    public void removeItem(@PathVariable String itemId){
        try{
            itemService.deleteItem(itemId);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item not found", e);
        }
    }
}
