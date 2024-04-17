
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Estate from '../components/Estate';
import Facts from '../components/Facts';

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Home | Realty House Company</title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
            <Facts></Facts>
        </div>
    );
};

export default Home;








