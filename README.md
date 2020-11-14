#Example Blog App (Integrate Django and React)

##Setup the Application
It is best to use the python `virtualenv` tool to build locally:

- Clone the repository
```sh
 $ git clone https://github.com/nazmul1487/grayspaceit-blog
 $ cd example-blog-main
```

- Setup Virtual environment 
 ```sh
  $ virtualenv env
  $ source ./env/bin/activate
  ```  
- install dependencies
 ```sh
  $ pip install -r requirements.txt
  ```  
 - Make `.env` file to the root directory of the project. `.env `file should contains following variables.

 ```sh
SECRET_KEY
SQLITE_URL
ALLOWED_HOSTS
CORS_ORIGIN_ALLOW_ALL
CORS_ORIGIN_WHITELIST
DEBUG
```


##Run the Application
Migrations and migrate 
   ```sh
  $ python manage.py makemigrations
  $ python manage.py migrate
  ```
Run server
  ```sh
  $ python manage.py runserver
  ```
visit http://127.0.0.1:8000 to view the application

##React Application
 - React App Directory: `example-blog-main/react_app`
 - React build files: `example-blog-main/react_app/serve`
##Run React Application
## You can run react application separately.
 
  Go to project directory
  ```sh
  $ cd react_app
  ```
npm install
 ```sh
  $ npm install 
  ```
Run server
 ```sh
  $ npm start
  ```
Open http://localhost:3000 port to view it in the browser.

Your have to run Django on http://127.0.0.1:8000 port for backend support
## Deploy to Heroku

This application is deployed in Heroku.

To Visit follow this link:https://grayspace-blog.herokuapp.com/
