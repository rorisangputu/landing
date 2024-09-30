
import cover from '../assets/albumcover.jpg';
import Huntersxwarner from './Huntersxwarner';
const Home = () => {
    return (
        <div className='bg-fixed-center-cover top-0 left-0 w-full h-full overflow-hidden py-20'>
            <div className='w-[90%] mx-auto h-full flex justify-center items-center'>
                <div className='fixed inset-0 z-0 lg:hidden'><Huntersxwarner /></div>
                <div className='flex abosolute h-full overflow-y-auto z-10 flex-col lg:flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-[150px] w-[150px]'>
                            <img src={cover} alt="" className='object-cover' />
                        </div>
                        {/* Song Details */}
                        <div className="text-center text-[#f6f1f1] py-5 gap-2 md:py-5 flex flex-col md:gap-4 font-sans">
                            <h1 className="text-2xl mx-20 font-bold md:text-5xl">
                                TOUCHED THE SKY
                            </h1>
                            <div className="mx-[5px] text-sm lg:mx-20 font-semibold md:text-2xl">
                                <p>DBN GOGO & EFFECTED VS DENNIS FERRER </p>
                                <p>
                                    (FEAT. TRIPLE X DA GHOST
                                    &amp; MIA TUTTAVILLA)
                                </p>
                            </div>
                        </div>
                        <a href="" className='py-2 px-5 md:text-2xl text-white bg-orange-600'>
                            <button>STREAM</button>
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-[150px] w-[150px]'>
                            <img src={cover} alt="" className='object-cover' />
                        </div>
                        {/* Song Details */}
                        <div className="text-center text-[#f6f1f1] py-5 gap-2 md:py-5 flex flex-col md:gap-4 font-sans">
                            <h1 className="text-2xl mx-7 font-bold md:text-5xl">
                                MOST PRECIOUS LOVE
                            </h1>
                            <div className="mx-[5px] text-sm lg:mx-20 font-semibold md:text-2xl">
                                <p>MAJOR LEAGUE & LUUDADEEJAY VS BLAZE </p>
                                <p>
                                    (FEAT. UDAUFL & BARBARA TUCKER)
                                </p>
                            </div>
                        </div>
                        <a href="" className='py-2 px-5 md:text-2xl text-white bg-orange-600'>
                            <button>STREAM</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home