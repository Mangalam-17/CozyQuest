# Cozy Quest 🏠 : Rooms, Amazing Pools, Treehouses . . . 

CozyQuest is a web application replicating core functionalities of Airbnb, allowing users to browse, list, and review rental properties. Built using the EJS templating engine, Node.js framework, Express.js framework, and MongoDB database.

## Live Demo 👁️

A live demo of CozyQuest can be accessed [here](https://cozy-quest.onrender.com/listings).

## Features

- **Search Functionality**: Users can search for accommodations based on various criteria such as location, dates, and amenities.
- **Category-Based Listing**: Accommodations are categorized for easy browsing and filtering.
- **User Authentication**: Secure user authentication system ensures that only registered users can access certain features like listing properties and booking accommodations.
- **CRUD Operations**: MongoDB and Mongoose are used for efficient CRUD (Create, Read, Update, Delete) operations via API endpoints.
- **Server-Side Validation**: Joi library is integrated for server-side validation to ensure data schema.
- **Server-Side Rendering**: EJS is used for rendering the page server-side and sending it to the user.
- **Image Storage**: Cloudinary API is utilized for image storage, allowing users to upload images of their properties.
- **Responsive Design**: The application is fully responsive, and well suited for mobile view too.
- **MVC Usage**: The implementation of MVC helps to segregate frontend, backend, database in models, views and controllers respectively

## Technologies Used 🛠️

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MongoDB
- Bootstrap
- HTML
- CSS
- JavaScript


## Directory overview 🖇️
![Directory overview](https://github.com/Mangalam-17/CozyQuest/blob/fec6405323552e68a852bf95880db06f7e5db0c2/preview/Screenshot%202025-04-15%20at%207.59.44%E2%80%AFPM.png)


## Other Dependencies

- Cloudinary
- Connect-flash
- dotenv
- joi
- method-override
- multer
- nodemon
- passport


## Installation ⚡️
To run CozyQuest locally, follow these steps:

## 1. Clone the Repository

```bash
git clone https://github.com/Mangalam-17/CozyQuest.git
cd CozyQuest
```

## 2. Install dependencies

```bash
  npm install 
```

## 3. Environment Variables:

```bash
ATLASDB_URL=<your-mongodb-atlas-url>
SECRET=<your-session-secret>
CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUD_API_KEY=<your-cloudinary-api-key>
CLOUD_API_SECRET=<your-cloudinary-api-secret>
```

## 4. Run the application:

```bash
node app.js
```

## 5. Access the application in your web browser at 
```bash
http://localhost:3000
```


## Screenshots 👁️‍🗨️
1. Home Page


![Home Page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.28.54%E2%80%AFPM.png)

2. Signup Page


![Signup page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.01%E2%80%AFPM.png)

3. Login Page


![Login page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.08%E2%80%AFPM.png)


4. Add a new Listing


![add listing](https://github.com/Mangalam-17/CozyQuest/blob/163ca502c9fca522d47b631d7666c965d2123e96/preview/Screenshot%202025-04-15%20at%2011.18.35%E2%80%AFPM.png)

5. View Particular Listing


![particular listing](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.39%E2%80%AFPM.png)

6. Review Page


![review page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.30.05%E2%80%AFPM.png)

7. Location view


![location view](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.30.20%E2%80%AFPM.png)




## Video Demonstration
Youtube - https://youtu.be/fP5lV7y7iYc


## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
