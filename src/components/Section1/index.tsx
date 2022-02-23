import { Section, SectionContainer, SectionDescription, SectionImage, SectionImageContainer, StyledLogo } from './styles';

type Section1Props = {};

export default function Section1({}: Section1Props) {
	return (
		<Section>
			<SectionContainer>
				<StyledLogo />
				<SectionDescription>Я разрабатываю современные и стильные сайты для вашего бизнеса.</SectionDescription>
			</SectionContainer>
			<SectionImageContainer>
				<SectionImage src={'/design_is_here.gif'} alt={'Design is here gif'} />
			</SectionImageContainer>
		</Section>
	);
}
