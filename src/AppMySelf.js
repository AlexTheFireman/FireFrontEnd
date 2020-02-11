import React from 'react';

function createMovie(time: String, movieName: String, genre: String, rate: number, country: String) {
    return { time, movieName, genre, rate, country };
}

const movies = [
    createMovie('10:00', 'Марафон желаний', 'Мелодрамма', 4.5, 'Россия'),
    createMovie('11:40', 'Ледяная принцесса', 'Мультфильм', 5.1, 'Германия, Канада'),
    createMovie('12:15', 'Под водой', 'Ужасы', 6.2, 'США'),
    createMovie('14:00', 'Кома', 'Фантастика', 4.7,'Россия'),
    createMovie('15:40', 'Маленькие женщины', 'Мелодрама, Драма', 8.1, 'США'),
];

function MovieList (props) {
    const movies = props.movies;
    const movieList = movies.map((movie) =>
    <li key={movie.time} >
        {movie}
    </li>)

    return (
        <ul>
            {movieList}
        </ul>
    )

}
