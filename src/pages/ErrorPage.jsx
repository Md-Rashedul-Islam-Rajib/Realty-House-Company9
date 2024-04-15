import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col md:flex-row p-10'>
            <img className='md:flex-1 flex h-4/5 w-4/5' src="../../public/Error.png" />
            <div className='md:flex-1 flex flex-col justify-center items-center' >
                <h3 className='text-[180px] font-black text-[#4A5D74]'>404</h3>
                <h3 className='text-5xl font-bold text-[#787878'>Page Not Found</h3>
                <Link className='btn btn-md bg-[#4B5C74] text-[#f4f6f7] mt-4 rounded-3xl' to='/'>Back to the Home </Link>
            </div>
        </div >
    );
};

export default ErrorPage;