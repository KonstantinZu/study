'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    for(let i = 0; i < 2; i++) {
        const a = prompt('Последний просмотренный вами фильм?', ''),
        b = prompt('На сколько вы его оцените', '');

        if(a != null && b != null && a != '' && b != '' && a.length < 50  ) {
            personalMoviesDB.movies[a] = b
            // console.log('Вы не ввели название!');
        } else {
            console.log('Error');
            i--;
        }

        if (personalMoviesDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
            console.log('Вы классический зритель');
        } else {
            console.log('Да вы киноман батюшка');
        }
    
    }

 
    

console.log(personalMoviesDB);

