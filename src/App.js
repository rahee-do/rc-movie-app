import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";

// class component
class App extends React.Component{
    // class component 의 data 를 넣을 공간 (data is the will change.)
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        // console.log(ES6 문법 : 구조분해?);
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies);
        this.setState({movies, isLoading: false});
    }
    componentDidMount() {
        this.getMovies();
    };

    render() {
        // console.log("calss의 this.state를 사용하기 싫다면 ES6 문법을 사용하면 된다.");
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading
                    ? (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
export default App;
