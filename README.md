# Blog Django Example App

##Setup the Application
- Clone the repository

  `$ git clone https://github.com/nazmul1487/grayspaceit-blog`

- Create Virtual environment and install dependencies
  ```sh
  $ virtualenv env
  $ source ./env/bin/activate
  $ pip install -r requirements.txt
  ```  

##Run the Application
   
## Deploy to Heroku

You can deploy this app yourself to Heroku to play with.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running

It is best to use the python `virtualenv` tool to build locally:

```sh
$ virtualenv-3.8 venv
$ source venv/bin/activate
$ pip install -r requirements.txt
$ DEVELOPMENT=1 python manage.py runserver
```

Then visit `http://localhost:8000` to view the app.

