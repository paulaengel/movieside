"use strict";

const movies = [
    {
        id: "1",
        titel: "Inception",
        genre: "science-fiction",
        year: 2010,
        duration: "2.28",
        img: "img/inception.webp",
        url: "https://www.imdb.com/title/tt1375666/"
    },
    {
        id: "2",
        titel: "The Dark Knight",
        genre: "action",
        year: 2008,
        duration: "2.32",
        img: "img/the-dark-knight.webp",
        url: "https://www.imdb.com/title/tt0468569/"
    },
    {
        id: "3",
        titel: "Forrest Gump",
        genre: "drama",
        year: 1994,
        duration: "2.22",
        img: "img/forrest-gump.webp",
        url: "https://www.imdb.com/title/tt0109830/"
    },
    {
        id: "4",
        titel: "Superbad",
        genre: "comedy",
        year: 2007,
        duration: "1.53",
        img: "img/superbad.webp",
        url: "https://www.imdb.com/title/tt0829482/"
    },
    {
        id: "5",
        titel: "It",
        genre: "horror",
        year: 2017,
        duration: "2.15",
        img: "img/it.webp",
        url: "https://www.imdb.com/title/tt1396484/"
    }
];

const moviesContainer = document.querySelector("#movies-container");

function displayMovies(movieList) {
    moviesContainer.innerHTML = "";

    movieList.forEach((movie) => {
        moviesContainer.innerHTML += `
        <article>
            <h2>${movie.titel}</h2>

            <ul>
                <li>${movie.genre}</li>
                <li>${movie.year}</li>
                <li>${movie.duration}</li>
            </ul>

            <figure>
                <img src="${movie.img}" alt="${movie.titel}">
            </figure>
        </article>
        `;
    });
}

displayMovies(movies);