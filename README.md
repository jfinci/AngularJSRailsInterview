# Setup

1. Verify rails is installed - `ruby -v`
2. Verify sqlite is installed - `$ sqlite3 --version`
3. Clone Repository - `git clone github.com/clutter/clutter-ng-interview.git`
4. cd into repo - `cd clutter-ng-interview`
5. (in repo) set up db - `rake db:migrate`
6. (in repo) fill local db - `rake db:seed`

That should get you up and running, to run your local server run `rails s` in your terminal, with default settings that will let you access your app at `localhost:3000`

To run your karma tests once you can run `rake karma:run`

If you want the tests to rerun when you save the file you can run `rake karma:start` in a separate terminal.

# Notes
* This app has been scaffolded out, please write your solution code in the `persons_controller.js`, `persons_resource.js`, `persons_controller_spec.js` and `home/index.html.erb` files

* In the seed data provided there is a one table `Person` with the columns `name` and `id`, you can get a JSON array of all the rows in the Persons table by hitting the endpoint `/persons.json`

* Our app uses NgResource to handle async requests from the api endpoints. Please use this method to request the data from the `Person` table. - `https://docs.angularjs.org/api/ngResource/service/$resource`
