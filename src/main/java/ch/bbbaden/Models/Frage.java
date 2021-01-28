package ch.bbbaden.Models;

public class Frage {
    private String frage;
    private String kategorie;
    private boolean antwort;

    public Frage(String frage, String kategorie, boolean antwort) {
        this.frage = frage;
        this.kategorie = kategorie;
        this.antwort = antwort;
    }

    public String getFrage() {
        return frage;
    }

    public void setFrage(String frage) {
        this.frage = frage;
    }

    public String getKategorie() {
        return kategorie;
    }

    public void setKategorie(String kategorie) {
        this.kategorie = kategorie;
    }

    public boolean isAntwort() {
        return antwort;
    }

    public void setAntwort(boolean antwort) {
        this.antwort = antwort;
    }
}
