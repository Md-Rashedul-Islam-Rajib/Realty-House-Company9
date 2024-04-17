import icon from '../../public/logo-icon.png'
import 'animate.css';


const Facts = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-center font-semibold'>Fun Facts</h2>

            <div className=' grid gap-6 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 mt-8'>
 
            <div className='flex justify-center items-center animate__animated animate__slideInRight'>
                <div className='p-4'>
                <div className='flex justify-end'><img className='w-40  ' src={icon} alt="" /></div>
                <div><h2 className='text-end text-5xl text-[#5c5c5c]'>1.397.000</h2></div>
                <div><p className='text-end text-sm font-medium text-[#008B9A]'>PROPERTIES SOLD</p></div>
                </div>
                </div>

                
                <div className='flex justify-center items-center animate__animated animate__slideInRight animate__delay-2s'>
                <div className='p-4'>
                <div className='flex justify-end'><img className='w-40  ' src={icon} alt="" /></div>
                <div><h2 className='text-end text-5xl text-[#5c5c5c]'>8.432.547</h2></div>
                <div><p className='text-end text-sm font-medium text-[#008B9A]'>HAPPY CLIENTS</p></div>
                </div>
                </div>
                

                <div className='flex justify-center items-center animate__animated animate__slideInRight animate__delay-3s'>
                <div className='p-4'>
                <div className='flex justify-end'><img className='w-40  ' src={icon} alt="" /></div>
                <div><h2 className='text-end text-5xl text-[#5c5c5c]'>1.473.789</h2></div>
                <div><p className='text-end text-sm font-medium text-[#008B9A]'>LOCATIONS</p></div>
                </div>
                </div>

                <div className='flex justify-center items-center animate__animated animate__slideInRight animate__delay-4s'>
                <div className='p-4'>
                <div className='flex justify-end'><img className='w-40  ' src={icon} alt="" /></div>
                <div><h2 className='text-end text-5xl text-[#5c5c5c]'>2.547</h2></div>
                <div><p className='text-end text-sm font-medium text-[#008B9A]'>PROFESSIONAL AGENTS</p></div>
                </div>
                </div>
            </div>
            </div>
            
    );
};

export default Facts;