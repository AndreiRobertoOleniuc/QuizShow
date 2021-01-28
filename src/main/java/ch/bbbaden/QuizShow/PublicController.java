package ch.bbbaden.QuizShow;

import ch.bbbaden.Database.DatabaseActions;
import ch.bbbaden.Models.Frage;
import ch.bbbaden.Models.Spieler;
import ch.bbbaden.Models.StartGame;
import ch.bbbaden.Models.Wort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class PublicController {
    public PublicController() {

    }

    @GetMapping("/startGame")
    @CrossOrigin(origins = "http://localhost:3000")
    public StartGame startGame(@RequestParam(value = "name",defaultValue = "0") String name) throws SQLException, ClassNotFoundException {
        Spieler player = new Spieler(600,name,3);
        Wort wort = new DatabaseActions().getRandWort();
        StartGame newGame = new StartGame(player,wort);
        return newGame;
    }
    @GetMapping("/getNewWord")
    @CrossOrigin(origins = "http://localhost:3000")
    public Wort getNewWord() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getRandWort();
    }
    @GetMapping("/getNewFrage")
    @CrossOrigin(origins = "http://localhost:3000")
    public Frage getNewFrage() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getRandFrage();
    }
}
