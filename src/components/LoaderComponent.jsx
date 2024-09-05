/* eslint-disable react/prop-types */

import MovieLoader from './MovieLoader';
import useGetLoadingState from '../hooks/useGetLoadingState';
import Spinner from './Spinner';

const LoaderComponent = ({children}) => {
  const loading = useGetLoadingState();
  console.log(loading);
  


  return (
    <div className="App">
      {/* {loading ? <Spinner/>: <div>{children}</div>} */}
    </div>
  );
};

export default LoaderComponent;
