package org.launchcode.boardgamemvc.controller;


import org.launchcode.boardgamemvc.model.Game;
import org.launchcode.boardgamemvc.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin("http://localhost:3000")
@RequestMapping("/game")
public class GameController {
    private GameService gameService;

    public GameController(GameService gameService){
        this.gameService = gameService;
    }

    @GetMapping
    @CrossOrigin("http://localhost:3000")
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
