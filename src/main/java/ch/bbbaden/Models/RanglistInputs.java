package ch.bbbaden.Models;

public class RanglistInputs {
    private String name;
    private int betrag;
    private int anzahlrunden;

    public RanglistInputs(String name, int betrag, int anzahlrunden) {
        this.name = name;
        this.betrag = betrag;
        this.anzahlrunden = anzahlrunden;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBertag() {
        return betrag;
    }

    public void setBertag(int bertag) {
        this.betrag = bertag;
    }

    public int getAnzahlrunden() {
        return anzahlrunden;
    }

    public void setAnzahlrunden(int anzahlrunden) {
        this.anzahlrunden = anzahlrunden;
    }
}
