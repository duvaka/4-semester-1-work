import {Movie} from './Movie';

function Movies(props){
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <h4 className='col s12'>Ничего не найдено, попробуйте поменять запрос</h4>
            )}
        </div>
    );
}

export {Movies}