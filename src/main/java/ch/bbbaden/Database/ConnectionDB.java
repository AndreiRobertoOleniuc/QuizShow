package ch.bbbaden.Database;

import java.sql.DriverManager;
import java.sql.SQLException;

public class Connection {
    private static Connection instance = null;
    private final String USERNAME = "root";
    private final String PASSWORD = "";
    private final String DB_CONNECTION_STRING = "jdbc:mysql://localhost/wheeloffortune";
    private final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private java.sql.Connection cn = null;

    private Connection() {

    }

    public static Connection getInstance() {
        if (instance == null) {
            instance = new Connection();
        }
        return instance;
    }

    public java.sql.Connection createConnection() throws SQLException, ClassNotFoundException {
        if (cn == null) {
            Class.forName(DRIVER);
            cn =  DriverManager.getConnection(DB_CONNECTION_STRING, USERNAME, PASSWORD);
        }
        return cn;
    }

    public void closeConnection() throws SQLException {
        cn.close();
        cn = null;
    }
}
