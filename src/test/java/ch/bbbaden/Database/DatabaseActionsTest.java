package ch.bbbaden.Database;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

class DatabaseActionsTest {

    @Test
    void getRandWort() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getRandWort());
    }

    @Test
    void getRandFrage() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getRandFrage());
    }

    @Test
    void getRangListe() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getRangListe());
    }

    @Test
    void getKategorien() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getRangListe());
    }

    @Test
    void getFragen() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getFragen());
    }

    @Test
    void getSpecWord() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertNotNull(db.getSpecWord("Apple"));
    }

    @Test
    void editWord() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertTrue(db.editWord("Apple","Culture"));
    }

    @Test
    void deleteFrage() throws SQLException, ClassNotFoundException {
        DatabaseActions db = new DatabaseActions();
        assertTrue(db.deleteFrage("Ist es wahr dass eine Pizza mehr Kalorien hat als ein Big Mac"));
    }
}