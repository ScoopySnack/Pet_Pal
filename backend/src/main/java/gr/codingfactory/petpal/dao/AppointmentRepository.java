package gr.codingfactory.petpal.dao;

import gr.codingfactory.petpal.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByPetId(Long petId);

    // Optionally, add:
    List<Appointment> findByPetOwnerId(Long ownerId);
}
