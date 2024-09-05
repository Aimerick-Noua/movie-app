
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getMoviesList from '../utilities/moviesApiComponent';
import Spinner from '../components/Spinner';

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetailsPage() {
    const { id } = useParams();
    const [movieList, setMovieList] = useState([])
    console.log(id);
    useEffect(() => {
        async function getData() {
            const movies = await getMoviesList();
            setMovieList(movies);
            if (movieList) {
                console.log(movieList);
            }
        }
        getData();
    }, []);
    const item = movieList.find(item => item.id === parseInt(id));
    console.log(item);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <div className="relative h-[100vh] bg-dark-gradient text-white  rounded-lg "
                style={{
                    width: "100%",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}>
                {movieList?.length > 0 ?
                    <div>
                        <div style={{ backgroundImage: `url('${imageBaseUrl}${item.backdrop_path}')`, height: "80vh", width: "100%", backgroundSize: "cover" }}>
                            {/* <img src={`${imageBaseUrl}${item.backdrop_path}`} alt="" className="bg-gradient-to-t w-full h-[70%]" /> */}
                        </div>
                        <div className="absolute top-8 bottom-8  text-neutral-50   bg-gradient-to-t from-black to-transparent">
                            <div className="h-[1/2]">
                                <img src={`${imageBaseUrl}${item.poster_path}`} alt="" className="bg-gradient-to-t h-[300px] w-[300px]" />
                            </div>
                            <div className="h-[1/2]">
                                <p>{item.description}</p>
                                <p>{item.title}</p>
                                <p>{item.release_date}</p>
                                <p>{item.vote_average}</p>
                            </div>

                        </div>
                    </div> : <Spinner />}

            </div>
        </div>
    );
}

export default MovieDetailsPage