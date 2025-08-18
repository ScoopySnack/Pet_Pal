package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.Pet;

import java.util.List;
import java.util.Optional;

public interface PetService {
    List<Pet> findAll();
    Optional<Pet> findById(Long id);
    List<Pet> findByOwnerId(Long ownerId);
    Pet save(Pet pet);
    void deleteById(Long id);
}
