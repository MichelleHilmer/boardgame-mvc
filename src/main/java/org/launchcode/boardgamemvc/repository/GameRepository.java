package org.launchcode.boardgamemvc.repository;


import org.launchcode.boardgamemvc.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}
