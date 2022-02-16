import { useEffect, useState } from 'react';
import { ScrollUpContainer } from './styles';
import { getScroll } from '../utils/getWindow';

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = (event: any) => {
		const offsetFromTop = getScroll(event.target, true);

		if (!showScroll && offsetFromTop > 350) {
			setShowScroll(true);
		} else if (offsetFromTop <= 350) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);

		return () => window.removeEventListener('scroll', checkScrollTop);
	}, []);

	const scrollUp = () => {
		const element = document.getElementById('#root')?.children[0].children[0] as HTMLDivElement;
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	};

	return (
		<ScrollUpContainer onClick={scrollUp} show={showScroll}>
			<img src="/scroll-top.svg" width="20px" height="20px" />
		</ScrollUpContainer>
	);
};

export default ScrollToTop;
