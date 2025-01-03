import MovieCard from './MovieCard';

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
    }
];

function MovieContainer() {
    return (
        <div>
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
}

export default MovieContainer;
