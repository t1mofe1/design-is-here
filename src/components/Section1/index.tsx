import Arrow from 'common/Arrow';
import { Rotation } from 'utils/constants';
import { StyledHeader, StyledHeaderContainer, StyledHeaderDescription, StyledHeaderImage, StyledHeaderTitle } from './styles';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledHeaderTitle>
					<span>Дизайн</span>
					<span>
						Ну Вот Же Он <Arrow rotate={Rotation.Down_Right} />
					</span>
				</StyledHeaderTitle>
				<StyledHeaderDescription>Я разрабоатываю современные и стильные сайты для вашего бизнеса.</StyledHeaderDescription>
			</StyledHeaderContainer>
			<StyledHeaderContainer>
				<StyledHeaderImage src={'/header_img.jpg'} alt={'Header image'} />
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
