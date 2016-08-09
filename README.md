# Angular Interview Project

NOTE: Option 1 is if you are NOT  using a Mac. If you are on a Mac skip to step 2.

----
Setup Option 1:

If you don't have a mac:

1. Create a Cloud 9 Account - c9.io
2. Request access to c9 Project - https://ide.c9.io/ghostybits/clutter-nginterview

That should get you up and running, to run your local server run `rails s -b $IP -p $PORT` in the terminal, with default settings that will let you access your app with the preview screen.

----

Setup Option 2:

Mac: (setting up rails)

1. install brew if they don't have it (http://brew.sh/)
2. `brew install rbenv`
3. `rbenv install`
4. `gem install bundler`
5. `git clone git@github.com:clutter/clutter-ng-interview.git`
6. `cd clutter-ng-interview`
7. `bundle install`
8. `npm install`
9. `rake db:migrate`
10. `rake movie:pull`

That should get you up and running, to run your local server run `rails s` in your terminal, with default settings that will let you access your app at `localhost:3000`


To run your karma tests once you can run `rake karma:run`

If you want the tests to rerun when you save the file you can run `rake karma:start` in a separate terminal.

## Task

1. Implement a search service in JavaScript that searches through an collection of movie resources. _(retrieved from the movie endpoint)_ and returns a list of matching results.
2. Searching for ‘Batman’ should return any movie with the words Batman on the right pane.
3. Once a movie title is select on the right it should display the detail page on the left pane.

There is a movie resource, and castmember resource which belongs to movie, and movie has many cast members.

A user interface such as an input field to type in the search query should be included as well. **See the included mockup** for a sample of what the final result should look like.

Assume the API might be slow.

#### Task Notes

* Before you start the task you will have to pull down the movie data into your db, a rake task has been provided to do that `rake movie:pull`

* In the data provided there are two tables `Movie` and `CastMember`, you can access the index for these resources from their respective enpoints `/movie.json` and `/cast_member.json`

* Our app uses NgResource to handle async requests from the api endpoints. Please use this method to request the data from the `Movie` and `CastMember` tables. - `https://docs.angularjs.org/api/ngResource/service/$resource`

## Mock up
![Mock Up](doc/lab_ui.png)
