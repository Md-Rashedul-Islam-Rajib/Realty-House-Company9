
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Estate from '../components/Estate';

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
        </div>
    );
};

export default Home;








