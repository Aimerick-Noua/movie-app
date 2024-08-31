/* eslint-disable react/prop-types */

import MovieLoader from './MovieLoader';
import useGetLoadingState from '../hooks/useGetLoadingState';

const LoaderComponent = ({children}) => {
  const loading = useGetLoadingState();
  console.log(loading);
  


  return (
    <div className="App">
      {loading ? <MovieLoader /> : <div>{children}</div>}
    </div>
  );
};

export default LoaderComponent;
