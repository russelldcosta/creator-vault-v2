package com.creatorvaultv2.backend.controller; // <--- Add this!

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // <--- Ensure this is here too
public class TestController {

    @GetMapping("/test-db")
    public String testConnection() {
        return "Database Connection Successful!";
    }
}


/*
In Java, folders and packages are the same thing. 
If your file is physically located in: src/main/java/com/creatorvaultv2/backend/endpoints/TestController.java

...then the package name must be com.creatorvaultv2.backend.endpoints. If you leave it blank, 
Java thinks the file should be in the "root" folder, which causes the conflict.
*/