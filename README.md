# Bulk Data API

This project is a Node.js/Express.js web application designed to handle bulk data operations using PostgreSQL as the database and Sequelize as the ORM. It provides APIs to upload and retrieve records in bulk, with Swagger documentation for easy API exploration and Jest tests to ensure functionality.

## Project Overview

- **Objective**: Build a RESTful API to upload and fetch bulk data efficiently.
- **Technologies Used**:
  - **Node.js & Express.js**: For creating the server and handling HTTP requests.
  - **PostgreSQL**: Relational database to store records.
  - **Sequelize**: ORM to interact with the database.
  - **Swagger**: API documentation at `/api-docs`.
  - **Jest & Supertest**: For unit testing the API endpoints.
- **Features**:
  - POST `/api/records`: Upload an array of records (e.g., `[{"name":"Test1","value":100}]`).
  - GET `/api/records`: Fetch all records from the database.
  - Swagger UI at `/api-docs` for API documentation.
  - Comprehensive unit tests to verify functionality.
- **GitHub Repository**: [https://github.com/Aakash27296/Web-Application](https://github.com/Aakash27296/Web-Application)

## Project Structure

- **Folder Name**: The project folder is named `Web Application`.
- **Key Files**:
  - `.env`: Stores environment variables like `DATABASE_URL` and `PORT`.
  - `src/app.js`: Main server file, sets up Express.js and routes.
  - `src/config/database.js`: Configures Sequelize database connection.
  - `src/models/Record.js`: Defines the `Record` model for the `records` table.
  - `src/controllers/recordController.js`: Handles logic for API endpoints.
  - `src/routes/recordRoutes.js`: Defines API routes (`POST /api/records`, `GET /api/records`).
  - `src/swagger.js`: Swagger configuration for API documentation.
  - `schema.sql`: SQL script to create the `records` table in PostgreSQL.
  - `test/recordController.test.js`: Jest tests for API endpoints.
  - `package.json`: Lists dependencies and scripts (`npm start`, `npm test`).

## Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (v22.15.0 or later): JavaScript runtime.
- **PostgreSQL** (v14 or later): Database server.
- **Git**: For cloning the repository.
- **npm**: Package manager (comes with Node.js).

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Aakash27296/Web-Application.git
   cd Web-Application
