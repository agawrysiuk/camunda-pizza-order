CREATE TABLE literal (
    id int PRIMARY KEY,
    step varchar(250),
    key varchar(250),
    message varchar(250),
    description varchar(64)
);

CREATE SEQUENCE SEQ_LITERAL START WITH 1;
