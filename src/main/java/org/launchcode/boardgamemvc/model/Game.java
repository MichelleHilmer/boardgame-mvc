package org.launchcode.boardgamemvc.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "game")
@Entity
public class Game {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "gameName")
    private String gameName;

    @Column(name = "description")
    private String description;

    @Column(name = "minNumOfPlayers")
    private Integer minNumOfPlayers;

    @Column(name = "maxNumOfPlayers")
    private Integer maxNumOfPlayers;

    @Column(name = "minLengthOfGame")
    private Integer minLengthOfGame;

    @Column(name = "maxLengthOfGame")
    private Integer maxLengthOfGame;
}
