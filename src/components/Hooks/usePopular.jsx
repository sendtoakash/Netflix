import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovieList } from "../../utils/movieSlice";
import { options } from "../../utils/constants";

const usePopular = () => {
    const dispatch = useDispatch();
    const popularMovieList = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular",
            options,
        );
        const result = await response.json();
        dispatch(addPopularMovieList(result.results));
    };

    useEffect(() => {
        popularMovieList();
    }, []);
};

export default usePopular;
