package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.AuthRequest;
import gr.codingfactory.petpal.model.User;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface AuthService {
    ResponseEntity<String> register(User user);
    ResponseEntity<Map<String, String>> login(AuthRequest request);
}

