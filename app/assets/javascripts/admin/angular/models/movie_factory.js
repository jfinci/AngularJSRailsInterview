(function(){
// [
//   {
//     "id": 31,
//     "title": "Suicide Squad",
//     "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
//     "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
//     "tmdb_id": 297761,
//     "release_date": "2016-08-02T00:00:00.000Z"
//   }
// ]
    angular
        .module("app")
        .value("Movie", Movie);

    var Movie = function(id, title, poster_path, overview, tmdb_id, release_date) {
        this.id = id;
        this.title = title;
        this.poster_path = poster_path;
        this.overview = overview;
        this.tmdb_id = tmdb_id;
        this.release_date = release_date;
    };
    
    //Model methods here
    

}());