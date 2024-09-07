import React from 'react'
import IconBtn from '../components/common/IconBtn';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate=useNavigate();
  return (
  //  <!-- component -->
<div class="lg:px-24  bg-richblack-700 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
 <h1 class="my-2 text-pink-400 font-bold text-3xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p class="my-2 text-pink-400">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <IconBtn
                            onclick={()=>navigate("/")}>
                              Take Me Back
                            </IconBtn>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  );
}

export default Error
