# React Counter with Express Backend

A simple React counter application with an Express.js backend API. This monorepo contains:

- **Frontend**: React + Webpack + Babel
- **Backend**: Express.js API (in-memory counter)

## Prerequisites

- **Node.js** v16+ and **npm**
- (Optional) **npx** (comes with npm)

## Project Structure

```
react-app/
├── package.json
├── webpack.config.js
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── App.css
│   └── components/
│       ├── Counter.js
│       └── Counter.css
└── server/
    ├── package.json
    └── index.js
```

## Setup & Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/react-counter-demo.git
   cd react-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   cd server
   npm install
   cd ..
   ```

## Development

To run both the frontend and backend concurrently:

```bash
npm start
```

- Frontend dev server: http://localhost:3000  
- Backend API server: http://localhost:4000/api/count

## Available Scripts

- **`npm run serve`**: Runs the Webpack dev server for the React app.  
- **`npm run server`**: Starts the Express.js backend API.  
- **`npm start`**: Runs both frontend and backend concurrently.  
- **`npm run build`**: Builds the React app for production into the `dist/` folder.

## API Endpoints

- **GET** `/api/count`  
  Returns the current count:
  ```json
  { "count": 0 }
  ```

- **POST** `/api/count/increment`  
  Increments the counter and returns the new value.

- **POST** `/api/count/decrement`  
  Decrements the counter and returns the new value.
