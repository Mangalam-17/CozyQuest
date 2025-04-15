# Cozy Quest🏠 : Rooms, Amazing Pools, Treehouses . . . 

CozyQuest is a web application replicating core functionalities of Airbnb, allowing users to browse, list, and review rental properties. Built using the EJS templating engine, Node.js framework, Express.js framework, and MongoDB database.

## Live Demo

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

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MongoDB
- Bootstrap
- HTML
- CSS
- JavaScript


## Directory overview 
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
  
## Installation

To run CozyQuest locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up your MongoDB Atlas cluster and obtain your connection string.
5. Create a `.env` file in the root directory and add your MongoDB Atlas connection string and Cloudinary API credentials.
   it should include: CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, MAP_TOKEN, ATLASDB_URL and a SECRET (to encrypt passwords).
7. Run the application using `node app.js`. (make sure you are in project directory)
8. Access the application in your web browser at `http://localhost:3000`.

## Screenshots
1. Home Page

![Home Page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.28.54%E2%80%AFPM.png)

2. Signup Page

![Signup page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.01%E2%80%AFPM.png)

3. Login Page

![Login page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.08%E2%80%AFPM.png)

4. View Particular Listing

![particular listing](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.29.39%E2%80%AFPM.png)

5. Review Page

![review page](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.30.05%E2%80%AFPM.png)

6. Location view

![location view](https://github.com/Mangalam-17/CozyQuest/blob/72047c92290b5ddfa53cb05ec82ec551fe240130/preview/Screenshot%202025-04-15%20at%207.30.20%E2%80%AFPM.png)



## Video Demonstration
Coming soon . . . 


## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
