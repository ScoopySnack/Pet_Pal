package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.CareTask;
import gr.codingfactory.petpal.dao.CareTaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CareTaskServiceImpl implements CareTaskService {

    private final CareTaskRepository careTaskRepository;

    public CareTaskServiceImpl(CareTaskRepository careTaskRepository) {
        this.careTaskRepository = careTaskRepository;
    }

    @Override
    public List<CareTask> findAll() {
        return careTaskRepository.findAll();
    }

    @Override
    public Optional<CareTask> findById(Long id) {
        return careTaskRepository.findById(id);
    }

    @Override
    public List<CareTask> findByPetId(Long petId) {
        return careTaskRepository.findByPetId(petId);
    }

    @Override
    public List<CareTask> findOverdueTasks() {
        return careTaskRepository.findByDueDateBeforeAndStatus(LocalDate.now(), "pending");
    }

    @Override
    public CareTask save(CareTask careTask) {
        return careTaskRepository.save(careTask);
    }

    @Override
    public void deleteById(Long id) {
        careTaskRepository.deleteById(id);
    }
}
