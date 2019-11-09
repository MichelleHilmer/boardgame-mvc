package org.launchcode.boardgamemvc.controller;


import org.launchcode.boardgamemvc.model.Game;
import org.launchcode.boardgamemvc.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {
    private GameService gameService;

    public GameController(GameService gameService){
        this.gameService = gameService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Game> getAll(){
        return gameService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Game addNew(@RequestBody Game game){
        return gameService.addGame(game);
    }
}
