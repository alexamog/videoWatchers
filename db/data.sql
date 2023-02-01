CREATE DATABASE videoapp;
USE videoapp;

CREATE TABLE videos(
    video_id INT(11) NOT NULL AUTO_INCREMENT,
    video_title VARCHAR(255) NOT NULL,
    video_Path VARCHAR(255) NOT NULL,
    video_owner VARCHAR(255) NOT NULL,
    PRIMARY KEY (video_id)
);
CREATE TABLE videousers(
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(100) NOT NULL,
    user_username VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_firstName VARCHAR(100) NOT NULL,
    user_lastName VARCHAR(100) NOT NULL,
    PRIMARY KEY (User_Id)
);
INSERT INTO videousers(user_email, user_username, User_password) VALUES ('aamog@my.bcit.ca','bleulenny','123', 'Alexander','Amog');

CREATE USER 'videouser'@'%' IDENTIFIED BY 'videouser3495';
GRANT ALL PRIVILEGES ON videoapp.* TO 'videouser'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;