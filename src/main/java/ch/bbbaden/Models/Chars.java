package ch.bbbaden.Models;

public class Chars {
    private char symbol;
    private boolean visible;

    public Chars(char symbol, boolean visible) {
        this.symbol = symbol;
        this.visible = visible;
    }

    public char getSymbol() {
        return symbol;
    }

    public void setSymbol(char symbol) {
        this.symbol = symbol;
    }

    public boolean isVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }
}
