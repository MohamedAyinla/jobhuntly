import { HiArrowRight } from 'react-icons/hi';
// import React from 'react';

import React from "react";

// import ReactSVG from 'react-svg';
interface CategoryProps {
    name: string;
    numJob: number;
    svg: React.ReactNode;
  }
function Category(props: CategoryProps) {
    const {name, numJob, svg} = props;

    return (
        <div className="flex items-center p-4 border border-[#D6DDEB] gap-x-4">
                <span className='flex items-center justify-center'>
                    { svg }
                </span>
                <div className="flex flex-col w-full">
                    <p className="text-[#25324b] text-[20px] font-clashSemiBold"> { name } </p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[#515B6F] text-[20px] font-normal">{numJob} jobs available</p>
                        <HiArrowRight color='#25324b' size={24}/>
                    </div>
                </div>
        </div>
    );
  }
  
  export default Category;
  