import {
  HomeIcon,
  TvIcon,
  FilmIcon,
  StarIcon,
  ListBulletIcon,
  MagnifyingGlassIcon, // Ensure this is the correct import
} from "@heroicons/react/24/outline";
 import { Link } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      {/* <header className="bg-neutral-800 text-neutral-50 px-8 py-4 cursor-pointer">
        <h1 className="text-4xl font-title logo">Netflix</h1>
      </header> */}
      <nav className="bg-white-700 p-4 flex items-center justify-between">
        <ul className="flex space-x-8">
          <Link to="/home" className="text-neutral-50 cursor-pointer flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300">
            <HomeIcon className="w-6 h-6" />
            <span>Home</span>
          </Link>
          <Link to="/tvshow" className="text-neutral-400 flex items-center cursor-pointer space-x-2 hover:text-orange-500 transition-colors duration-300">
            <TvIcon className="w-6 h-6" />
            <span>TV Shows</span>
          </Link>
          <Link to="/home" className="text-neutral-400 flex items-center cursor-pointer space-x-2 hover:text-orange-500 transition-colors duration-300">
            <FilmIcon className="w-6 h-6" />
            <span>Movies</span>
          </Link>
          <Link  to="/home" className="text-neutral-400 flex items-center cursor-pointer space-x-2 hover:text-orange-500 transition-colors duration-300">
            <StarIcon className="w-6 h-6" />
            <span>Latest</span>
          </Link>
          <Link to="/home" className="text-neutral-400 flex items-center cursor-pointer space-x-2 hover:text-orange-500 transition-colors duration-300">
            <ListBulletIcon className="w-6 h-6" />
            <span>My List</span>
          </Link>
        </ul>
        <div className="relative flex items-center">
          <Link rel="apple-touch-icon" to="/search">
              <MagnifyingGlassIcon className="bolder   text-neutral-50 w-5 h-5 pointer"/>
          </Link>      
        </div>
      </nav>
    </>
  );
}

export default HeaderLayout;
