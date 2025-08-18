package gr.codingfactory.petpal.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Entity
public class CareTask {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String taskType;
    private LocalDate dueDate;
    private String status; // pending, completed
    private String notes;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    // Constructors, getters, and setters

    public CareTask() {}

    public CareTask(String taskType, LocalDate dueDate, String status, String notes, Pet pet) {
        this.taskType = taskType;
        this.dueDate = dueDate;
        this.status = status;
        this.notes = notes;
        this.pet = pet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }


}
