package org.launchcode.boardgamemvc.service;


import org.launchcode.boardgamemvc.model.Game;
import org.launchcode.boardgamemvc.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private GameRepository gameRepository;

    public GameService(GameRepository gameRepository){
        this.gameRepository = gameRepository;
    }
    public List<Game> getAll(){
        return gameRepository.findAll();
    }

    public Game addGame(Game game){
        return gameRepository.save(game);
    }
}
