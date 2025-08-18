package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.AuthRequest;
import gr.codingfactory.petpal.model.Role;
import gr.codingfactory.petpal.model.User;
import gr.codingfactory.petpal.dao.UserRepository;
import gr.codingfactory.petpal.security.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public ResponseEntity<String> register(User user){
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @Override
    public ResponseEntity<Map<String, String>> login(AuthRequest request) {
        System.out.println("Login attempt for user: " + request.getUsername());
        System.out.println("Raw password: " + request.getPassword());

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        System.out.println("Encoded password in DB: " + user.getPassword());
        System.out.println("Match result: " + passwordEncoder.matches(request.getPassword(), user.getPassword()));


        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = jwtUtil.generateToken(user.getUsername());

        return ResponseEntity.ok(Map.of("token", token));
    }
}
