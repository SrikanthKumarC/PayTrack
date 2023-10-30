# Expense Outflow Manager

## Introduction 

The Expense Tracker App is a web application built with Next.js that helps users keep track of their expenses, income, and loans. This app provides a rich user experience, including automatic dark and light mode, making it easy and visually appealing to manage your financial information.

With a user-friendly interface and robust functionality, this app offers a comprehensive solution for managing your finances. The data is stored and communicated through an Express.js backend server, ensuring secure and efficient handling of your financial information.

## Features

- **Expense Tracking:** Keep a record of your daily expenses, categorize them, and monitor your spending habits.
- **Income Management:** Record your income sources and track your earnings over time.
- **Loan Management:** Keep track of loans you owe and loans you've given, including interest rates and due dates.
- **Automatic Dark/Light Mode:** The app automatically adapts its theme based on the user's preferences or system settings, providing a seamless experience in all lighting conditions.

## Technologies Used

- **Frontend:**
  - Next.js
  - React
  - React-Query (for managing sever state)
  - TailwindCSS (for styling)
  - Axios (for making API requests)

- **Backend:**
  - Express.js
  - MongoDB 
  - RESTful API for data communication

- **Authentication:**
  - Bcrypt and JWT was implemented in the backend.

## Installation

 Clone this repository to your local machine:
 Make sure to setup the express backend API first.
   ```bash
   git clone https://github.com/SrikanthKumarC/PayTrack.git
   cd PayTrack
   npm install
   npm run dev
   