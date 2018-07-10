var movie1;
var movie2;
var movie3;
movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor,Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig,Christoph Walts",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams",
};


var showMovieInfo;
showMovieInfo = function () {  
    console.log("Movie information for " + movie.title);
    console.log("…………………………………………………………………………………………");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("…………………………………………………………………………………………");
    console.log("\n \n \n \n");
}

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();