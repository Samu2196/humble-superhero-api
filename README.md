# Humble Superhero API

## Description

This project aims to create a simple API for managing humble superheroes. It allows users to add new superheroes with their name, superpower, and humility score, as well as fetch a list of superheroes sorted by their humility score.

![Humble Superhero API Image](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG13MGU4ZWpqMndtdGdydm5zcWoxcndocXBzNnFmYmZwNHp4M3hwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PUITId5Avf9fLPpD3S/giphy.gif)

## Technical

### Project Structure

The project is divided into the following main folders:

- **api**: Contains the API logic using Express, curl tests, handlers, and endpoints.
- **app**: A React-based UI, using Vite and Tailwind CSS. Components have been created where possible for easier maintenance and scalability.
- **common**: Validation functions to ensure input parameters, such as numbers and strings, are correct.
- **cor**: Backend logic with unit tests using Jest.

### Requirements

- **Backend**: Express is used to manage the routes.
- **Validations**: The humility score is validated to ensure it's a number between 1 and 10.
- **Test**: A small Jest test is included for one of the endpoints.

### Technologies

- HTML / JS
- Node
- Express
- React
- TailwindCSS

### "If I had more time..."

- **Database Optimization**: Although an in-memory database (array) is used, I would consider using a real database like MongoDB or PostgreSQL for a more robust solution.
- **Authentication & Authorization**: Implement user authentication to secure the API endpoints.
- **Improved UI**: I would enhance the React UI by adding more interactivity and better state management.
- **More Comprehensive Tests**: I would add more Jest tests to ensure full coverage of both backend and frontend logic.

### Improvements and Team Collaboration

If working in a team, I would divide the tasks as follows:

- **Backend**: One team member would handle the implementation and testing of the API, ensuring the endpoints function properly and manage validations.
- **Frontend**: Another team member would focus on the React UI, designing a user-friendly and functional experience.
- **Validation**: A third team member could focus on creating reusable validation functions to ensure data consistency.
- **Testing**: It would be ideal for one member to focus on writing tests to ensure all parts of the project are robust and well-covered.

### Project Continuation

To continue the project, some ideas include:

- **Scalability**: Replacing the in-memory database with a persistent database solution.
- **Performance Optimization**: Analyzing and improving the performance of superhero queries, especially as the number of records grows.
- **Feature Expansion**: Adding the ability to edit or delete superheroes and allowing users to update their humility score.

---

## Cloning the Repository

To get started with the project, you can clone the repository with the following command:

```bash
git clone https://github.com/Samu2196/humble-superhero-api.git
cd humble-superhero-api
```

### Installing Dependencies
Run the following command to install all dependencies for the entire project:
```bash
npm install
```

### Folder-Specific Instructions
1. api (Backend API)

This folder contains the Express API and routes.

Install dependencies:
```bash
cd api
npm install
```
Run the API:
```bash
npm start
```
It has the following endpoints:

POST /superheroes: Add a new superhero with name, superpower, and humility score.

GET /superheroes: Get a list of superheroes sorted by humility score in descending order.

2. app (Frontend UI)

This folder contains the React-based UI.
```bash
cd app
npm install
```
Run the frontend:
```bash
npm run dev
```
3. common (Validation Logic)

This folder contains reusable validation logic for input parameters like numbers and strings.
There is no specific command to run here; it's included as part of the backend and frontend logic for input validation.

4. cor (Backend Logic and Tests)

This folder contains the backend logic and Jest tests.

Install dependencies:
```bash
cd cor
npm install
```
Run the tests:
```bash
npm test
```
This will run the Jest tests for the backend logic.