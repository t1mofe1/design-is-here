import Row from 'common/Row';
import Col from 'common/Col';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';

import { FooterSection, Title, NavLink, Extra, LogoContainer, Para, Large, Chat, Empty, FooterContainer, Language, Label, LanguageSwitch, LanguageSwitchContainer } from './styles';
import { AlignItemsEnum, JustifyContentEnum } from 'common/types';

interface SocialLinkProps {
	href: string;
	src: string;
}

const Footer = ({ t }: any) => {
	const SocialLink = ({ href, src }: SocialLinkProps) => {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
				<SvgIcon src={src} width="25px" height="25px" />
			</a>
		);
	};

	return (
		<>
			<FooterSection>
				<Container>
					<Row justifyContent={JustifyContentEnum.spaceBetween}>
						{/* <Col lg={10} md={10} sm={12} xs={12}>
							<Language>{t('Contact')}</Language>
							<Large to="/">{t('Tell us everything')}</Large>
							<Para>{t(`Do you have any question? Feel free to reach out.`)}</Para>
							<a href="mailto:test@gmail.com">
								<Chat>{t(`Let's Chat`)}</Chat>
							</a>
						</Col> */}
						{/* <Col lg={8} md={8} sm={12} xs={12}>
							<Title>{t('Policy')}</Title>
							<Large to="/" left="true">
								{t('Application Security')}
							</Large>
							<Large left="true" to="/">
								{t('Software Principles')}
							</Large>
						</Col> */}
						{/* <Col lg={6} md={6} sm={12} xs={12}>
							<Empty />
							<Large left="true" to="/">
								{t('Support Center')}
							</Large>
							<Large left="true" to="/">
								{t('Customer Support')}
							</Large>
						</Col> */}
					</Row>
					<Row justifyContent={JustifyContentEnum.spaceBetween}>
						{/* <Col lg={10} md={10} sm={12} xs={12}>
							<Empty />
							<Language>{t('Address')}</Language>
							<Para>Vaablase 51, 11251</Para>
							<Para>Tallinn, Estonia</Para>
						</Col> */}
						{/* <Col lg={8} md={8} sm={12} xs={12}>
							<Title>{t('Company')}</Title>
							<Large left="true" to="/">
								{t('About')}
							</Large>
							<Large left="true" to="/">
								{t('Blog')}
							</Large>
							<Large left="true" to="/">
								{t('Press')}
							</Large>
							<Large left="true" to="/">
								{t('Careers & Culture')}
							</Large>
						</Col> */}
						{/* <Col lg={6} md={6} sm={12} xs={12}>
							<Label htmlFor="select-lang">{t('Language')}</Label>
							<LanguageSwitchContainer>
								<LanguageSwitch>
									<SvgIcon src="united-states.svg" aria-label="homepage" width="30px" height="30px" />
								</LanguageSwitch>
								<LanguageSwitch>
									<SvgIcon src="spain.svg" aria-label="homepage" width="30px" height="30px" />
								</LanguageSwitch>
							</LanguageSwitchContainer>
						</Col> */}
					</Row>
				</Container>
			</FooterSection>
			<Extra>
				<Container border={true}>
					<Row justifyContent={JustifyContentEnum.spaceBetween} alignItems={AlignItemsEnum.center} style={{ paddingTop: '3rem' }}>
						<NavLink to="/">
							<LogoContainer>
								<SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
							</LogoContainer>
						</NavLink>
						<FooterContainer>
							<SocialLink href="https://github.com/t1mofe1" src="github.svg" />
							<SocialLink href="https://twitter.com/t1m0fe1" src="twitter.svg" />
							<SocialLink href="https://www.linkedin.com/in/t1m0fe1/" src="linkedin.svg" />
							<SocialLink href="https://medium.com/@t1m0fe1/" src="medium.svg" />
							<a href="https://www.buymeacoffee.com/t1m0fe1">
								<img
									src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=t1m0fe1&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
									alt="Buy me a pizza"
								/>
							</a>
						</FooterContainer>
					</Row>
				</Container>
			</Extra>
		</>
	);
};

export default Footer;
