package ch.bbbaden.Models;

import java.util.ArrayList;

public class Wort {
    private String kategorie;
    private String wort;
    private ArrayList<Chars> chars;

    public Wort(String kategorie, String wort) {
        this.kategorie = kategorie;
        this.wort = wort;
    }

    public String getWort() {
        return wort;
    }

    public String getKategorie() {
        return kategorie;
    }

    public ArrayList<Chars> getChars() {
        chars = new ArrayList<>();
        for (char c : wort.toCharArray()){
            chars.add(new Chars(c,false));
        }
        return chars;
    }
}
