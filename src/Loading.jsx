
import React from 'react';
import { ClipLoader } from 'react-spinners';


const Loading = () => {
    return (
        <div className="loading-container h-[100vh]  top-0 fixed bg-white w-full z-[99999]">
            <div className="spinner"></div>
            <div>
                <div className='flex justify-center   items-center h-[100vh] '>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/assets/img/logo.svg" className=' ' alt="" />

                        <ClipLoader 
                            color="#ff0000"
                            speedMultiplier={0.5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
