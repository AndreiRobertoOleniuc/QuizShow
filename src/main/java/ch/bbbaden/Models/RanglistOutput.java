package ch.bbbaden.Models;

public class RanglistOutput {
    private int rang;
    private String name;
    private int geldbetrag;
    private int anzahlrunden;
    private String zeitpunkt;

    public RanglistOutput(int rang, String name, int geldbetrag, int anzahlrunden, String zeitpunkt) {
        this.rang = rang;
        this.name = name;
        this.geldbetrag = geldbetrag;
        this.anzahlrunden = anzahlrunden;
        this.zeitpunkt = zeitpunkt;
    }

    public int getRang() {
        return rang;
    }

    public void setRang(int rang) {
        this.rang = rang;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGeldbetrag() {
        return geldbetrag;
    }

    public void setGeldbetrag(int geldbetrag) {
        this.geldbetrag = geldbetrag;
    }

    public int getAnzahlrunden() {
        return anzahlrunden;
    }

    public void setAnzahlrunden(int anzahlrunden) {
        this.anzahlrunden = anzahlrunden;
    }

    public String getZeitpunkt() {
        return zeitpunkt;
    }

    public void setZeitpunkt(String zeitpunkt) {
        this.zeitpunkt = zeitpunkt;
    }
}
