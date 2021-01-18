package ch.bbbaden.QuizShow;

import ch.bbbaden.Models.Spieler;
import ch.bbbaden.Models.StartGame;
import ch.bbbaden.Models.Wort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {
    private SpielLogik sp;
    public PublicController() {
        sp = new SpielLogik();
    }

    @GetMapping("/startGame")
    @CrossOrigin(origins = "http://localhost:3000")
    public StartGame startGame(@RequestParam(value = "name",defaultValue = "0") String name){
        Spieler player = new Spieler(0,name,3);
        Wort wort = sp.getRandWort();
        StartGame newGame = new StartGame(player,wort);
        return newGame;
    }
}
