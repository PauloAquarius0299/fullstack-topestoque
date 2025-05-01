package com.paulotech.servidor_topestoque.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    String UploadFile(MultipartFile file);

    boolean deleteFile(String imgUrl);
}
