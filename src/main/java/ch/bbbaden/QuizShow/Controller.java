package ch.bbbaden.QuizShow;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class Controller {
    ArrayList<String> wörter;
    public Controller(){
        wörter = new ArrayList<>();
        wörter.add("FC Barcelona");
    }
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getWortRand(){
        return wörter.get(0);
    }
}
