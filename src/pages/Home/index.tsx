import { StyledContainer } from './styles';
import MaxWidthContext from 'context/maxWidthContext';
import Header from 'components/Header';

const Home = () => {
	return (
		<MaxWidthContext.Provider value={'1200px'}>
			<StyledContainer>
				<Header />
				{/* <ScrollToTop /> */}
				{/* <ServicesSection />
			<PortfolioSection /> */}
			</StyledContainer>
		</MaxWidthContext.Provider>
	);
};

export default Home;
