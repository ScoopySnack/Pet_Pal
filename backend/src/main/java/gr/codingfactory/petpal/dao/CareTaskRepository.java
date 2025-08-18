package gr.codingfactory.petpal.dao;

import gr.codingfactory.petpal.model.CareTask;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CareTaskRepository extends JpaRepository<CareTask, Long> {
    List<CareTask> findByPetId(Long petId);
    List<CareTask> findByDueDateBeforeAndStatus(LocalDate date, String status);
    List<CareTask> findByPetOwnerId(Long ownerId);
}
