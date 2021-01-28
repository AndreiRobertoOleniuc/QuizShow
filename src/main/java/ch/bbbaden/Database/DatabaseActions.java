package ch.bbbaden.Database;

import ch.bbbaden.Models.Frage;
import ch.bbbaden.Models.Wort;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Random;

public class DatabaseActions {
    private ArrayList<Wort> woerter;
    private ArrayList<Frage> frage;
    private final ConnectionDB jdbc;
    private final Connection conn;

    //Read
    public DatabaseActions() throws SQLException, ClassNotFoundException {
        jdbc = ConnectionDB.getInstance();
        conn = jdbc.createConnection();
        fillListWoerter();
        fillFragen();
    }
    public void fillListWoerter(){
        try {
            woerter = new ArrayList<>();
            Statement st = conn.createStatement();
            String sql = "select wort,kategorie.kategorie \n" +
                    "from woerter\n" +
                    "left join kategorie\n" +
                    "on woerter.kategorie = kategorie.id;";
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()){
                woerter.add(new Wort(rs.getString(1),rs.getString(2)));
            }
            rs.close();
            st.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    public void fillFragen(){
        try {
            frage = new ArrayList<>();
            Statement st = conn.createStatement();
            String sql = "select frage,kategorie.kategorie,antwort\n" +
                    "from frage\n" +
                    "left join kategorie\n" +
                    "on frage.kategorie = kategorie.id;";
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()){
                frage.add(new Frage(rs.getString(1),rs.getString(2),rs.getBoolean(3)));
            }
            rs.close();
            st.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    public Wort getRandWort(){
        Random r = new Random();
        return woerter.get(r.nextInt(woerter.size()));
    }
    public Frage getRandFrage(){
        Random r = new Random();
        return frage.get(r.nextInt(frage.size()));
    }
    //Write
    //Edit
}
