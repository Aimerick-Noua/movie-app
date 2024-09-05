/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function Card({ title, release_date, vote_average, imageUrl, name,id }) {

  const formattedRating = Number(vote_average).toPrecision(2);

  function truncateString(str, num) {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long",  };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  const movie_date = formatDate(release_date);
  const movie_title = truncateString(title, 20);
  return (
    <div className="relative cursor-pointer  shadow-lg rounded-lg overflow-hidden mb-4">
    <Link to={`/home/movie/${id}`}>
   {imageUrl?    <img
        src={imageUrl}
        className="w-full h-[350px] object-cover"
        alt={title}
      />:<Spinner/>}
      <div className=" bottom-0 left-0 right-0  flex flex-col justify-end pt-2">
        <h1 className="font-title text-xl text-white mb-1 bold">{name? name : movie_title}</h1>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white">{movie_date}</p>
          <div className="flex gap-1 items-center">
            <img src="../../public/star.png" alt="" />
            {formattedRating}
          </div>
        </div>
      </div>

      </Link>
    </div>
  );
}

export default Card;
