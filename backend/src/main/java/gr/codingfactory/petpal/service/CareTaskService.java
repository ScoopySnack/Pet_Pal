package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.CareTask;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface CareTaskService {
    List<CareTask> findAll();
    Optional<CareTask> findById(Long id);
    List<CareTask> findByPetId(Long petId);
    List<CareTask> findOverdueTasks();
    CareTask save(CareTask careTask);
    void deleteById(Long id);
}
