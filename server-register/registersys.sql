-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2022 at 10:45 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registersys`
--

-- --------------------------------------------------------

--
-- Table structure for table `course_list`
--

CREATE TABLE `course_list` (
  `course_id` varchar(13) NOT NULL,
  `course_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course_list`
--

INSERT INTO `course_list` (`course_id`, `course_name`) VALUES
('61301', 'WEB DEVELOPMENT'),
('61302', 'OPERATING SYSTEM'),
('61303', 'SELECTED TOPICS IN COMPUTER'),
('61304', 'MOBILE APPLICATION DEVELOPME'),
('61305', 'INTERNET OF THINGS');

-- --------------------------------------------------------

--
-- Table structure for table `course_regis`
--

CREATE TABLE `course_regis` (
  `course_id` varchar(13) NOT NULL,
  `std_id` varchar(13) NOT NULL,
  `term` varchar(6) NOT NULL,
  `section` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course_regis`
--

INSERT INTO `course_regis` (`course_id`, `std_id`, `term`, `section`) VALUES
('61301', '6204062610067', '2564-1', '2'),
('61301', '6204062610105', '2564-1', '1'),
('61301', '6204062630394', '2564-1', '2'),
('61301', '6204062630556', '2564-1', '1'),
('61302', '6204062610067', '2564-1', '2'),
('61302', '6204062610105', '2564-1', '1'),
('61302', '6204062630394', '2564-1', '2'),
('61302', '6204062630556', '2564-1', '2'),
('61303', '6204062610067', '2564-2', '2'),
('61303', '6204062610105', '2564-2', '1'),
('61303', '6204062630394', '2564-2', '2'),
('61303', '6204062630556', '2564-2', '1'),
('61304', '6204062610067', '2564-2', '2'),
('61304', '6204062610105', '2564-2', '1'),
('61304', '6204062630394', '2564-2', '2'),
('61304', '6204062630556', '2564-2', '2'),
('61305', '6204062610067', '2564-2', '2'),
('61305', '6204062610105', '2564-2', '1'),
('61305', '6204062630394', '2564-2', '2'),
('61305', '6204062630556', '2564-2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `course_teacher`
--

CREATE TABLE `course_teacher` (
  `course_id` varchar(13) NOT NULL,
  `t_id` varchar(13) NOT NULL,
  `term` varchar(6) NOT NULL,
  `section` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course_teacher`
--

INSERT INTO `course_teacher` (`course_id`, `t_id`, `term`, `section`) VALUES
('61301', 't01', '2564-1', '1'),
('61301', 't01', '2564-1', '2'),
('61302', 't02', '2564-1', '1'),
('61302', 't03', '2564-1', '2'),
('61303', 't01', '2564-2', '1'),
('61303', 't01', '2564-2', '2'),
('61304', 't02', '2564-2', '1'),
('61304', 't03', '2564-2', '2'),
('61305', 't02', '2564-2', '1'),
('61305', 't03', '2564-2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `student_list`
--

CREATE TABLE `student_list` (
  `std_id` varchar(13) NOT NULL,
  `std_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_list`
--

INSERT INTO `student_list` (`std_id`, `std_name`) VALUES
('6204062610067', 'นครินทร์ สุขแพ'),
('6204062610105', 'ปิยากร ทองจันทร์'),
('6204062630394', 'ชคัทพล พรหมณี'),
('6204062630556', 'วีรภัทร สมานวณิชย์');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_list`
--

CREATE TABLE `teacher_list` (
  `t_id` varchar(13) NOT NULL,
  `t_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_list`
--

INSERT INTO `teacher_list` (`t_id`, `t_name`) VALUES
('t01', 'Teacher01'),
('t02', 'Teacher02'),
('t03', 'Teacher03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course_list`
--
ALTER TABLE `course_list`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `course_regis`
--
ALTER TABLE `course_regis`
  ADD PRIMARY KEY (`course_id`,`std_id`);

--
-- Indexes for table `course_teacher`
--
ALTER TABLE `course_teacher`
  ADD PRIMARY KEY (`course_id`,`section`);

--
-- Indexes for table `student_list`
--
ALTER TABLE `student_list`
  ADD PRIMARY KEY (`std_id`);

--
-- Indexes for table `teacher_list`
--
ALTER TABLE `teacher_list`
  ADD PRIMARY KEY (`t_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
