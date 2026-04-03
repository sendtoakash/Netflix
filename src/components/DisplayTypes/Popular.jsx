import usePopular from '../Hooks/usePopular'
import { useSelector } from "react-redux"

function Popular() {
    usePopular()
    const popular = useSelector((state) => state.movie.popular);

    if (!popular || popular.length == 0) return;
    return (
        <div>
            <div className="bg-black py-6 px-4">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5 px-2">
                    <div className="w-1 h-6 bg-red-600 rounded-full"></div>
                    <h1 className="text-white font-bold text-xl tracking-wide uppercase">Popular</h1>
                    <div className="flex-1 h-px bg-gray-800 ml-2"></div>
                </div>

                {/* Scrollable Row */}
                <div
                    className="flex flex-nowrap overflow-y-hidden gap-4 pb-4 px-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {popular.map((popularMovie) => (
                        <div
                            key={popularMovie.id}
                            className="min-w-[140px] flex-shrink-0 group cursor-pointer"
                        >
                            {/* Poster */}
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={'https://image.tmdb.org/t/p/w500' + popularMovie.poster_path}
                                    alt={popularMovie.original_title}
                                    className="w-[140px] h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-black text-lg ml-1">▶</span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <p className="text-gray-300 text-xs mt-2 text-center truncate w-[140px] group-hover:text-white transition-colors duration-200">
                                {popularMovie.original_title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular
