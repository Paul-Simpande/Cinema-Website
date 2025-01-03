import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";

const movies = [
    {
        title: "Inception",
        rate: "8.8/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 28m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Interstellar",
        rate: "8.6/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 49m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Tenet",
        rate: "7.4/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 30m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "The Dark Knight",
        rate: "9.0/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 32m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Memento",
        rate: "8.4/10",
        pg: "R",
        language: "English",
        duration: "1h 53m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Dunkirk",
        rate: "7.9/10",
        pg: "PG-13",
        language: "English",
        duration: "1h 46m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "The Prestige",
        rate: "8.5/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 10m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Batman Begins",
        rate: "8.2/10",
        pg: "PG-13",
        language: "English",
        duration: "2h 20m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Insomnia",
        rate: "7.2/10",
        pg: "R",
        language: "English",
        duration: "1h 58m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    },
    {
        title: "Following",
        rate: "7.5/10",
        pg: "R",
        language: "English",
        duration: "1h 9m",
        image: "http://via.placeholder.com/150",
        scheduleLink: "#"
    }
];


function MovieContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalMovies = movies.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalMovies);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalMovies) % totalMovies);
    };

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={prevSlide}>
                ‹
            </button>
            <div className="slider">
                <div
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(-${currentIndex * 300}px)`, // Adjust card width here
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {movies.map((movie, index) => (
                        <div key={index} className="slider-card">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="slider-button right" onClick={nextSlide}>
                ›
            </button>
        </div>
    );
}

export default MovieContainer;