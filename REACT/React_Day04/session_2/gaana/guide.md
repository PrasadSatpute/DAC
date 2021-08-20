# **Gaana.com clone**

#### **Server**

- database structure

```bash
  > mysql -u root -p
```

```sql
  create database gaana;
  use gaana;

  create table user (id integer primary key auto_increment, firstName varchar(100), lastName varchar(100), email varchar(100), password varchar(100), isActive int(1) default 1, created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

  create table album (id integer primary key auto_increment, title varchar(100), artistId integer, thumbnail varchar(100), duration varchar(10), created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

  create table song (id integer primary key auto_increment, title varchar(100), albumId integer, artistId integer, thumbnail varchar(100), duration varchar(10), created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

  create table artist (id integer primary key auto_increment, firstName varchar(100), lastName varchar(100), thumbnail varchar(100), create_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

```

- express application

```bash
  > mkdir server
  > cd server
  > npm install express mysql2 crypto-js multer cors
```

#### **Client**

- **portal**

  - create portal app

    ```bash
      > npx create-react-app portal
    ```

  - install required packages

    ```bash
      > cd portal
      > npm install react-router react-router-dom axios
    ```
