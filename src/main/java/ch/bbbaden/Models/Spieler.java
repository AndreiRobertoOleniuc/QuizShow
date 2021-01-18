package ch.bbbaden.Models;

public class Spieler {
    private int betrag;
    private String name;
    private int lebensPunkt;

    public Spieler(int betrag, String name, int lebensPunkt) {
        this.betrag = betrag;
        this.name = name;
        this.lebensPunkt = lebensPunkt;
    }

    public int getBetrag() {
        return betrag;
    }

    public void setBetrag(int betrag) {
        this.betrag = betrag;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLebensPunkt() {
        return lebensPunkt;
    }

    public void setLebensPunkt(int lebensPunkt) {
        this.lebensPunkt = lebensPunkt;
    }
}
