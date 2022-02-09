import { useState } from 'react';

import Container from 'common/Container';
import { SvgIcon } from 'common/SvgIcon';
import { Button } from 'common/Button';

import { HeaderSection, Burger, LogoContainer, NotHidden, Menu, CustomNavLinkSmall, Label, Span } from './styles';
import Row from 'common/Row';
import Col from 'common/Col';
import { JustifyContentEnum } from 'common/types';

const Header = ({ t }: any) => {
	const MenuItem = () => {
		const scrollTo = (id: string) => {
			const element = document.getElementById(id) as HTMLDivElement;
			element.scrollIntoView({
				behavior: 'smooth',
			});
		};

		return (
			<>
				<CustomNavLinkSmall onClick={() => scrollTo('about')}>{/* <Span>{t?.('About')}</Span> */}</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('portfolio')}>{/* <Span>{t?.('Portfolio')}</Span> */}</CustomNavLinkSmall>
				<CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('contact')}>
					<Span>{/* <Button>{t?.('Contact')}</Button> */}</Span>
				</CustomNavLinkSmall>
			</>
		);
	};

	return (
		<HeaderSection>
			<Container>
				<Row justifyContent={JustifyContentEnum.spaceBetween}>
					<LogoContainer to="/" aria-label="Homepage">
						{/* <SvgIcon src="logo.svg" width="101px" height="64px" /> */}
					</LogoContainer>
					<NotHidden>
						<MenuItem />
					</NotHidden>
					{/* <Burger onClick={showDrawer}>
					<Outline />
					</Burger> */}
				</Row>
				{/* <Drawer closable={false} visible={visible} onClose={onClose}>
					<Col style={{ marginBottom: '2.5rem' }}>
						<Label onClick={onClose}>
							<Col span={12}>
								<Menu>Menu</Menu>
							</Col>
							<Col span={12}>
								<Outline />
							</Col>
						</Label>
					</Col>
					<MenuItem />
				</Drawer> */}
			</Container>
		</HeaderSection>
	);
};

export default Header;
