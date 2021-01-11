package ch.bbbaden.QuizShow;

import ch.bbbaden.Models.Chars;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class Controller {
    ArrayList<String> wörter;
    ArrayList<Chars> wort;
    public Controller(){
        wörter = new ArrayList<>();
        wort = new ArrayList<>();
        wörter.add("FC Barcelona");
        for (char c : wörter.get(0).toCharArray()) {
            wort.add(new Chars(c,false));
        }
    }
    @GetMapping("/getWort")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<Chars> getWortRand(){
        return wort;
    }
}
