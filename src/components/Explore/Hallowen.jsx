import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import HallowenSlider from './HallowenSlider'

function Hallowen() {
    let title = '#613223'
    let color = "#fff"
    let bgcolor = "#E22733"
    
    return (
        <div className='bg-beige'>
            <Header color={color} bgcolor={bgcolor} title={title} />
            <div className='pt-32 max-w-[1240px] mx-auto px-[30px]'>
                <div className=" min-[1200px]:w-[70%] ">
                    <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Happy Halloween<span className='text-[#613223] font-turbinado'>.</span></h1>
                    <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    <p className='text-[20px] max-lg:text-[17px] text-[#613223] font-sofia'>Welcome to our haunted Halloween emporium. Get ready to immerse yourself in a world of frightful fun and eerie excitement. Whether you’re hosting a spook-tacular party, trick-or-treating with little ghouls, or simply embracing the spirit of the season, we have everything you need to make this Halloween the most thrilling one yet.</p>
                </div>
            </div>
            <div className="bg-[#E7730D]  relative overflow-hidden md:flex max-md:pb-10 mt-10 max-md:text-center rounded-br-[100px]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='max-md:hidden absolute h-[100%] w-auto left-0 bottom-0' width="743" height="388.11" viewBox="0 0 743 388.11">
                    <defs>
                        <clipPath id="clip-path6921">
                            <path id="Rect_769" data-name="Rect 769" d="M0,0H678a65,65,0,0,1,65,65V388.11a0,0,0,0,1,0,0H55a55,55,0,0,1-55-55V0A0,0,0,0,1,0,0Z" fill="#EB8124"></path>
                        </clipPath>
                    </defs>
                    <g id="Group_81" data-name="Group 81" clip-path="url(#clip-path6921)" style={{ "isolation": "isolate" }}>
                        <g id="Group_1153" data-name="Group 1153" transform="translate(474.439 945.683) rotate(-137)">
                            <path id="Shape_2005" data-name="Shape 2005" d="M598.052,114.488c91.944,35.826,4.586-41.456-1.335-50.522-5.077-7.778-21.068-7.063-28.466-8.6-30.1-6.251-59.306-5.671-89.611-1.856C438.963,58.505,403.327,75.7,365.9,90.467c-73.8,29.123-147.791,60.822-226.808,48.508-25.756-4.013-55.97-25.1-56.9-59.418-.512-18.977,6.987-35.3,9.22-53.327C92.828,14.8,86.364,2.09,75.44,6.389c-10.85,4.27-15.954,26.2-23.363,36.045C39.189,59.56,22.686,77.751,14.7,99.026c-14.569,38.794.361,84.113,33.353,99.38,22.915,10.6,52.376,5.18,76.035,1.1,55.592-9.6,109.436-27.012,162.991-47.3C356.11,126.041,431.459,74.7,505.763,80.815,539.631,83.6,567.038,100.905,598.052,114.488Z" transform="translate(269.516 130.364)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2006" data-name="Shape 2006" d="M692.59,275.1c22.553,80.355,62.384,18.862,43.857-40.779-28.847-75.375-43.478-110.744-88.26-134.559-36.6-17.609-89.108-31.573-162.615-24.056-37.213,4.16-71.6,19.467-107.3,31.628-68.132,23.211-138.7,50.815-209.172,60.968-42.9,6.182-95.958,18.762-127.085-27.565-17.3-25.753-19.347-56.9-10.324-87.232C35.069,42.15,52.969,18.537,46.846,7.273,43.287.726,35.631,1.889,31.661,7.106,23.265,18.138,18,36.574,13.528,50.3c-19.944,61.26,4.888,135.1,63.209,144.639,27.835,4.553,59.083-3.243,86.907-7.238,73.362-10.536,144.434-32.8,215.953-54.427C441.616,114.518,505.6,98.7,568.342,122.388,641.668,150.373,679.685,189.271,692.59,275.1Z" transform="translate(229.908 182.37)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2007" data-name="Shape 2007" d="M674.594,516.962l.023-19.387c-42.027.05-116.8-2.042-119.348-70.946-1.544-41.807,20.962-76.513,40.776-108.3,14.529-23.3,28.63-46.742,43.727-69.524,20.766-31.338,40.3-74,31.657-114.747-12.668-59.749-63.45-82.608-108.966-92.7-61.78-13.7-122.727,1.743-183.319,14.817C337.575,65.142,295.607,71.53,254.2,80.846c-27.655,6.223-158.751,20.864-186.734,22.41C18.8,100.4,26.415,85.523,5.178,75.571c1.487,21.328,25.934,46.883,59.389,45.1,29.764-4.024,142.381-15.037,171.959-20.722,80.233-15.428,164.109-34.16,245.8-31.874,16.934.473,33.5,4.639,50.231,6.229,42.531,4.037,99.9,22.027,106.88,82.42,4.123,35.64-18.77,75.579-35.346,102.1L553.4,340.542c-25.491,41.629-57.02,92.72-41.148,147.532,5.955,20.568,26.411,29.8,42.853,33.455C594.138,530.213,635.433,520.686,674.594,516.962Z" transform="translate(192.304 291.745)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2008" data-name="Shape 2008" d="M703.864,473.847c-32.1.143-64.247,12.876-96.42,14.593-13.217.7-27.786,1.546-40.731-1.989-46.021-12.57-54.265-60.631-41.488-107.689C546.782,299.356,604.6,246.355,635.3,173.422c11.693-27.783,18.022-63.033,2.2-90.478C614.525,43.1,572.318,41.621,536.018,37.552c-87.627-9.82-172.65,3.6-259.358,17.424C245.08,60.01,115.338,81.332,83.6,84.88,12.45,104.506,20.743,7.175,7.018,41.023s20.167,71.284,72.5,55.567c23.629-4.126,147.637-27.222,171.329-27.731,66.4-1.432,131.322-23.219,198.26-19.682,30.993,1.637,66.586,8.209,92.293,30.24,32.844,28.148,36.3,75.813,24.211,118.322-6.894,24.239-21.5,46.513-33.755,67.212-22.246,37.578-46.521,74.059-63.829,115.325-12.953,30.884-27.629,74.968-7.355,106.578,14.336,22.353,34.792,17.938,55.782,17.914,44.827-.053,88.318,2.145,131.716-8.816C661.265,492.643,703.305,493.045,703.864,473.847Z" transform="translate(163.024 342.938)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2009" data-name="Shape 2009" d="M4.9,71.589c18.73,14.624,11.907,31.854,155.928,12.141C248.035,62.086,407.9,40.084,484.37,71.16c37.572,15.267,83.007,38.119,78.5,94.736-2.486,31.2-23.369,59.538-37.574,84.332-34.372,60-78.945,134.52-61.754,209.83l27.156-.032c-5.847-18.149-15.815-32.465-15.768-53.3.038-17.978,7.108-37.065,12.874-53.331,16.822-47.449,45.021-86.007,67.6-129.355,20.094-38.573,53.046-83.062,30.9-130.879-16.147-34.872-55.735-51.43-86.961-56.884-65.036-11.353-135.24-1.116-200.536,2.368C174.128,50.631,62.594,101.156,40.578,29.109,24.806,37.573,5.1,54.455,4.9,71.589Z" transform="translate(114.103 387.767)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Combine_22" data-name="Combine 22" d="M499.137,590.2c15.9-62.93,42.159-159.928.185-215.347-40.4-53.346-105.477-46.577-159.989-50.272-3.873-.263-10.6,1-18.135,2.265-8.745,1.471-18.588,2.941-26.357,2.03-10.582,3.917-27.18,3.779-34.226,4.52-48.592,5.117-95.681,7.34-143.639-1.075-15.078-2.644-32.608-7.5-45.714-15.276-11.582-6.865-22.09-14.128-31.051-24.284C-9.508,236.38,28.324,161.686,51.775,100.016,59.086,80.8,67.15,59.969,71.653,40c1.644-7.3,2.207-23.855,8.1-29,4.878-4.263,16.567-3.27,22.67-3.915C101.359,24.519,88.591,43.2,82.469,59.666c-21.231,57.077-55.881,144.985-13.38,197.389,40.9,50.438,64.3,52.433,123.673,57.9.834.077,49.955-5.614,50.863-5.626,9.884-.132,28.766-3.65,42.849-2.667,8.993-5.99,26.439-6.455,33.414-7.629,44.032-7.413,86.867-11.625,131.148-4.286,13.92,2.305,30.214,6.93,42.646,14.891,10.987,7.03,21.019,14.536,29.814,25.252,48.811,59.47,18.836,142.209,1.193,210.223-5.5,21.192-11.589,44.169-14.48,66.078-1.056,8-.563,26.046-5.623,31.87-4.192,4.822-14.918,4.187-20.448,5.118C484.042,629.169,494.553,608.346,499.137,590.2Z" transform="translate(13.166 192.168)" fill="#EB8124"></path>
                            <path id="Shape_2012" data-name="Shape 2012" d="M80.85-3.693,56.469,39.95l-18.65,30.71C9.2,116.006-39.989,204.165,15.945,247.949a74.335,74.335,0,0,0,24.428,12.519c13.467,4.119,28.2,5.552,42.057,5.9l-.019-22.64c-9.23-.489-18.587-3.692-27.137-7.821A57.507,57.507,0,0,1,37.63,222.523C-6.6,173.81,40.7,100.629,65.087,56.129,74.826,38.36,88.931,19.219,80.85-3.693Z" transform="translate(393.385 214.786) rotate(-111)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2014" data-name="Shape 2014" d="M27.192-1.242,14.936,23.005C-2.692,58.1-24.408,134.982,28.671,145.92L28.586,44.039C28.575,30.664,31.552,11.115,27.192-1.242Z" transform="translate(439.785 139.435) rotate(-111)" fill="#EB8124" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='absolute w-auto h-[100%] md:hidden' width="743" height="388.11" viewBox="0 0 743 388.11">
                    <defs>
                        <clipPath id="clip-path6921">
                            <path id="Rect_769" data-name="Rect 769" d="M0,0H678a65,65,0,0,1,65,65V388.11a0,0,0,0,1,0,0H55a55,55,0,0,1-55-55V0A0,0,0,0,1,0,0Z" fill="#EB8124"></path>
                        </clipPath>
                    </defs>
                    <g id="Group_81" data-name="Group 81" clip-path="url(#clip-path6921)" style={{ "isolation": "isolate" }}>
                        <g id="Group_1153" data-name="Group 1153" transform="translate(474.439 945.683) rotate(-137)">
                            <path id="Shape_2005" data-name="Shape 2005" d="M598.052,114.488c91.944,35.826,4.586-41.456-1.335-50.522-5.077-7.778-21.068-7.063-28.466-8.6-30.1-6.251-59.306-5.671-89.611-1.856C438.963,58.505,403.327,75.7,365.9,90.467c-73.8,29.123-147.791,60.822-226.808,48.508-25.756-4.013-55.97-25.1-56.9-59.418-.512-18.977,6.987-35.3,9.22-53.327C92.828,14.8,86.364,2.09,75.44,6.389c-10.85,4.27-15.954,26.2-23.363,36.045C39.189,59.56,22.686,77.751,14.7,99.026c-14.569,38.794.361,84.113,33.353,99.38,22.915,10.6,52.376,5.18,76.035,1.1,55.592-9.6,109.436-27.012,162.991-47.3C356.11,126.041,431.459,74.7,505.763,80.815,539.631,83.6,567.038,100.905,598.052,114.488Z" transform="translate(269.516 130.364)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2006" data-name="Shape 2006" d="M692.59,275.1c22.553,80.355,62.384,18.862,43.857-40.779-28.847-75.375-43.478-110.744-88.26-134.559-36.6-17.609-89.108-31.573-162.615-24.056-37.213,4.16-71.6,19.467-107.3,31.628-68.132,23.211-138.7,50.815-209.172,60.968-42.9,6.182-95.958,18.762-127.085-27.565-17.3-25.753-19.347-56.9-10.324-87.232C35.069,42.15,52.969,18.537,46.846,7.273,43.287.726,35.631,1.889,31.661,7.106,23.265,18.138,18,36.574,13.528,50.3c-19.944,61.26,4.888,135.1,63.209,144.639,27.835,4.553,59.083-3.243,86.907-7.238,73.362-10.536,144.434-32.8,215.953-54.427C441.616,114.518,505.6,98.7,568.342,122.388,641.668,150.373,679.685,189.271,692.59,275.1Z" transform="translate(229.908 182.37)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2007" data-name="Shape 2007" d="M674.594,516.962l.023-19.387c-42.027.05-116.8-2.042-119.348-70.946-1.544-41.807,20.962-76.513,40.776-108.3,14.529-23.3,28.63-46.742,43.727-69.524,20.766-31.338,40.3-74,31.657-114.747-12.668-59.749-63.45-82.608-108.966-92.7-61.78-13.7-122.727,1.743-183.319,14.817C337.575,65.142,295.607,71.53,254.2,80.846c-27.655,6.223-158.751,20.864-186.734,22.41C18.8,100.4,26.415,85.523,5.178,75.571c1.487,21.328,25.934,46.883,59.389,45.1,29.764-4.024,142.381-15.037,171.959-20.722,80.233-15.428,164.109-34.16,245.8-31.874,16.934.473,33.5,4.639,50.231,6.229,42.531,4.037,99.9,22.027,106.88,82.42,4.123,35.64-18.77,75.579-35.346,102.1L553.4,340.542c-25.491,41.629-57.02,92.72-41.148,147.532,5.955,20.568,26.411,29.8,42.853,33.455C594.138,530.213,635.433,520.686,674.594,516.962Z" transform="translate(192.304 291.745)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2008" data-name="Shape 2008" d="M703.864,473.847c-32.1.143-64.247,12.876-96.42,14.593-13.217.7-27.786,1.546-40.731-1.989-46.021-12.57-54.265-60.631-41.488-107.689C546.782,299.356,604.6,246.355,635.3,173.422c11.693-27.783,18.022-63.033,2.2-90.478C614.525,43.1,572.318,41.621,536.018,37.552c-87.627-9.82-172.65,3.6-259.358,17.424C245.08,60.01,115.338,81.332,83.6,84.88,12.45,104.506,20.743,7.175,7.018,41.023s20.167,71.284,72.5,55.567c23.629-4.126,147.637-27.222,171.329-27.731,66.4-1.432,131.322-23.219,198.26-19.682,30.993,1.637,66.586,8.209,92.293,30.24,32.844,28.148,36.3,75.813,24.211,118.322-6.894,24.239-21.5,46.513-33.755,67.212-22.246,37.578-46.521,74.059-63.829,115.325-12.953,30.884-27.629,74.968-7.355,106.578,14.336,22.353,34.792,17.938,55.782,17.914,44.827-.053,88.318,2.145,131.716-8.816C661.265,492.643,703.305,493.045,703.864,473.847Z" transform="translate(163.024 342.938)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2009" data-name="Shape 2009" d="M4.9,71.589c18.73,14.624,11.907,31.854,155.928,12.141C248.035,62.086,407.9,40.084,484.37,71.16c37.572,15.267,83.007,38.119,78.5,94.736-2.486,31.2-23.369,59.538-37.574,84.332-34.372,60-78.945,134.52-61.754,209.83l27.156-.032c-5.847-18.149-15.815-32.465-15.768-53.3.038-17.978,7.108-37.065,12.874-53.331,16.822-47.449,45.021-86.007,67.6-129.355,20.094-38.573,53.046-83.062,30.9-130.879-16.147-34.872-55.735-51.43-86.961-56.884-65.036-11.353-135.24-1.116-200.536,2.368C174.128,50.631,62.594,101.156,40.578,29.109,24.806,37.573,5.1,54.455,4.9,71.589Z" transform="translate(114.103 387.767)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Combine_22" data-name="Combine 22" d="M499.137,590.2c15.9-62.93,42.159-159.928.185-215.347-40.4-53.346-105.477-46.577-159.989-50.272-3.873-.263-10.6,1-18.135,2.265-8.745,1.471-18.588,2.941-26.357,2.03-10.582,3.917-27.18,3.779-34.226,4.52-48.592,5.117-95.681,7.34-143.639-1.075-15.078-2.644-32.608-7.5-45.714-15.276-11.582-6.865-22.09-14.128-31.051-24.284C-9.508,236.38,28.324,161.686,51.775,100.016,59.086,80.8,67.15,59.969,71.653,40c1.644-7.3,2.207-23.855,8.1-29,4.878-4.263,16.567-3.27,22.67-3.915C101.359,24.519,88.591,43.2,82.469,59.666c-21.231,57.077-55.881,144.985-13.38,197.389,40.9,50.438,64.3,52.433,123.673,57.9.834.077,49.955-5.614,50.863-5.626,9.884-.132,28.766-3.65,42.849-2.667,8.993-5.99,26.439-6.455,33.414-7.629,44.032-7.413,86.867-11.625,131.148-4.286,13.92,2.305,30.214,6.93,42.646,14.891,10.987,7.03,21.019,14.536,29.814,25.252,48.811,59.47,18.836,142.209,1.193,210.223-5.5,21.192-11.589,44.169-14.48,66.078-1.056,8-.563,26.046-5.623,31.87-4.192,4.822-14.918,4.187-20.448,5.118C484.042,629.169,494.553,608.346,499.137,590.2Z" transform="translate(13.166 192.168)" fill="#EB8124"></path>
                            <path id="Shape_2012" data-name="Shape 2012" d="M80.85-3.693,56.469,39.95l-18.65,30.71C9.2,116.006-39.989,204.165,15.945,247.949a74.335,74.335,0,0,0,24.428,12.519c13.467,4.119,28.2,5.552,42.057,5.9l-.019-22.64c-9.23-.489-18.587-3.692-27.137-7.821A57.507,57.507,0,0,1,37.63,222.523C-6.6,173.81,40.7,100.629,65.087,56.129,74.826,38.36,88.931,19.219,80.85-3.693Z" transform="translate(393.385 214.786) rotate(-111)" fill="#EB8124" fill-rule="evenodd"></path>
                            <path id="Shape_2014" data-name="Shape 2014" d="M27.192-1.242,14.936,23.005C-2.692,58.1-24.408,134.982,28.671,145.92L28.586,44.039C28.575,30.664,31.552,11.115,27.192-1.242Z" transform="translate(439.785 139.435) rotate(-111)" fill="#EB8124" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
                <div className="max-w-[1180px] mx-auto relative overflow-hidden">
                    <img src="/assets/img/Explore/TriCar.webp" className='mx-auto right-[-70px]  w-max bottom-[-100px] md:absolute' alt="" />
                    <div className="px-[30px] relative text-white md:w-[50%]  z-30 pt-[3rem] pl-[5%] pb-[3rem]">
                        <h1 className='mb-0 text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] leading-[1.2] '><span className='font-turbinado text-[#fed455] text-[63px] max-[1200px]:text-[40px] max-lg:text-[36px] max-md:text-[45px]'>Premium</span> mini cones </h1>
                        <p className='text-[17px] font-sofia max-lg:text-[15px] my-5 font-sofia'>From spine-tingling caramel corn to ghostly cheddar bites, we’ve conjured up a popcorn selection that’s frightfully delicious. Each mini cone is packed with flavor and festivity, making them the ideal snack for Halloween parties, movie nights, or trick-or-treaters.</p>
                        <div className="my-2"><NavLink to={"/shop/product-flavor/cones/"} className={"group"}><button className='inline-flex font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-8 max-md:mx-auto duration-300'><span className='group-hover:scale-x-90 duration-300'>Buy Now</span> <FaArrowRightLong /></button></NavLink></div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto mt-20">
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[650px] max-lg:min-h-[520px] max-[850px]:min-h-[580px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Halloween.webp" alt="" />
                    <div className="bg-[#8347AD] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#fff]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>Trick-or-Treat Essentials </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#fed433]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] font-sofia max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 '>Surprise the little trick-or-treaters at your door with treats that will have them cheering for more. Our individual popcorn packs are the ideal treat, adding a unique twist to the traditional candy offerings. Hand out our mini cone popcorn and you’ll be the talk of the town among the young ghouls and ghosts alike.</p>
                        <NavLink to={"/shop/product/mini-cones-premium-assortment"} className={"group"}><button className='inline-flex font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Buy Mini Cones</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[650px]   max-lg:min-h-[450px]    max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Hallowen2.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white mr-5'>Classroom Party Gifts</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] font-sofia max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0'>Send the little goblins to school with quick, easy and convenient party favors that keep the Halloween excitement alive. Our goody bags are filled with tasty treats and pops of flavor that kids cherish. From kettle corn to Zebra® popcorn, these favors will be a haunting reminder of the fantastic time they had at their school party. Buy them today.</p>
                        <NavLink to={"/shop/product/mini-cones-premium-assortment"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Buy Variety Pack</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[720px] max-lg:min-h-[520px] max-[850px]:min-h-[580px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Kids.webp" alt="" />
                    <div className="bg-[#C0CC3E] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] mr-10'>Costume Party Must-Haves </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#68368A]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] font-sofia max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 '>Throw a party that will send shivers down your guests’ spines. No Halloween party is complete without some hauntingly good snacks. Treat your guests to a popcorn buffet filled with our frightfully fun flavors. Watch as they gravitate toward our caramel corn popcorn, perfectly capturing the essence of autumn and all things Halloween. Whether they’re vampires, witches, or zombies, everyone will be delighted by these mouthwatering treats.</p>
                        <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Buy Popcorn Tin</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[600px]   max-lg:min-h-[450px]    max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Hallowen3.webp" alt="" />
                    <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white mr-5'>Halloween Office Party Treat</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#fed455]'></div>
                        <p className='pb-[22px] lg:text-[17px] font-sofia max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0'>Indulge your taste buds with our wickedly delightful assortment of Halloween treats. Our selection will satisfy even the most insatiable sweet tooth. Fill your Halloween party’s cauldron with popcorn from these … , perfect for sharing with friends and coworkers.</p>
                        <NavLink to={"/create-your-own"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Create Your Own</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
            </div>
            <div className="bg-[#8347AD] relative overflow-hidden  md:flex max-md:pb-10 mt-10 max-md:text-center rounded-br-[100px]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='max-md:hidden absolute h-[100%] w-auto left-0 bottom-0' width="743" height="388.11" viewBox="0 0 743 388.11">
                    <defs>
                        <clipPath id="clip-path5267">
                            <path id="Rect_769" data-name="Rect 769" d="M0,0H678a65,65,0,0,1,65,65V388.11a0,0,0,0,1,0,0H55a55,55,0,0,1-55-55V0A0,0,0,0,1,0,0Z" fill="#68368B"></path>
                        </clipPath>
                    </defs>
                    <g id="Group_81" data-name="Group 81" clip-path="url(#clip-path5267)" style={{"isolation": "isolate"}}>
                        <g id="Group_1153" data-name="Group 1153" transform="translate(474.439 945.683) rotate(-137)">
                            <path id="Shape_2005" data-name="Shape 2005" d="M598.052,114.488c91.944,35.826,4.586-41.456-1.335-50.522-5.077-7.778-21.068-7.063-28.466-8.6-30.1-6.251-59.306-5.671-89.611-1.856C438.963,58.505,403.327,75.7,365.9,90.467c-73.8,29.123-147.791,60.822-226.808,48.508-25.756-4.013-55.97-25.1-56.9-59.418-.512-18.977,6.987-35.3,9.22-53.327C92.828,14.8,86.364,2.09,75.44,6.389c-10.85,4.27-15.954,26.2-23.363,36.045C39.189,59.56,22.686,77.751,14.7,99.026c-14.569,38.794.361,84.113,33.353,99.38,22.915,10.6,52.376,5.18,76.035,1.1,55.592-9.6,109.436-27.012,162.991-47.3C356.11,126.041,431.459,74.7,505.763,80.815,539.631,83.6,567.038,100.905,598.052,114.488Z" transform="translate(269.516 130.364)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2006" data-name="Shape 2006" d="M692.59,275.1c22.553,80.355,62.384,18.862,43.857-40.779-28.847-75.375-43.478-110.744-88.26-134.559-36.6-17.609-89.108-31.573-162.615-24.056-37.213,4.16-71.6,19.467-107.3,31.628-68.132,23.211-138.7,50.815-209.172,60.968-42.9,6.182-95.958,18.762-127.085-27.565-17.3-25.753-19.347-56.9-10.324-87.232C35.069,42.15,52.969,18.537,46.846,7.273,43.287.726,35.631,1.889,31.661,7.106,23.265,18.138,18,36.574,13.528,50.3c-19.944,61.26,4.888,135.1,63.209,144.639,27.835,4.553,59.083-3.243,86.907-7.238,73.362-10.536,144.434-32.8,215.953-54.427C441.616,114.518,505.6,98.7,568.342,122.388,641.668,150.373,679.685,189.271,692.59,275.1Z" transform="translate(229.908 182.37)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2007" data-name="Shape 2007" d="M674.594,516.962l.023-19.387c-42.027.05-116.8-2.042-119.348-70.946-1.544-41.807,20.962-76.513,40.776-108.3,14.529-23.3,28.63-46.742,43.727-69.524,20.766-31.338,40.3-74,31.657-114.747-12.668-59.749-63.45-82.608-108.966-92.7-61.78-13.7-122.727,1.743-183.319,14.817C337.575,65.142,295.607,71.53,254.2,80.846c-27.655,6.223-158.751,20.864-186.734,22.41C18.8,100.4,26.415,85.523,5.178,75.571c1.487,21.328,25.934,46.883,59.389,45.1,29.764-4.024,142.381-15.037,171.959-20.722,80.233-15.428,164.109-34.16,245.8-31.874,16.934.473,33.5,4.639,50.231,6.229,42.531,4.037,99.9,22.027,106.88,82.42,4.123,35.64-18.77,75.579-35.346,102.1L553.4,340.542c-25.491,41.629-57.02,92.72-41.148,147.532,5.955,20.568,26.411,29.8,42.853,33.455C594.138,530.213,635.433,520.686,674.594,516.962Z" transform="translate(192.304 291.745)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2008" data-name="Shape 2008" d="M703.864,473.847c-32.1.143-64.247,12.876-96.42,14.593-13.217.7-27.786,1.546-40.731-1.989-46.021-12.57-54.265-60.631-41.488-107.689C546.782,299.356,604.6,246.355,635.3,173.422c11.693-27.783,18.022-63.033,2.2-90.478C614.525,43.1,572.318,41.621,536.018,37.552c-87.627-9.82-172.65,3.6-259.358,17.424C245.08,60.01,115.338,81.332,83.6,84.88,12.45,104.506,20.743,7.175,7.018,41.023s20.167,71.284,72.5,55.567c23.629-4.126,147.637-27.222,171.329-27.731,66.4-1.432,131.322-23.219,198.26-19.682,30.993,1.637,66.586,8.209,92.293,30.24,32.844,28.148,36.3,75.813,24.211,118.322-6.894,24.239-21.5,46.513-33.755,67.212-22.246,37.578-46.521,74.059-63.829,115.325-12.953,30.884-27.629,74.968-7.355,106.578,14.336,22.353,34.792,17.938,55.782,17.914,44.827-.053,88.318,2.145,131.716-8.816C661.265,492.643,703.305,493.045,703.864,473.847Z" transform="translate(163.024 342.938)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2009" data-name="Shape 2009" d="M4.9,71.589c18.73,14.624,11.907,31.854,155.928,12.141C248.035,62.086,407.9,40.084,484.37,71.16c37.572,15.267,83.007,38.119,78.5,94.736-2.486,31.2-23.369,59.538-37.574,84.332-34.372,60-78.945,134.52-61.754,209.83l27.156-.032c-5.847-18.149-15.815-32.465-15.768-53.3.038-17.978,7.108-37.065,12.874-53.331,16.822-47.449,45.021-86.007,67.6-129.355,20.094-38.573,53.046-83.062,30.9-130.879-16.147-34.872-55.735-51.43-86.961-56.884-65.036-11.353-135.24-1.116-200.536,2.368C174.128,50.631,62.594,101.156,40.578,29.109,24.806,37.573,5.1,54.455,4.9,71.589Z" transform="translate(114.103 387.767)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Combine_22" data-name="Combine 22" d="M499.137,590.2c15.9-62.93,42.159-159.928.185-215.347-40.4-53.346-105.477-46.577-159.989-50.272-3.873-.263-10.6,1-18.135,2.265-8.745,1.471-18.588,2.941-26.357,2.03-10.582,3.917-27.18,3.779-34.226,4.52-48.592,5.117-95.681,7.34-143.639-1.075-15.078-2.644-32.608-7.5-45.714-15.276-11.582-6.865-22.09-14.128-31.051-24.284C-9.508,236.38,28.324,161.686,51.775,100.016,59.086,80.8,67.15,59.969,71.653,40c1.644-7.3,2.207-23.855,8.1-29,4.878-4.263,16.567-3.27,22.67-3.915C101.359,24.519,88.591,43.2,82.469,59.666c-21.231,57.077-55.881,144.985-13.38,197.389,40.9,50.438,64.3,52.433,123.673,57.9.834.077,49.955-5.614,50.863-5.626,9.884-.132,28.766-3.65,42.849-2.667,8.993-5.99,26.439-6.455,33.414-7.629,44.032-7.413,86.867-11.625,131.148-4.286,13.92,2.305,30.214,6.93,42.646,14.891,10.987,7.03,21.019,14.536,29.814,25.252,48.811,59.47,18.836,142.209,1.193,210.223-5.5,21.192-11.589,44.169-14.48,66.078-1.056,8-.563,26.046-5.623,31.87-4.192,4.822-14.918,4.187-20.448,5.118C484.042,629.169,494.553,608.346,499.137,590.2Z" transform="translate(13.166 192.168)" fill="#68368B"></path>
                            <path id="Shape_2012" data-name="Shape 2012" d="M80.85-3.693,56.469,39.95l-18.65,30.71C9.2,116.006-39.989,204.165,15.945,247.949a74.335,74.335,0,0,0,24.428,12.519c13.467,4.119,28.2,5.552,42.057,5.9l-.019-22.64c-9.23-.489-18.587-3.692-27.137-7.821A57.507,57.507,0,0,1,37.63,222.523C-6.6,173.81,40.7,100.629,65.087,56.129,74.826,38.36,88.931,19.219,80.85-3.693Z" transform="translate(393.385 214.786) rotate(-111)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2014" data-name="Shape 2014" d="M27.192-1.242,14.936,23.005C-2.692,58.1-24.408,134.982,28.671,145.92L28.586,44.039C28.575,30.664,31.552,11.115,27.192-1.242Z" transform="translate(439.785 139.435) rotate(-111)" fill="#68368B" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='absolute w-auto h-[100%] md:hidden' width="743" height="388.11" viewBox="0 0 743 388.11">
                    <defs>
                        <clipPath id="clip-path5267">
                            <path id="Rect_769" data-name="Rect 769" d="M0,0H678a65,65,0,0,1,65,65V388.11a0,0,0,0,1,0,0H55a55,55,0,0,1-55-55V0A0,0,0,0,1,0,0Z" fill="#68368B"></path>
                        </clipPath>
                    </defs>
                    <g id="Group_81" data-name="Group 81" clip-path="url(#clip-path5267)" style={{"isolation": "isolate"}}>
                        <g id="Group_1153" data-name="Group 1153" transform="translate(474.439 945.683) rotate(-137)">
                            <path id="Shape_2005" data-name="Shape 2005" d="M598.052,114.488c91.944,35.826,4.586-41.456-1.335-50.522-5.077-7.778-21.068-7.063-28.466-8.6-30.1-6.251-59.306-5.671-89.611-1.856C438.963,58.505,403.327,75.7,365.9,90.467c-73.8,29.123-147.791,60.822-226.808,48.508-25.756-4.013-55.97-25.1-56.9-59.418-.512-18.977,6.987-35.3,9.22-53.327C92.828,14.8,86.364,2.09,75.44,6.389c-10.85,4.27-15.954,26.2-23.363,36.045C39.189,59.56,22.686,77.751,14.7,99.026c-14.569,38.794.361,84.113,33.353,99.38,22.915,10.6,52.376,5.18,76.035,1.1,55.592-9.6,109.436-27.012,162.991-47.3C356.11,126.041,431.459,74.7,505.763,80.815,539.631,83.6,567.038,100.905,598.052,114.488Z" transform="translate(269.516 130.364)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2006" data-name="Shape 2006" d="M692.59,275.1c22.553,80.355,62.384,18.862,43.857-40.779-28.847-75.375-43.478-110.744-88.26-134.559-36.6-17.609-89.108-31.573-162.615-24.056-37.213,4.16-71.6,19.467-107.3,31.628-68.132,23.211-138.7,50.815-209.172,60.968-42.9,6.182-95.958,18.762-127.085-27.565-17.3-25.753-19.347-56.9-10.324-87.232C35.069,42.15,52.969,18.537,46.846,7.273,43.287.726,35.631,1.889,31.661,7.106,23.265,18.138,18,36.574,13.528,50.3c-19.944,61.26,4.888,135.1,63.209,144.639,27.835,4.553,59.083-3.243,86.907-7.238,73.362-10.536,144.434-32.8,215.953-54.427C441.616,114.518,505.6,98.7,568.342,122.388,641.668,150.373,679.685,189.271,692.59,275.1Z" transform="translate(229.908 182.37)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2007" data-name="Shape 2007" d="M674.594,516.962l.023-19.387c-42.027.05-116.8-2.042-119.348-70.946-1.544-41.807,20.962-76.513,40.776-108.3,14.529-23.3,28.63-46.742,43.727-69.524,20.766-31.338,40.3-74,31.657-114.747-12.668-59.749-63.45-82.608-108.966-92.7-61.78-13.7-122.727,1.743-183.319,14.817C337.575,65.142,295.607,71.53,254.2,80.846c-27.655,6.223-158.751,20.864-186.734,22.41C18.8,100.4,26.415,85.523,5.178,75.571c1.487,21.328,25.934,46.883,59.389,45.1,29.764-4.024,142.381-15.037,171.959-20.722,80.233-15.428,164.109-34.16,245.8-31.874,16.934.473,33.5,4.639,50.231,6.229,42.531,4.037,99.9,22.027,106.88,82.42,4.123,35.64-18.77,75.579-35.346,102.1L553.4,340.542c-25.491,41.629-57.02,92.72-41.148,147.532,5.955,20.568,26.411,29.8,42.853,33.455C594.138,530.213,635.433,520.686,674.594,516.962Z" transform="translate(192.304 291.745)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2008" data-name="Shape 2008" d="M703.864,473.847c-32.1.143-64.247,12.876-96.42,14.593-13.217.7-27.786,1.546-40.731-1.989-46.021-12.57-54.265-60.631-41.488-107.689C546.782,299.356,604.6,246.355,635.3,173.422c11.693-27.783,18.022-63.033,2.2-90.478C614.525,43.1,572.318,41.621,536.018,37.552c-87.627-9.82-172.65,3.6-259.358,17.424C245.08,60.01,115.338,81.332,83.6,84.88,12.45,104.506,20.743,7.175,7.018,41.023s20.167,71.284,72.5,55.567c23.629-4.126,147.637-27.222,171.329-27.731,66.4-1.432,131.322-23.219,198.26-19.682,30.993,1.637,66.586,8.209,92.293,30.24,32.844,28.148,36.3,75.813,24.211,118.322-6.894,24.239-21.5,46.513-33.755,67.212-22.246,37.578-46.521,74.059-63.829,115.325-12.953,30.884-27.629,74.968-7.355,106.578,14.336,22.353,34.792,17.938,55.782,17.914,44.827-.053,88.318,2.145,131.716-8.816C661.265,492.643,703.305,493.045,703.864,473.847Z" transform="translate(163.024 342.938)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2009" data-name="Shape 2009" d="M4.9,71.589c18.73,14.624,11.907,31.854,155.928,12.141C248.035,62.086,407.9,40.084,484.37,71.16c37.572,15.267,83.007,38.119,78.5,94.736-2.486,31.2-23.369,59.538-37.574,84.332-34.372,60-78.945,134.52-61.754,209.83l27.156-.032c-5.847-18.149-15.815-32.465-15.768-53.3.038-17.978,7.108-37.065,12.874-53.331,16.822-47.449,45.021-86.007,67.6-129.355,20.094-38.573,53.046-83.062,30.9-130.879-16.147-34.872-55.735-51.43-86.961-56.884-65.036-11.353-135.24-1.116-200.536,2.368C174.128,50.631,62.594,101.156,40.578,29.109,24.806,37.573,5.1,54.455,4.9,71.589Z" transform="translate(114.103 387.767)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Combine_22" data-name="Combine 22" d="M499.137,590.2c15.9-62.93,42.159-159.928.185-215.347-40.4-53.346-105.477-46.577-159.989-50.272-3.873-.263-10.6,1-18.135,2.265-8.745,1.471-18.588,2.941-26.357,2.03-10.582,3.917-27.18,3.779-34.226,4.52-48.592,5.117-95.681,7.34-143.639-1.075-15.078-2.644-32.608-7.5-45.714-15.276-11.582-6.865-22.09-14.128-31.051-24.284C-9.508,236.38,28.324,161.686,51.775,100.016,59.086,80.8,67.15,59.969,71.653,40c1.644-7.3,2.207-23.855,8.1-29,4.878-4.263,16.567-3.27,22.67-3.915C101.359,24.519,88.591,43.2,82.469,59.666c-21.231,57.077-55.881,144.985-13.38,197.389,40.9,50.438,64.3,52.433,123.673,57.9.834.077,49.955-5.614,50.863-5.626,9.884-.132,28.766-3.65,42.849-2.667,8.993-5.99,26.439-6.455,33.414-7.629,44.032-7.413,86.867-11.625,131.148-4.286,13.92,2.305,30.214,6.93,42.646,14.891,10.987,7.03,21.019,14.536,29.814,25.252,48.811,59.47,18.836,142.209,1.193,210.223-5.5,21.192-11.589,44.169-14.48,66.078-1.056,8-.563,26.046-5.623,31.87-4.192,4.822-14.918,4.187-20.448,5.118C484.042,629.169,494.553,608.346,499.137,590.2Z" transform="translate(13.166 192.168)" fill="#68368B"></path>
                            <path id="Shape_2012" data-name="Shape 2012" d="M80.85-3.693,56.469,39.95l-18.65,30.71C9.2,116.006-39.989,204.165,15.945,247.949a74.335,74.335,0,0,0,24.428,12.519c13.467,4.119,28.2,5.552,42.057,5.9l-.019-22.64c-9.23-.489-18.587-3.692-27.137-7.821A57.507,57.507,0,0,1,37.63,222.523C-6.6,173.81,40.7,100.629,65.087,56.129,74.826,38.36,88.931,19.219,80.85-3.693Z" transform="translate(393.385 214.786) rotate(-111)" fill="#68368B" fill-rule="evenodd"></path>
                            <path id="Shape_2014" data-name="Shape 2014" d="M27.192-1.242,14.936,23.005C-2.692,58.1-24.408,134.982,28.671,145.92L28.586,44.039C28.575,30.664,31.552,11.115,27.192-1.242Z" transform="translate(439.785 139.435) rotate(-111)" fill="#68368B" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
                <div className="max-w-[1180px] mx-auto relative overflow-hidden">
                    <img src="/assets/img/Explore/Skel.webp" className='mx-auto right-[-70px]  w-max bottom-[-100px] md:absolute' alt="" />
                    <div className="px-[30px] relative text-white md:w-[50%]  z-30 pt-[3rem] pl-[5%] pb-[3rem]">
                        <h1 className='mb-0 text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] leading-[1.2] '>Skeleton <span className='font-turbinado text-[#613223] text-[63px] max-[1200px]:text-[40px] max-lg:text-[36px] max-md:text-[45px]'> Mini Cones</span> </h1>
                        <p className='text-[17px] max-lg:text-[15px] my-5 font-sofia'>Do the Monster Munch. Your favorite Halloween character is here, but nothing’s scary about them. In fact, you’ll call them delicious. We’ve paired this spooktacular design with our mouthwatering Kettle Corn to create a hauntingly delectable treat for all ages. Bring them to the party or give them out as a treat. Halloween never tasted so good.</p>
                        <div className="my-2"><NavLink to={"/shop/product/kettle-corn-skeleton-mini-cones"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-8 max-md:mx-auto duration-300'><span className='group-hover:scale-x-90 duration-300'>Sold Out</span> <FaArrowRightLong /></button></NavLink></div>
                    </div>
                </div>
            </div>
            <div className=" max-w-[1180px] mx-auto">
                <p className='text-[42px] max-lg:text-[37px] max-md:text-[33px] max-[550px]:text-[30px] text-center text-[#E40C13] leading-[1.2] mt-10'>Flavors</p>
                <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13] mx-auto'></div>
                <p className='text-[26px] font-sofia font-bold text-center max-md:text-[23px] text-[#E22733] mb-10'>Our best selling flavors</p>
                <div className="grid grid-cols-4 max-[850px]:grid-cols-2 max-md:grid-cols-1 max-lg:px-[40px] max-md:px-0">
                    <div className="card1 ">
                        <img className='max-w-[75%] max-[850px]:max-w-[60%] mx-auto mb-6' src="/assets/img/Explore/Caramel.webp" alt="" />
                        <div className=" px-5 border-r-2 border-[#F3D3C9] text-center">
                            <h4 className='text-[25px] max-lg:text-[22px] text-[#613223] mb-3'>Caramel Corn</h4>
                            <div>
                                <p className='max-lg:text-[13.5px] mb-8 font-sofia'>Indulge in the rich, buttery sweetness of our delectable caramel corn popcorn – a perfect blend of crunch and caramel bliss</p>
                                <p className='text-[17px] max-lg:text-[15.5px] text-[#613223] group underline hover:no-underline'>
                                    <NavLink to={"/shop/product-flavor/caramel/"} className="font-sofia font-bold ">Buy Now</NavLink>
                                    <FaAngleRight className='p-1 ml-2 inline mb-2 text-white group-hover:right-[-5px] right-0 duration-300 relative rounded-full bg-red-600' size={20} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card1 ">
                        <img className='max-w-[75%] max-[850px]:max-w-[60%] mx-auto mb-6' src="/assets/img/Explore/WhiteKettle.webp" alt="" />
                        <div className=" px-5 border-r-2 border-[#F3D3C9] text-center">
                            <h4 className='text-[25px] max-lg:text-[22px] text-[#613223] mb-3'>Kettle Corn</h4>
                            <div>
                                <p className='max-lg:text-[13.5px] mb-8 font-sofia'>Savor the irresistible balance of sweet and salty with our kettle corn popcorn – a delightful snack that's both crispy and crave-worthy</p>
                                <p className='text-[17px] max-lg:text-[15.5px] text-[#613223] group underline hover:no-underline'>
                                    <NavLink to={"/shop/product-flavor/kettle/"} className="font-sofia font-bold ">Buy Now</NavLink>
                                    <FaAngleRight className='p-1 ml-2 inline mb-2 text-white group-hover:right-[-5px] right-0 duration-300 relative rounded-full bg-red-600' size={20} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card1 ">
                        <img className='max-w-[75%] max-[850px]:max-w-[60%] mx-auto mb-6' src="/assets/img/Explore/Cheddar.webp" alt="" />
                        <div className=" px-5 border-r-2 border-[#F3D3C9] text-center">
                            <h4 className='text-[25px] max-lg:text-[22px] text-[#613223] mb-3'>Cheddar Cheese</h4>
                            <div>
                                <p className='max-lg:text-[13.5px] mb-8 font-sofia'>Cheesy perfection awaits! Enjoy our cheddar cheese popcorn for a savory, sharp, and satisfying snacking experience</p>
                                <p className='text-[17px] max-lg:text-[15.5px] text-[#613223] group underline hover:no-underline'>
                                    <NavLink to={"/shop/product-flavor/cheese/"} className="font-sofia font-bold ">Buy Now</NavLink>
                                    <FaAngleRight className='p-1 ml-2 inline mb-2 text-white group-hover:right-[-5px] right-0 duration-300 relative rounded-full bg-red-600' size={20} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card1 ">
                        <img className='max-w-[75%] max-[850px]:max-w-[60%] mx-auto mb-6' src="/assets/img/Explore/Zebra.webp" alt="" />
                        <div className=" px-5  text-center">
                            <h4 className='text-[25px] max-lg:text-[22px] text-[#613223] mb-3'>Zebra®</h4>
                            <div>
                                <p className='max-lg:text-[13.5px] mb-8 font-sofia'>Indulge your sweet tooth with our chocolate-flavored popcorn. A delightful mix of cocoa goodness and crunchy delight in every bite</p>
                                <p className='text-[17px] max-lg:text-[15.5px] text-[#613223] group underline hover:no-underline '>
                                    <NavLink to={"/shop/zebra/"} className="font-sofia font-bold ">Buy Now</NavLink>
                                    <FaAngleRight className='p-1 ml-2 inline mb-2 text-white group-hover:right-[-5px] right-0 duration-300 relative  rounded-full bg-red-600' size={20} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="flex max-md:flex-col items-center" >
                        <img src="/assets/img/Explore/Multi.webp" className='md:order-1 max-lg:max-w-[55%]' alt="" />
                        <div className="pl-[8%] max-lg:px-[30px] max-md:text-center">
                            <h3 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[37px]  text-[#E40C13] leading-[1.1]'>Can’t Decide? Try our <span className='font-turbinado text-[63px] max-[1200px]:text-[40px] max-lg:text-[36px] max-md:text-[45px] text-[#613223]'>Premium</span> Mini Cone Assortment.</h3>
                            <p className='max-lg:text-[14px] py-2 leading-[1.6] font-sofia'>Savor the exquisite taste of gourmet popcorn, elegantly packaged in mini cones. Elevate your snacking with our irresistible gourmet popcorn collection.</p>
                            <div className="my-2"><NavLink to={"/shop/product/mini-cones-premium-assortment"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] font-sofia font-bold hover:bg-[#a7002f] group-hover:scale-x-110 md:py-3 text-[#fff] bg-[#E40C13] py-2 px-8 max-md:px-12 max-md:mx-auto duration-300'><span className='group-hover:scale-x-90 duration-300'>Buy Now</span> <FaArrowRightLong /></button></NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex max-w-[1180px] mx-auto ">
                <div className="pl-[30px] md:max-w-[400px] mt-20 md:max-h-[200px] min-[1200px]:max-h-[180px] ">
                    <h3 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#E22733] leading-[1.2]'>Spook-tacular Reviews</h3>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <p className='text-[19px] max-lg:text-[17px] max-md:text-[19px] text-[#613223] font-sofia'>Unmask the Best Halloween Delights</p>
                </div>
                <div className="absolute  max-md:relative right-0 max-md:left-[-5vw] max-[550px]:left-0 duration-300 md:w-[50%]">
                    <div className="rounded-ss-[10rem] max-md:rounded-ss-[7rem] bg-[#E7730D] max-md:py-16  max-md:w-full duration-150">
                        <div className="max-md:pl-[20%] py-40 max-[1200px]:py-20 px-20 min-[1200px]:max-w-[580px]  max-md:py-0">
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#613223]'></div>
                            <p className='text-[25px] max-lg:text-[22px] leading-[1.2] text-white'>What monsters say about our products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] mx-auto">
                <div className="max-[980px]:max-w-[600px] max-md:hidden ">
                    <div className="mt-32 max-lg:mt-12 grid grid-cols-4 max-lg:grid-cols-3 max-[980px]:grid-cols-2    gap-x-10 px-[30px]">
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal1.webp" alt="" />

                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel Corn Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Luna</span>
                                    <span className='lg:h-[120px] font-[17px] opacity-70 text-[#612223]'>Popcorn, my kind of howlin' good snack! It's got that crunch I crave between moonlit hunts. Who needs bones when you've got kernels? #SheWolfSnack</span>
                                </div>
                            </NavLink>

                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/kettle-corn-mini-cone-popcorn"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Hal2.webp" alt="" />

                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Kettle Corn Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Frank</span>
                                    <span className='lg:h-[120px] font-[17px] opacity-70 text-[#612223]'>Delicious popcorn, electrifying taste! Bolts of flavor shock my senses. A monster-sized treat for my reanimated cravings. #FrankenYum</span>
                                </div>
                            </NavLink>


                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal3.webp" alt="" />

                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Zebra® Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Drac</span>
                                    <span className='lg:h-[120px] font-[17px] opacity-70 text-[#612223]'>Trick or treat? More like treat or treat. This popcorn's so fangtastic, it's a vamp's dream. #PopcornVampireTreat</span>
                                </div>
                            </NavLink>


                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/cheddar-cheese-mini-cone-popcorn"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal4.webp" alt="" />
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Cheddar Cheese Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Morgana Spellcaster</span>
                                    <span className='lg:h-[120px] font-[17px] opacity-70 text-[#612223]'>This popcorn's spellbinding. Perfect for brewing up movie night magic. It's so bewitchingly tasty, I almost traded my broomstick. #WitchyMunchies</span>
                                </div>
                            </NavLink>


                        </div>

                    </div>
                </div>
                <div className="max-md:block hidden">
                    <HallowenSlider />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hallowen