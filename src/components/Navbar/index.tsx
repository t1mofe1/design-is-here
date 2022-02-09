import { StyledNavbar, StyledNavMenu, StyledNavMenuItem } from './styles';
import Row from 'common/Row';
import { JustifyContentEnum } from 'common/types';
import Text from 'common/Text';
import config from 'config.json';
import MaxWidth from 'components/MaxWidth';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	// const [burger, setBurger] = useState(true);

	// const showBurger = () => {
	// 	setBurger(!(window.innerWidth <= 960));
	// };

	// useEffect(() => {
	// 	showBurger();
	// }, []);

	// window.addEventListener('resize', showBurger);

	return (
		<StyledNavbar justifyContent={JustifyContentEnum.spaceBetween}>
			<MaxWidth maxWidth={'1200px'}>
				{/* <NavbarBurger onClick={handleBurgerClick} /> */}
				<StyledNavMenu justifyContent={JustifyContentEnum.spaceBetween}>
					<StyledNavMenuItem>
						<a href={config.social_links.instagram} target={'_blank'}>
							instagram
						</a>
					</StyledNavMenuItem>
					<StyledNavMenuItem>
						<NavLink className={'active'} to="#portfolio">
							portfolio
						</NavLink>
					</StyledNavMenuItem>
					<StyledNavMenuItem>
						<a href={config.social_links.telegram} target={'_blank'}>
							telegram
						</a>
					</StyledNavMenuItem>
				</StyledNavMenu>
				<Row>
					<Text>blinkova regina</Text>
				</Row>
			</MaxWidth>
		</StyledNavbar>
	);
}
