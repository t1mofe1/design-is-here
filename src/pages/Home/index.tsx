import { StyledContainer } from './styles';
import MaxWidthContext from 'context/maxWidthContext';
import Header from 'components/Header';
import Section1 from 'components/Section1';

const Home = () => {
	return (
		<MaxWidthContext.Provider value={'1300px'}>
			<StyledContainer as={'main'}>
				<Header />
				<Section1 />
				{/* <ScrollToTop /> */}
				{/* <ServicesSection />
			<PortfolioSection /> */}
			</StyledContainer>
		</MaxWidthContext.Provider>
	);
};

export default Home;
