import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../../utils/movieSlice";
import { options } from "../../utils/constants";

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRatedMovieList = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            options,
        );
        const result = await response.json();
        dispatch(addTopRated(result.results));
    };

    useEffect(() => {
        topRatedMovieList();
    }, []);
};

export default useTopRated;
