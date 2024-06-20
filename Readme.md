# Sigma Job Application Portal

This repository contains two directories: client and server which contains the frontend and backend of this applicatiions respectively. Normally, we would consider creating two separate repositories for the frontend and backend services but since this is a technical interview task, for simplicity I have kept these in the same repo

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

List of software and tools you need to install before setting up the project.

- Node.js (version 20.11.0)
- npm (version 10.2.4)

### Installation

#### Server

1. Navigate to the `server` directory:

   ```sh
   cd server
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or if you are using yarn
   yarn install
   ```

3. Add .env file in the root server directory. You can use this sample .env variables to run this server project or if you want to run MySql database locally enter these variables

   ```
   DATABASE_NAME="sql12714636"
   USERNAME="sql12714636"
   PASSWORD="HJ3azkuJs2"
   HOST_NAME="sql12.freesqldatabase.com"
   ```

#### Client

1. Navigate to the `client` directory:

   ```sh
   cd client
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or if you are using yarn
   yarn install
   ```

3. Add .env file in the root client directory. You can add the server url as the environment variable. Example:

   ```
   VITE_APP_URL = "http://localhost:3000/api/v1/"
   ```

## Running the Project

### Running the Server

1. Navigate to the `server` directory if you are not already there:

   ```sh
   cd server
   ```

2. Start the server:

   ```sh
   npm start
   # or if you are using yarn
   yarn start
   ```

3. The server should now be running on `http://localhost:3000`.

### Running the Client

1. Navigate to the `client` directory if you are not already there:

   ```sh
   cd client
   ```

2. Start the client:

   ```sh
   npm run dev
   ```

3. The client should now be running on `http://localhost:5173`.

### Links

You can find the MySQL database in this link and login using the creds in the env file

[MySQL Database](https://www.phpmyadmin.co/sql.php?db=sql12714636&goto=db_structure.php&table=Candidates&pos=0)
