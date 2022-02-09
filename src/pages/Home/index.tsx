import Arrow, { Rotation } from 'common/Arrow';
import Container from 'common/Container';
import ScrollToTop from 'common/ScrollToTop';
import Header from 'components/Header';
import MaxWidth from 'components/MaxWidth';
import Navbar from 'components/Navbar';

const Home = () => {
	return (
		<MaxWidth maxWidth={'1200px'} style={{ margin: '0 50px' }}>
			<Container>
				{/* <ScrollToTop /> */}
				<Navbar />
				{/* <Header /> */}
				{/* <ServicesSection />
			<PortfolioSection /> */}
			</Container>
		</MaxWidth>
	);
};

export default Home;
