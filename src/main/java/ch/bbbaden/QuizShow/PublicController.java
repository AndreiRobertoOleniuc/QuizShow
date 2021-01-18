package ch.bbbaden.QuizShow;

import ch.bbbaden.Models.Chars;
import ch.bbbaden.Models.Spieler;
import ch.bbbaden.Models.StartGame;
import ch.bbbaden.Models.Wort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Random;

@RestController
public class Controller {
    ArrayList<String> wörter;
    ArrayList<Chars> wort;
    public Controller(){
        wörter = new ArrayList<>();
        wort = new ArrayList<>();
        wörter.add("Snowboarding ist cool");
        wörter.add("Spring Boot");
        wörter.add("Anakin Skywalker");
        wörter.add("Python");
        wörter.add("Javascript");
    }
    @GetMapping("/getWort")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<Chars> getWortRand(){
        Random r = new Random();
        wort = new ArrayList<>();
        for (char c : wörter.get(r.nextInt(5)).toCharArray()){
            wort.add(new Chars(c,false));
        }
        return wort;
    }
    @GetMapping("/startGame")
    @CrossOrigin(origins = "http://localhost:3000")
    public StartGame startGame(@RequestParam(value = "name",defaultValue = "0") String name){
        Spieler player = new Spieler(0,name,3);
        ArrayList<Chars> chars = getWortRand();
        Wort wort = new Wort()
        StartGame newGame = new StartGame()
        return null;
    }
}
