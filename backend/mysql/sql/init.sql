USE mydb; /* mysql.env MYSQL_DATABASEの値 */

DROP TABLE IF EXISTS member; /* memberという名前のテーブルがあったら消す */

CREATE TABLE member (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO member (name) VALUES ("itou"),("asou"),("abe"),("suga"),("hatoyama"),("koizumi");