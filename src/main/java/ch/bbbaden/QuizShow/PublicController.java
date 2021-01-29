package ch.bbbaden.QuizShow;

import ch.bbbaden.Database.DatabaseActions;
import ch.bbbaden.Models.*;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class PublicController {
    public PublicController() {

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/api/public/startGame")
    @CrossOrigin(origins = "http://localhost:3000")
    public StartGame startGame(@RequestParam(value = "name",defaultValue = "0") String name) throws SQLException, ClassNotFoundException {
        Spieler player = new Spieler(600,name,3);
        Wort wort = new DatabaseActions().getRandWort();
        StartGame newGame = new StartGame(player,wort);
        return newGame;
    }
    @GetMapping("/api/public/getNewWord")
    @CrossOrigin(origins = "http://localhost:3000")
    public Wort getNewWord() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getRandWort();
    }
    @GetMapping("/api/public/getNewFrage")
    @CrossOrigin(origins = "http://localhost:3000")
    public Frage getNewFrage() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getRandFrage();
    }
    @PostMapping("/api/public/saveGame")
    @CrossOrigin(origins = "http://localhost:3000")
    public RanglistOutput getErg(@RequestBody RanglistInputs input) throws SQLException, ClassNotFoundException {
        return new DatabaseActions().saveGameandGetGame(input);
    }
    @GetMapping("/api/public/getRangliste")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<RanglistOutput> getRangliste() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getRangListe();
    }
    @GetMapping("/api/public/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean login(@RequestParam(value = "username", defaultValue = "0") String username,@RequestParam(value = "password", defaultValue = "0") String password){
        if(username.equals("admin")&&password.equals("12345")){
            return true;
        }
        return false;
    }
    //Admin
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/api/public/getKategorien")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<String> login() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getKategorien();
    }
    @PostMapping("/api/public/addKategorie")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean addKategorie(@RequestParam(value = "kategorie", defaultValue = "0") String kategorie) throws SQLException, ClassNotFoundException {
        return new DatabaseActions().newKategorie(kategorie);
    }
    @PostMapping("/api/public/addWort")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean addWort(@RequestParam(value = "wort", defaultValue = "0") String wort,@RequestParam(value = "kategorie", defaultValue = "0") String kategorie) throws SQLException, ClassNotFoundException {
        return new DatabaseActions().newWort(wort,kategorie);
    }
    @PostMapping("/api/public/addFrage")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean addFrage(@RequestParam(value = "frage", defaultValue = "0") String frage,@RequestParam(value = "kategorie", defaultValue = "0") String kategorie,@RequestParam(value = "antwort") boolean antwort) throws SQLException, ClassNotFoundException {
        return new DatabaseActions().newFrage(frage,kategorie,antwort);
    }
    @GetMapping("/api/public/getWoerter")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<Wort> getWoerter() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getWoerter();
    }
    @GetMapping("/api/public/getFragen")
    @CrossOrigin(origins = "http://localhost:3000")
    public ArrayList<Frage> getFragen() throws SQLException, ClassNotFoundException {
        return new DatabaseActions().getFragen();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
