# nodejs-test
This service builds on top of the NodeJS . nodejs-test is server-side . using ExpressJS, DBMS : Postgresql and Design patern : Service Repository Patern 

## Installations
- Install DBeaver/TablePlus/pgAdmin and PostgreSQL
- Create file . env at nodejs-test
You need to configure the .env file manually : 
```
TOKEN_SERVER_PORT = 4000
PORT = 5000

# Database Credential
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_DIALECT=your_db_dialect

Adjust the credential database on your device using config/config.js

# JWT
JWT_SECRET= jwt_secret
JWT_EXPIRED= 24h
``` 

## Running Project
```
langkah-langkah access file:
1. lakukan perintah di terminal : npm install
2. lakukan perintah di terminal : npx sequelize-cli model:generate --name User --attributes .... (example)
3. lakukan perintah di terimnal : npx sequelize-cli db:migrate
4. untuk run lakukan perintah di terminal : npm run dev
5. Buka folder reactjs-test untuk menjalankan client-side
```


