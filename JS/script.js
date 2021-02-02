'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотренный вами фильм?', ''),
    b = prompt('На сколько вы его оцените', ''),
    c = prompt('Последний просмотренный вами фильм?', ''),
    d = prompt('На сколько вы его оцените', '');

    personalMoviesDB.movies[a] = b
    personalMoviesDB.movies[c] = d

console.log(personalMoviesDB);