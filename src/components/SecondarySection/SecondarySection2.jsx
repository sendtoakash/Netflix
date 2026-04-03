import Nowplaying from "../DisplayTypes/Nowplaying";
import Popular from "../DisplayTypes/Popular";
import TopRated from "../DisplayTypes/Toprated";

const SecondarySection = () => {
    return (
        <>
            <Nowplaying />
            <Popular />
            <TopRated />
        </>
    )
}

export default SecondarySection;
