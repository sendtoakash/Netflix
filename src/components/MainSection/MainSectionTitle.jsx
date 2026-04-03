import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const MainSectionTitle = ({ title, description }) => {

    return (
        <div className='absolute left-0 w-full text-white bottom-1/3 px-7'>
            <div>
                <p className='text-3xl font-bold'>{title}</p>
                <p className='py-4 w-1/4'>{description}</p>
            </div>

            <div className='flex gap-4'>
                <button className='flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition duration-200'>
                    <FaPlay size={14} />
                    Play Now
                </button>

                <button className='flex items-center gap-2 bg-gray-500/70 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-600/70 transition duration-200'>
                    <FaInfoCircle size={16} />
                    More Info
                </button>
            </div>
        </div>
    )
}

export default MainSectionTitle
