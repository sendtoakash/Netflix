import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovieList } from "../../utils/movieSlice";
import { options } from "../../utils/constants";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovieList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options,
    );
    const result = await response.json();
    dispatch(addNowPlayingMovieList(result.results));
  };

  useEffect(() => {
    nowPlayingMovieList();
  }, []);
};

export default useNowPlaying;
