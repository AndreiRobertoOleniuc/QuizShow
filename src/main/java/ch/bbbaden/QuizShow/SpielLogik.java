package ch.bbbaden.QuizShow;

import ch.bbbaden.Models.Kategorien;
import ch.bbbaden.Models.Wort;

import java.util.ArrayList;
import java.util.Random;

public class SpielLogik {
    ArrayList<Wort> wort;
    public SpielLogik() {
        wort = new ArrayList<>();
        wort.add(new Wort(Kategorien.Essen,"Prosciutto e Funghi"));
        wort.add(new Wort(Kategorien.Filme,"Spiderman"));
        wort.add(new Wort(Kategorien.Sport,"FIFA Worldcup"));
    }
    public Wort getRandWort(){
        Random r = new Random();
        return wort.get(r.nextInt(wort.size()));
    }
}
