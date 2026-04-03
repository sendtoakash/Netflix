import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieList } from '../../utils/movieSlice'
import { options } from '../../utils/constants';

const useMovieList = () => {
    const dispatch = useDispatch();
    const getMovieList = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/550/videos', options);
        const result = await response.json();
        dispatch(addMovieList(result))
    };

    useEffect(() => {
        getMovieList();
    }, []);
};

export default useMovieList;