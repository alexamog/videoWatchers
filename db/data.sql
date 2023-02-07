CREATE DATABASE videoapp;
FLUSH PRIVILEGES;
USE videoapp;
CREATE TABLE videos(
    video_id INT(11) NOT NULL AUTO_INCREMENT,
    video_title VARCHAR(255) NOT NULL,
    video_path VARCHAR(255) NOT NULL,
    video_owner VARCHAR(255) NOT NULL,
    video_image VARCHAR(255),
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
INSERT INTO videousers(user_email, user_username, user_password,user_firstName,user_lastName) VALUES ('aamog@my.bcit.ca','bleulenny','123', 'Alexander','Amog');
INSERT INTO videos(video_title,video_path,video_owner,video_image) VALUES('JomaTech - Day in a life of a FAANG SWE','https://www.youtube.com/watch?v=hWFDujYzvbI','JomaTech','https://i.ytimg.com/vi/hWFDujYzvbI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYtAfLi2e58fOi1OoTSHB8Fbp1qw');
INSERT INTO videos(video_title,video_path,video_owner,video_image) VALUES('Joji - Slow dancing in the dark M/V','https://www.youtube.com/watch?v=K3Qzzggn--s','Joji','https://i.ytimg.com/vi/K3Qzzggn--s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoxDsaFGEv0_Tx0xDDNKCdhwd2ww');
INSERT INTO videos(video_title,video_path,video_owner,video_image) VALUES('Atarashi Gakko - Otonablue','https://www.youtube.com/watch?v=-yR1IBtixHY','Atarashi Gakko','https://i.ytimg.com/vi/-yR1IBtixHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx_m4okoCo-zK3CzJ68tAp3p9H9g');
INSERT INTO videos(video_title,video_path,video_owner,video_image) VALUES('TaehaTypes - Fjell keyboard','https://www.youtube.com/watch?v=aeqnEJpPZVY','Taehatypes','https://i.ytimg.com/vi/aeqnEJpPZVY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEsoOzAP&rs=AOn4CLDEKAMYOoCylz2iPVY1kjfKHAsqEg');

CREATE USER 'videoapp-user'@'%' IDENTIFIED BY 'videouser3495';
GRANT ALL PRIVILEGES ON videoapp.* TO 'videoapp-user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;