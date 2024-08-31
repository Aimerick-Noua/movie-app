import { useState, useEffect } from "react";

const useGetLoadingState = (moviesList) => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      if (moviesList?.length > 0 || moviesList != undefined) {
          setLoading(true);
          console.log(loading);
          
    } 
}, [moviesList]); 

  return loading;
};

export default useGetLoadingState;
