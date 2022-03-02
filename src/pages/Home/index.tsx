import { StyledContainer } from './styles';
import MaxWidthContext from 'context/maxWidthContext';
import Header from 'components/Header';
import Section1 from 'components/Section1';
import ServicesSection from 'components/ServicesSection';

const Home = () => {
	return (
		<MaxWidthContext.Provider value={'1300px'}>
			<StyledContainer style={{ maxWidth: '1300px' }} as={'main'}>
				<Header />
				<Section1 />
				<ServicesSection />
				{/* <ScrollToTop /> */}
				{/* <PortfolioSection /> */}
			</StyledContainer>
		</MaxWidthContext.Provider>
	);
};

export default Home;
