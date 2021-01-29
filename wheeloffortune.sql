-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 29. Jan 2021 um 21:37
-- Server-Version: 10.4.13-MariaDB
-- PHP-Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `wheeloffortune`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `frage`
--

CREATE TABLE `frage` (
  `id` int(11) NOT NULL,
  `frage` varchar(255) NOT NULL,
  `kategorie` int(11) NOT NULL,
  `antwort` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `frage`
--

INSERT INTO `frage` (`id`, `frage`, `kategorie`, `antwort`) VALUES
(1, 'Ist es wahr dass eine Pizza mehr Kalorien hat als ein Big Mac', 1, 1),
(2, 'Hat Facebook mehr Geld als Apple', 4, 0),
(3, 'Ist es wahr das Elon Musk reicher ist als Jeff Bezos', 6, 1),
(4, 'Ist Amerika gr?sser als Russland', 6, 0),
(5, 'Hat ein MCFlurry mehr Kalorien als ein Doghnut', 1, 1),
(6, 'Hat Real Madrid mehr CL Titel als Barcelona', 3, 1),
(7, 'Ist BIll Gates die Reichste Person', 6, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kategorie`
--

CREATE TABLE `kategorie` (
  `id` int(11) NOT NULL,
  `kategorie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `kategorie`
--

INSERT INTO `kategorie` (`id`, `kategorie`) VALUES
(1, 'Essen'),
(2, 'Filme'),
(3, 'Sport'),
(4, 'Wirtschaft'),
(5, 'Gaming'),
(6, 'Welt');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rangliste`
--

CREATE TABLE `rangliste` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `geldbetrag` int(255) NOT NULL,
  `anzahlrunden` int(100) NOT NULL,
  `spielzeit` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `rangliste`
--

INSERT INTO `rangliste` (`id`, `name`, `geldbetrag`, `anzahlrunden`, `spielzeit`) VALUES
(1, 'Andrei', 350300, 2, '2021-01-29 21:27:00'),
(2, 'Tim', 20000020, 5, '2021-01-29 21:27:00'),
(3, 'Shenia', 1040, 1, '2021-01-29 21:27:00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `woerter`
--

CREATE TABLE `woerter` (
  `id` int(11) NOT NULL,
  `wort` varchar(255) NOT NULL,
  `kategorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `woerter`
--

INSERT INTO `woerter` (`id`, `wort`, `kategorie`) VALUES
(1, 'Prosciutto e Funghi', 1),
(2, 'Spiderman', 2),
(3, 'FIFA Worldcup', 3),
(4, 'Apple', 4),
(5, 'Playstation', 5),
(6, 'Swiss', 6),
(7, 'Champions League', 3),
(8, 'Spain', 6),
(9, 'Real Madrid', 3),
(10, 'Burger', 1),
(11, 'Tesla', 4);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `frage`
--
ALTER TABLE `frage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategorie` (`kategorie`);

--
-- Indizes für die Tabelle `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `rangliste`
--
ALTER TABLE `rangliste`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `woerter`
--
ALTER TABLE `woerter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategorie` (`kategorie`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `frage`
--
ALTER TABLE `frage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `rangliste`
--
ALTER TABLE `rangliste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `woerter`
--
ALTER TABLE `woerter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `frage`
--
ALTER TABLE `frage`
  ADD CONSTRAINT `frage_ibfk_1` FOREIGN KEY (`kategorie`) REFERENCES `kategorie` (`id`);

--
-- Constraints der Tabelle `woerter`
--
ALTER TABLE `woerter`
  ADD CONSTRAINT `woerter_ibfk_1` FOREIGN KEY (`kategorie`) REFERENCES `kategorie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
