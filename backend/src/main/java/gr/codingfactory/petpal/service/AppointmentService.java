package gr.codingfactory.petpal.service;

import gr.codingfactory.petpal.model.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmentService {
    List<Appointment> findAll();
    Optional<Appointment> findById(Long id);
    List<Appointment> findByPetId(Long petId);
    Appointment save(Appointment appointment);
    void deleteById(Long id);
}
