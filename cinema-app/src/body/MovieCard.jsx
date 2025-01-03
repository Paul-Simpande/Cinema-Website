function MovieCard({ movie }) {
    const truncateTitle = (title, limit) => {
        if (title.length > limit) {
            return title.slice(0, limit) + "...";
        }
        return title;
    };

    return (
        <div className="card-container">
            <img className="card-image" src={movie.image} alt={movie.title} />
            <div className="first-column card-title-column">
                <p className="title">{truncateTitle(movie.title, 15)}</p>
                <a href={movie.scheduleLink} className="schedule">View Schedule</a>
            </div>
            <div className="second-column card-title-column">
                <p>{movie.duration}</p>
                <p>{movie.language}</p>
            </div>
            <div className="third-column card-title-column">
                <p>{movie.pg}</p>
                <p>{movie.rate}</p>
            </div>
        </div>
    );
}

export default MovieCard;
