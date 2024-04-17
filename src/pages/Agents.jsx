
import { useLoaderData } from 'react-router-dom';
import Agent from '../components/Agent';
import 'animate.css';

const Agents = () => {
    const agents = useLoaderData();
    return (
        <div className='text-center animate__animated animate__slideInRight'>
            <h2 className='text-4xl font-bold mt-6'>Meet Our Agents</h2>
            <div className='grid grid-cols-1 gap-8 justify-center'>
                {
                    agents.map((agent,idx)=><Agent key={idx} agent={agent}></Agent>)
                }
            </div>
        </div>
    );
};

export default Agents;