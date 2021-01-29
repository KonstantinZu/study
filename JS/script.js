'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),    
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
      
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

const a1 = prompt('Какой актера снималься в фильме?', ''),
      b1 = prompt('Как вы его оцениет?', '');
      personalMovieDB.actors[a1] = b1;



      console.log(personalMovieDB)

      