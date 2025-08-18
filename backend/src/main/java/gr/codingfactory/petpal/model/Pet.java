package gr.codingfactory.petpal.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String species;
    private String breed; // Optional, can be null
    private Integer age; // Optional, can be null
    private LocalDate birthDate;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<CareTask> careTasks = new ArrayList<>();

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<Appointment> appointments = new ArrayList<>();

    public Pet() {}

    public Pet(String name, String species, LocalDate birthDate, String notes, User owner) {
        this.name = name;
        this.species = species;
        this.birthDate = birthDate;
        this.notes = notes;
        this.owner = owner;
    }

}
