package ch.bbbaden.Database;

import ch.bbbaden.Models.Frage;
import ch.bbbaden.Models.RanglistInputs;
import ch.bbbaden.Models.RanglistOutput;
import ch.bbbaden.Models.Wort;

import java.sql.*;
import java.util.ArrayList;
import java.util.Random;

public class DatabaseActions {
    private ArrayList<Wort> woerter;
    private ArrayList<Frage> frage;
    private final ConnectionDB jdbc;
    private Connection conn;

    //Read
    public DatabaseActions() throws SQLException, ClassNotFoundException {
        jdbc = ConnectionDB.getInstance();
        conn = jdbc.createConnection();
        fillListWoerter();
        fillFragen();
    }
    public void fillListWoerter() throws SQLException, ClassNotFoundException {
        try {
            woerter = new ArrayList<>();
            Statement st = conn.createStatement();
            String sql = "select wort,kategorie.kategorie \n" +
                    "from woerter\n" +
                    "left join kategorie\n" +
                    "on woerter.kategorie = kategorie.id;";
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()){
                woerter.add(new Wort(rs.getString(2),rs.getString(1)));
            }
            rs.close();
            st.close();
        } catch (SQLException throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
    }
    public void fillFragen() throws SQLException, ClassNotFoundException{
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
            conn.close();
            conn = jdbc.createConnection();
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

    public ArrayList<RanglistOutput> getRangListe() throws SQLException, ClassNotFoundException{
        try {
            ArrayList<RanglistOutput> rangList = new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select @rownum := @rownum + 1 as row_number,name,geldbetrag,anzahlrunden,spielzeit\n" +
                    "from rangliste\n" +
                    "cross join (select @rownum := 0) r\n" +
                    "order by geldbetrag DESC;");
            while(rs.next()) {
                String date = rs.getDate(5).toString();
                String time = rs.getTime(5).toString();
                String datetime = time + ", " +date;
                rangList.add(new RanglistOutput(rs.getInt(1),rs.getString(2),rs.getInt(3),rs.getInt(4),datetime));
            }

            st.close();
            rs.close();
            return rangList;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }
    public ArrayList<String> getKategorien() throws SQLException, ClassNotFoundException{
        try {
            ArrayList<String> kategorien = new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select * from kategorie");
            while(rs.next()) {
                kategorien.add(rs.getString(2));
            }

            st.close();
            rs.close();
            return kategorien;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }
    public ArrayList<Frage> getFragen() throws SQLException, ClassNotFoundException{
        try {
            ArrayList<Frage> fragen = new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select frage,kategorie.kategorie,antwort\n" +
                    "from frage\n" +
                    "left join kategorie\n" +
                    "on frage.kategorie = kategorie.id;");
            while(rs.next()) {
                fragen.add(new Frage(rs.getString(1),rs.getString(2),rs.getBoolean(3)));
            }
            st.close();
            rs.close();
            return fragen;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }
    public ArrayList<Wort> getWoerter() throws SQLException, ClassNotFoundException{
        try {
            ArrayList<Wort> woerter = new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select wort,kategorie.kategorie \n" +
                    "from woerter\n" +
                    "left join kategorie\n" +
                    "on woerter.kategorie = kategorie.id;");
            while(rs.next()) {
                woerter.add(new Wort(rs.getString(2),rs.getString(1)));
            }
            st.close();
            rs.close();
            return woerter;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }
    //Write
    public RanglistOutput saveGameandGetGame(RanglistInputs  input) throws SQLException, ClassNotFoundException{
        try {
            String queryCreateUser = "Insert into rangliste (name,geldbetrag,anzahlrunden) values (?,?,?);";
            PreparedStatement ps = conn.prepareStatement(queryCreateUser);
            System.out.println(input.getName());
            System.out.println(input.getBertag());
            System.out.println(input.getAnzahlrunden());
            ps.setString(1,input.getName());
            ps.setInt(2,input.getBertag());
            ps.setInt(3,input.getAnzahlrunden());
            ps.execute();

            ArrayList<RanglistOutput> rangList = new ArrayList<>();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select @rownum := @rownum + 1 as row_number,name,geldbetrag,anzahlrunden,spielzeit\n" +
                    "from rangliste\n" +
                    "cross join (select @rownum := 0) r\n" +
                    "order by geldbetrag DESC;");
            while(rs.next()) {
                String date = rs.getDate(5).toString();
                String time = rs.getTime(5).toString();
                String datetime = time + ", " +date;
                rangList.add(new RanglistOutput(rs.getInt(1),rs.getString(2),rs.getInt(3),rs.getInt(4),datetime));
            }
            for(RanglistOutput i: rangList){
                if(i.getName().equals(input.getName())&&i.getGeldbetrag()==input.getBertag()){
                    return i;
                }
            }

            ps.close();
            st.close();
            rs.close();
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }
    public boolean newKategorie(String kategorie) throws SQLException, ClassNotFoundException{
        try {
            String queryCreateUser = "Insert into kategorie (kategorie) values (?);";
            PreparedStatement ps = conn.prepareStatement(queryCreateUser);
            ps.setString(1,kategorie);
            ps.execute();
            ps.close();
            return true;
        } catch (SQLException  throwables) {
            throwables.printStackTrace();
        }
        return false;
    }
    public boolean newWort(String wort,String kategorie) throws SQLException, ClassNotFoundException{
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select id from kategorie where kategorie = '"+kategorie+"'");
            int id =0;
            while(rs.next()) {
                id=rs.getInt(1);
            }

            String queryCreateUser = "Insert into woerter (wort,kategorie) values (?,?);";
            PreparedStatement ps = conn.prepareStatement(queryCreateUser);
            ps.setString(1,wort);
            ps.setInt(2,id);
            ps.execute();
            ps.close();
            return true;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return false;
    }
    public boolean newFrage(String frage,String kategorie,boolean antwort) throws SQLException, ClassNotFoundException{
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select id from kategorie where kategorie = '"+kategorie+"'");
            int id = 0;
            while(rs.next()) {
                id=rs.getInt(1);
            }

            String queryCreateUser = "Insert into frage (frage,kategorie,antwort) values (?,?,?);";
            PreparedStatement ps = conn.prepareStatement(queryCreateUser);
            ps.setString(1,frage);
            ps.setInt(2,id);
            ps.setBoolean(3,antwort);
            ps.execute();
            ps.close();
            return true;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return false;
    }
    public Wort getSpecWord(String word) throws SQLException, ClassNotFoundException{
        try {
            String getWord = "select wort,kategorie.kategorie \n" +
                    "from woerter\n" +
                    "left join kategorie\n" +
                    "on woerter.kategorie = kategorie.id" +
                    "where wort = \""+word+"\";";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(getWord);
            while(rs.next()){
                return new Wort(rs.getString(2),rs.getString(1));
            }
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return null;
    }

    //Edit
    public boolean editWord(String word,String kategorie) throws SQLException, ClassNotFoundException{
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("select id from kategorie where kategorie = '"+kategorie+"'");
            int id = 0;
            while(rs.next()) {
                id=rs.getInt(1);
            }

            String editWord = "update  woerter set wort = ?, kategorie = ? where wort = ?";
            PreparedStatement ps = conn.prepareStatement(editWord);
            ps.setString(1,word);
            ps.setInt(2,id);
            ps.setString(3,word);
            ps.execute();
            ps.close();
            return true;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return false;
    }
    //Delete


    public boolean deleteFrage(String frage) throws SQLException, ClassNotFoundException{
        try {
            String deleteSQL = "DELETE FROM frage WHERE frage = ?";
            PreparedStatement ps = conn.prepareStatement(deleteSQL);
            ps.setString(1,frage);
            ps.execute();
            ps.close();
            return true;
        } catch (SQLException  throwables) {
            conn.close();
            conn = jdbc.createConnection();
            throwables.printStackTrace();
        }
        return false;
    }

    public boolean deleteWord(String word) throws SQLException, ClassNotFoundException{
            try {
                String deleteSQL = "DELETE FROM woerter WHERE wort = ?";
                PreparedStatement ps = conn.prepareStatement(deleteSQL);
                ps.setString(1,word);
                ps.execute();
                ps.close();
                return true;
            } catch (SQLException  throwables) {
                conn.close();
                conn = jdbc.createConnection();
                throwables.printStackTrace();
            }
            return false;
    }
}
