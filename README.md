# Tiger Kingdom Blog

Post a picture of your favorite tigers!

![](https://media.giphy.com/media/1430ZmFYxLxeHm/giphy.gif)

https://tiger-kingdom.herokuapp.com/

Go there now!!!

## Installing
1. Clone this project and cd into the folder
3. Run `npm i` to install package dependencies
4. Create a local "production" database called whatever you like
5. Create a test database called `localtest` with the same owner/user
   Alternatively edit "test" in package.json to use a db of your choosing
5. Create a .env file in the project root and set the following fields
   - PGDATABASE=your_local_production_database_name
   - PGUSER=your_db_user
   - PGPASSWORD=your_db_password
6. Run `npm run setupdb` to initialise or reset your local production db
   Alternatively import 'src/db/schema.sql' using your preferred db admin tool

### Running the tests

Run `npm run test` to run tests

### Running the server

1. Run `npm run startdev` to start
2. Browse to http://localhost:3000

## Learning Objectives

- Tom: Authentication, form validation
- Roger: DB testing, Authentication
- Kat: **Authentication!!!!** :checkered_flag: and everything else!
- Chloe: Authentication, reinforcing knowledge of db queries, testing and node templates

## What we're proud of :100: 

- Getting to grips with deployment and databases on Heroku
- We all got to touch most aspects of the project
- DB queries
- Split the issues well - communicated what we wanted to learn
- Could easily talk to all team members
- "Tasteful and professional" styling

## What we could have improved on :imp: 

- Didn't lean on database constraints as much as we could
- Could have expolited the data storage aspect of JWT more
- More testing for each DB query
- Client-side form validation using JS
- Accessibility, not enough time spent


Thanks for reading! :smiley:
