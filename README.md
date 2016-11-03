# Angular Interview Project

1. You will be invited to a cloud9 account, create a new workspace -> clone workspace -> front-end-lab
2. Everything should be already set up and good to go, and you have full access 

## Task

1. Implement a search service in JavaScript that searches through an collection of movie resources. _(retrieved from the movie endpoint)_ and returns a list of matching results.
2. The right pane is where the user would be searching in a Textfield
3. Searching for ‘Batman’ should return any movie with the words Batman on the right pane.
3. Once a movie title is selected on the right it should display the detail page on the left pane.

There is a movie resource, and castmember resource which belongs to movie, and movie has many cast members.

**See the included mockup** for a sample of what the final result should look like.

Assume the API might be slow.

#### Task Notes

* Before you start the task you will have to pull down the movie data into your db, a rake task has been provided to do that `rake movie:pull`

* In the data provided there are two tables `Movie` and `CastMember`, you can access the index for these resources from their respective enpoints `/movies.json` and `/movies/<id>/cast_members.json`

* The /movies.json endpoint can accept search terms in the following way:
`/movies.json?q[title_cont]=your-search-term`. the specs/controllers directory has a working example of a search operation.

* Our app uses NgResource to handle async requests from the api endpoints. Please use this method to request the data from the `Movie` and `CastMember` tables. - `https://docs.angularjs.org/api/ngResource/service/$resource`

## Mock up
![Mock Up](doc/lab_ui.png)
