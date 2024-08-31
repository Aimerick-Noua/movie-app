import { useEffect, useState } from "react";
import Card from "../components/Card";
import tvShowApi from "../utilities/tvShowApi";
 
function TvShowPage() {
  const [movieList, setMovieList] = useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const randomMovieBackgroundImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieList?.[Math.floor(Math.random() * movieList?.length)]?.backdrop_path}`;
  useEffect(() => {
    async function getData() {
      const movies = await tvShowApi();
      setMovieList(movies);
      if (movieList) {
        console.log(movieList);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="pt-8 h-full bg-dark-gradient text-white  rounded-lg shadow-lg" style={{width:"100%"}}>
        <div className="" style={{width:"100%"}}>
        <div className="h-[40vh] relative bottom-8  text-neutral-50   bg-gradient-to-t from-black to-transparent">

                    <img src={randomMovieBackgroundImage} alt="" className="bg-gradient-to-t from-black to-transparent"/>
          </div>
        
        <div className="p-8 absolute top-[700px] left-0 right-0">
          <section >
            <div className="flex gap-2 items-center pb-6">
            <hr />
                 <img src="../../public/trending.png" alt="" /> 
                 <h2 className="text-2xl font-title ">Trending Now</h2>
                 <div><hr className="w-[1200px] h-0.5 bg-white" /></div>
                
            </div>
            <div className="grid grid-cols-5 gap-5 px-12 pt-4" >
              {movieList?.map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.name}
                  vote_average={movie.vote_average}
                  release_date={movie.first_air_date}
                  imageUrl={`${imageBaseUrl}${movie.poster_path}`}
                />
              ))}
            </div>
          </section>
        </div>
        </div>
        </div>
        {/* <MainLayout/> */}
     </>
  );
}
export default TvShowPage;
