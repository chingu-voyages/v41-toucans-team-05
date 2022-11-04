# **Comfy Weather**
![Untitled](https://user-images.githubusercontent.com/52683281/199876277-951517ef-c920-47b7-8c95-c0de17e36033.jpg)

## Overview

This app was created for Chingu Voyage 41. It pulls data from [OpenWeather](https://openweathermap.org/api)

**LIVE LINK**: [ComfyMe](https://v41-toucans-team-05.vercel.app/)

## Purpose 
User friendly weather app platform for elderly and disabled people

## Features

- Location, date, time and temperature data displayed

- Location and temperature data depend on geolocation.

- Dynamic and animated background based on temperature data

## Tech/Dependencies used
- [Create React App](https://create-react-app.dev/)

- Dependencies included with React:
    - React-Dom

    - React-Scripts

- Add-on packages include: 
    - [Axios](https://axios-http.com/docs/intro)
    - [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
    - [React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
    - [Moment JS](https://momentjs.com/docs/)
    - [SASS](https://sass-lang.com/)
    - [Styled-Components](https://styled-components.com/docs)
    - [Web Vitals](https://www.npmjs.com/package/web-vitals)
## Getting Started
- Create OpenWeather account for API key, follow these [instructions](https://openweathermap.org/api) for more detail.

- Clone the repository 

```bash

git clone https://github.com/chingu-voyages/v41-toucans-team-05.git

```
- Install dependencies listed in add-on packages using `npm install`

- Within WeatherApi.jsx (comfy_app > src > components > Weatherapi > WeatherApi.jsx), line 30, paste your API key into the following axios get call:

```

.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid={YOUR API KEY GOES HERE}`
      )

```

- You are set to go

## Who maintains and contributes to the project
This is a project for our personal learning process.

<!-- By Tarek Ismael,  William Fayette, Tommy Dang and Maria Chicaia  -->
<!-- # voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own! -->
