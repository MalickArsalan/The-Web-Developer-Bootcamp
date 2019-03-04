let movies= [
    {
        title: "In Burges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

//          For Loop
// for (let i = 0; i < movies.length; i++) {
    // console.log("You have " + 
    // (movies[i].hasWatched? "watched":"not seen") + 
    // " \"" +movies[i].title + "\" - " + 
    // movies[i].rating + " stars");
// }

//          ForEach

// movies.forEach(function(movie){ 
//     console.log("You have " + 
//     (movie.hasWatched? "watched":"not seen") + 
//     " \"" +movies.title + "\" - " + 
//     movie.rating + " stars");

// });

movies.forEach(function (movie) {
    console.log(buildString(movie)); 
});

function buildString(movie){
    console.log("You have " + 
    (movie.hasWatched? "watched":"not seen") + 
    " \"" +movies.title + "\" - " + 
    movie.rating + " stars");
}