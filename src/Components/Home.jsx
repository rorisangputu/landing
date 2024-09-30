import React from 'react'
import cover from '../assets/albumcover.jpg';
import Huntersxwarner from './Huntersxwarner';
const Home = () => {
    return (
        <div className='bg-fixed-center-cover h-screen py-10'>
            <div className='w-[90%] mx-auto h-full flex justify-center items-center'>
                <div className='fixed inset-0 z-0 lg:hidden'><Huntersxwarner /></div>
                <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-[150px] w-[150px]'>
                            <img src={cover} alt="" className='object-cover' />
                        </div>
                        {/* Song Details */}
                        <div className="text-center text-[#f6f1f1] py-5 gap-4 md:py-5 flex flex-col md:gap-4 font-sans">
                            <h1 className="text-3xl mx-20 font-bold md:text-5xl">
                                TOUCHED THE SKY
                            </h1>
                            <div className="mx-[72px] lg:mx-20 font-semibold md:text-2xl">
                                <p>DBN GOGO & EFFECTED VS DENNIS FERRER </p>
                                <p>
                                    (FEAT. TRIPLE X DA GHOST
                                    &amp; MIA TUTTAVILLA)
                                </p>
                            </div>
                        </div>
                        <a href="" className='py-5 px-5 md:text-2xl text-white bg-orange-600'>
                            <button>STREAM</button>
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-[150px] w-[150px]'>
                            <img src={cover} alt="" className='object-cover' />
                        </div>
                        {/* Song Details */}
                        <div className="text-center text-[#f6f1f1] py-5 gap-4 md:py-5 flex flex-col md:gap-4 font-sans">
                            <h1 className="text-3xl mx-7 font-bold md:text-5xl">
                                MOST PRECIOUS LOVE
                            </h1>
                            <div className="mx-[72px] lg:mx-20 font-semibold md:text-2xl">
                                <p>MAJOR LEAGUE & LUUDADEEJAY VS BLAZE </p>
                                <p>
                                    (FEAT. UDAUFL & BARBARA TUCKER)
                                </p>
                            </div>
                        </div>
                        <a href="" className='py-5 px-5 md:text-2xl text-white bg-orange-600'>
                            <button>STREAM</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home