package gr.codingfactory.petpal.controller;

import gr.codingfactory.petpal.model.Pet;
import gr.codingfactory.petpal.model.User;
import gr.codingfactory.petpal.dao.PetRepository;
import gr.codingfactory.petpal.dao.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetRepository petRepository;
    private final UserRepository userRepository;

    public PetController(PetRepository petRepository, UserRepository userRepository) {
        this.petRepository = petRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Pet> getMyPets(@AuthenticationPrincipal User user) {
        return petRepository.findByOwner(user);
    }

    @PostMapping
    public ResponseEntity<Pet> createPet(@AuthenticationPrincipal User user,
                                         @Valid @RequestBody Pet pet) {
        pet.setOwner(user);
        Pet saved = petRepository.save(pet);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id, @AuthenticationPrincipal User user) {
        return petRepository.findById(id)
                .filter(pet -> pet.getOwner().getId().equals(user.getId()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(403).build()); // ή 404 αν προτιμάς
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable Long id,
                                         @Valid @RequestBody Pet updatedPet,
                                         @AuthenticationPrincipal User user) {
        return petRepository.findById(id)
                .filter(pet -> pet.getOwner().getId().equals(user.getId()))
                .map(existingPet -> {
                    existingPet.setName(updatedPet.getName());
                    existingPet.setSpecies(updatedPet.getSpecies());
                    existingPet.setBreed(updatedPet.getBreed());
                    existingPet.setAge(updatedPet.getAge());
                    return ResponseEntity.ok(petRepository.save(existingPet));
                })
                .orElse(ResponseEntity.status(403).build()); // ή 404
    }


}
