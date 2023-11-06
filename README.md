# Weather App using OpenWeather API and React

This is a simple front-end weather app that allows users to check the weather forecast for the next 5 days. It utilizes the OpenWeather API to fetch weather data and is built with React.js for the user interface.

![Weather App Screenshot](weather-app-screenshot.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [License](#license)

## Features

- Display the 5-day weather forecast for a given location.
- View the weather conditions, temperature, and humidity for each day.
- Toggle between Celsius and Fahrenheit units for temperature.
- Responsive design for various screen sizes.

## Getting Started

### Prerequisites

Before you get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) - This project was built with Node.js version 12 or higher.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mohsenbakhit/weather-app.git
   ```

2. Change into the project directory:

   ```bash
   cd weather-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the development server:

   ```bash
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the Weather App.

3. The app will display the 5-day weather forecast for the your location.

## API Key

This app uses the OpenWeather API to fetch weather data. To use the API, you'll need to obtain an API key. Follow these steps to get your API key:

1. Visit the [OpenWeather](https://openweathermap.org/) website.
2. Sign up for a free account or log in if you already have one.
3. After logging in, go to the "API keys" section to create a new API key.
4. Copy the API key and replace the placeholder in the `.env` file with your actual API key:

   ```javascript
   REACT_APP_API_KEY = "YOUR_API_KEY";
   ```

   **Note:** Keep your API key private and do not share it publicly.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
