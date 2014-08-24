create user 'test' IDENTIFIED BY 'test123';
create database ri_db;
grant all privileges on ri_db.* to 'test';
