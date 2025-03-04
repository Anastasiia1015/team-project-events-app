

# Events App  

This is a web application that allows users to search for events, register for them, and even create their own events. The app provides a seamless experience with user authentication and event management features.  

## Features  

The application offers the following features:  

- **Search Events**: Users can search for events based on location and keyword.  
- **Event Details**: View important information such as event name, date, time, and description.  
- **User Authentication**: Users can sign up, log in, and manage their accounts.  
- **Register for Events**: Users can register for events they are interested in.  
- **Create Events**: Logged-in users can create and manage their own events.  

## Technologies Used  

In this project, the following technologies were used:  

- **Frontend**: React  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Authentication**: Sessions for user authentication  
- **Email Notifications**: Nodemailer  

## Installation  

To use this application, you must have Node.js and npm installed on your computer. You can download and install Node.js from [here](https://nodejs.org/).  

### 1. Clone the Repository  

```bash
git clone https://github.com/Anastasiia1015/team-project-events-app.git
cd team-project-events-app
```

### 2. Install Dependencies  

Navigate to the **backend** and **frontend** directories separately and install the dependencies:  

```bash
# Backend
cd backend
npm install

# Frontend
cd ../events-app
npm install
```

### 3. Set Up Environment Variables  

#### **Backend (`backend/.env`)**  

Create a `.env` file in the **backend** folder and add:  

```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
SESSION_SECRET=your_secret_key
```

#### **Frontend (`events-app/.env`)**  

Create a `.env` file in the **frontend** folder and add:  

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Start the Application  

Open two terminal windows:  

#### **Start the Backend**  

```bash
cd backend
npm start
```

#### **Start the Frontend**  

```bash
cd events-app
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).  

## Usage  

1. **Sign Up / Log In**: Create an account or log in to access all features.  
2. **Search for Events**: Use the search bar to find events.  
3. **View Event Details**: Click on an event to see more details.  
4. **Register for Events**: Sign up for an event to receive notifications.  
5. **Create an Event**: Logged-in users can add their own events.  

## License  

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.  

## Credits  

This project was created by **Anastasiia Peliukhovska** and the team.  
