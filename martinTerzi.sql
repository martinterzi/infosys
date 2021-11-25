-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: us-cdbr-east-04.cleardb.com
-- Tiempo de generación: 25-11-2021 a las 18:54:57
-- Versión del servidor: 5.6.50-log
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `heroku_bbff7046a7069c3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `choferes`
--

CREATE TABLE `choferes` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `dni` int(20) NOT NULL,
  `vtolic` text NOT NULL,
  `vtopsico` text NOT NULL,
  `vtopel` text NOT NULL,
  `nt` int(20) NOT NULL,
  `fdni` text NOT NULL,
  `fn` text NOT NULL,
  `domicilio` text NOT NULL,
  `vtog` text NOT NULL,
  `cuil` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `choferes`
--

INSERT INTO `choferes` (`id`, `nombre`, `dni`, `vtolic`, `vtopsico`, `vtopel`, `nt`, `fdni`, `fn`, `domicilio`, `vtog`, `cuil`) VALUES
(55, 'ESTRAVIS JORGE', 17224141, '05/08/2022', '30/03/2022', '13/02/2022', 9710192, '10/05/2010', '31/10/1964', '', '', '20-17224141-8'),
(65, 'DASILVA ARIEL ', 16915879, '04/01/2022', '15/03/2023', '25/09/22023', 398934995, '15/09/2015', '21/01/1964', 'ALVAREZ JONTE 4074', '', '20-16915879-8'),
(75, 'DELGADO JOSE', 28179119, '13/06/2022', '06/09/2023', '04/09/2022', 235084805, '13/12/2013', '19/05/1980', '', '20/12/2021', '20-28179119-3'),
(85, 'DOLEZOR GUSTAVO', 33173986, '20/11/2022', '10/03/2023', '08/01/2022', 240808530, '20/01/2014', '16/02/1987', 'RN7 KM99 S.A. GILES', '08/09/2022', ''),
(95, 'LOPEZ CRISTIAN', 29210890, '16/03/2022', '20/05/2023', '13/02/2023', 430504400, '05/04/2016', '21/04/1982', 'CASA 4 - 8vo SESQUINCENARIO - POSADAS', '05/07/2023', '20-29210890-8'),
(105, 'GIMENEZ CARLOS ', 18726679, '22/10/2022', '02/03/2022', '13/02/2022', 42990681, '22/03/2011', '07/03/1969', 'FARADAY 1989 MERLO', '', ''),
(115, 'MARTOS MARCELO', 20890229, '10/02/2022', '11/01/2022', '15/05/2022', 387982571, '23/07/2015', '01/08/1969', '', '30/01/2023', '20-20890229-7'),
(125, 'SOLIS', 29116367, '07/10/2023', '14/04/2023', '09/10/2023', 314115120, '', '29/04/1981', 'M ACOSTA 2020', '04/10/2022', '20-29116367-0'),
(135, 'GUTIERREZ', 16527401, '27/09/2022', '04/03/2022', '01/03/2022', 455712779, '11/09/2016', '29/06/1963', '134 837 - MERCEDES', '27/02/2023', '20-16527401-7');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades`
--

CREATE TABLE `unidades` (
  `id` int(11) NOT NULL,
  `patente` text NOT NULL,
  `modelo` text NOT NULL,
  `chasis` text NOT NULL,
  `motor` text NOT NULL,
  `segurovto` text NOT NULL,
  `seguropol` text NOT NULL,
  `rto` text NOT NULL,
  `ruta` text NOT NULL,
  `mas` text NOT NULL,
  `spot` varchar(11) NOT NULL,
  `domicilio` text NOT NULL,
  `ve` text NOT NULL,
  `service` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `unidades`
--

INSERT INTO `unidades` (`id`, `patente`, `modelo`, `chasis`, `motor`, `segurovto`, `seguropol`, `rto`, `ruta`, `mas`, `spot`, `domicilio`, `ve`, `service`) VALUES
(5, 'OXJ285', 'IVECO CURSOR 330', '8ATS2KNH0GX096714', 'F2BE0681*8145910', '22/09/2022', '1222222', '22/05/2022', '18/06/2022', '', '09/12/2021', '', '26/01/2022', 10),
(25, 'MDH066', 'METALURGICA BELGRANO', '8B9009924DS000006', '', '22/09/2022', '10386424', '25/11/2021', '23/12/2021', '', '16/03/2022', '', '15/5/2022', 0),
(35, 'MDH065', 'METALURGICA BELGRANO', '8B9009924DS000005', '', '22/09/2022', '10386424', '15/11/2022', '23/12/2021', '', '07/12/21', '', '23/12/2021', 0),
(45, 'MDH064', 'METALURGICA BELGRANO', '8B9009924DS000004', '', '22/09/2022', '10386424', '12/01/2022', '23/12/2021', '', '15/01/2022', '', '23/03/2022', 0),
(55, 'JSQ091', 'METALURGICA BELGRANO', '8B9009924BS000011', '', '22/09/2022', '10386424', '04/06/2022', '04/06/2022', '', '01/01/2022', '', '', 0),
(65, 'JSQ093', 'METALURGICA BELGRANO', '8B9009924BS000010', '', '22/09/2022', '10386424', '08/03/2022', '23/12/2021', '', '0000-00-00', '', '', 0),
(75, 'OXJ280', 'METALURGICA BELGRANO', '8B9SDJDDMFS000023', '', '22/09/2022', '10386424', '05/05/2022', '21/09/2022', '', '0000-00-00', '', '', 0),
(85, 'AA590PU', 'VOLVO FH', '*9BVXG10A4HE840411', 'D13*903533*C2*E', '22/09/2022', '10386424', '21/09/2022', '', '', '0000-00-00', '', '', 0),
(95, 'AA513TL', 'VOLVO FH', '*9BVXG10A6HE840317*', 'D13*903435*C2*E', '22/09/2022', '10386424', '02/09/2022', '07/09/2022', '', '01/01/2022', '', '', 0),
(105, 'AA513TM', 'VOLVO FH', '*9BVXG10A0HE840341*', 'D13*903465*C2*E', '22/09/2022', '10386424', '22/07/2022', '', '', '01/01/2022', '', '', 0),
(115, 'LXO472', 'RENO 380 DXI', '123456', '654789', '22/09/2022', '123555666', '25/11/2021', '23/12/2021', '', '01/01/2022', '', '', 0),
(125, 'LRZ244', 'STRALIS', '*8ATM2ASH0CX079495*', 'F3B30681*5031670*', '22/09/2022', '10386424', '27/07/2022', '29/12/2021', 'NO', '01/01/2022', '', '', 0),
(135, 'LXO473', 'RENO 380 DXI', '9U425GPA0DMK17555', 'DXI11262308', '22/09/2022', '10386424', '13/11/2022', '23/12/2021', '01/01/2022', '01/01/2022', '', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `user` text NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `pass`) VALUES
(5, 'martin', 'martin', 'martin'),
(15, 'martin', 'martin', '$2a$08$nBctBG/SnQ/PX9D5m1ZA..86bZtEyFnPaFd8YBMT2KroJ7c00khCy'),
(25, '1', '1', '$2a$08$jc9/VjIibXgwKrtpPr1.Zeam7m5ySYZQku5B3EOTrT9qR4.iVhNcy'),
(35, '2', '2', '2'),
(45, '111', '111', '111'),
(55, '', '', ''),
(65, 'ernesto', 'ernesto', 'chciaa'),
(75, 'pepe', 'pepe', ''),
(85, 'pepo', 'pepo', 'pepo'),
(95, '', 'martin', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `choferes`
--
ALTER TABLE `choferes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `unidades`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `choferes`
--
ALTER TABLE `choferes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT de la tabla `unidades`
--
ALTER TABLE `unidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
