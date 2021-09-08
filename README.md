# blogApp
-with React, Django, Sqlite
requirement of software
- nodejs
- python
- make directory blogApp (mkdir blogApp)
cd blogApp
1. npx create-react-app blog_react
2. pip install django
3. django-admin startproject blog_py

replace the existing things with this one (all).

RUN (Activate the Virtual Enviornment)
```
# for linux 
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate

# for windows
py -m pip install --user virtualenv 
py -m venv env
./env/Scripts/activate OR ./env/Scripts/activate.bat (if not working)
```

for frontend
```cd blog_react -> npm start```
if not working try  ```npm cache clean --force -> npm install -> npm start```

for backend 
install dependencies:
```
-pip install djangorestframework
-pip install django-cors-headers
-pip install djangorestframework-simplejwt
```
run ```cd blog_py -> python manage.py runserver```
