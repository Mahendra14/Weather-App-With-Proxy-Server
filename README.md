# Weather-App-With-Proxy-Server
A weather application which will make it calls via a proxy server to conceal important information and also to limit the requests.
Also trying to add rate-limiting and caching for a particular time.


steps followed to push to heroku:
first downloaded heroku cli
then in cmd in the project folder:

heroku login

heroku create app_name_for_url

 heroku git:remote -a weather-app-apiproxy

 git push heroku

thats it you are done...now access the heroku application.

To add env variables in heroku:
in the project -> settings -> reveal config vars.


Hence there is a working weather api using API Proxy and also having features like caching, rate-limiting and also cors included.

to access the application go to the following link:
https://weather-app-apiproxy.herokuapp.com/


## part of fun-implementations
