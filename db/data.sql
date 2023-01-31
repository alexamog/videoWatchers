CREATE DATABASE videoapp;
USE videoapp;

CREATE TABLE videos(
    Video_Id INT(11) NOT NULL AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Video_Path VARCHAR(255) NOT NULL,
    PRIMARY KEY (Video_Id)
);
CREATE TABLE videousers(
    User_Id INT(11) NOT NULL AUTO_INCREMENT,
    User VARCHAR(100) NOT NULL,
    User_Password VARCHAR(100) NOT NULL,
    PRIMARY KEY (User_Id)
);
INSERT INTO videousers(User, User_Password) VALUES ('aamog@my.bcit.ca','123');

CREATE USER 'videouser'@'%' IDENTIFIED BY 'videouser3495';
GRANT ALL PRIVILEGES ON videoapp.* TO 'videouser'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;