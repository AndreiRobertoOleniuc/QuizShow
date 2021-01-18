package ch.bbbaden.Models;

import java.util.ArrayList;

public class StartGame {
    private Spieler player;
    private Wort wort;

    public StartGame(Spieler player, Wort wort) {
        this.player = player;
        this.wort = wort;
    }

    public Spieler getPlayer() {
        return player;
    }

    public void setPlayer(Spieler player) {
        this.player = player;
    }

    public Wort getWort() {
        return wort;
    }

    public void setWort(Wort wort) {
        this.wort = wort;
    }
}
