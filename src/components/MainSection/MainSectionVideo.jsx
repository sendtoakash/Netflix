import { useSelector } from "react-redux";
import useMovieList from "../../components/Hooks/useMovieList";
import MainSectionTitle from "./mainsectiontitle";

const MainSectionVideo = () => {
    useMovieList();
    const movieList = useSelector((state) => state.movie.movielist);

    if (!movieList || !movieList.results) return null;

    const trailer = movieList.results.filter((movie) => movie.type === "Trailer");

    if (!trailer || trailer.length === 0) return null;
    return (
        <div className="relative w-screen h-screen">
            <iframe
                className="w-screen h-screen"
                src={`https://www.youtube.com/embed/${trailer[1].key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailer[1].key}`}
                title={trailer[1].name}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <MainSectionTitle
                title={trailer[1].name}
                description={
                    "Experience the trailer like never before with this stunning HD Fan Remaster. Carefully enhanced using modern upscaling, color correction, and audio refinement techniques, this version brings new life to the original theatrical trailer while preserving its authentic cinematic feel."
                }
            />

            {/* overlay z-index lower than header */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0"></div>
        </div>
    );
};

export default MainSectionVideo;
