import { Colors, Rotation } from 'utils/constants';
import { StyledPath } from './styles';

export type ArrowProps = {
	color?: Colors;
	rotate?: Rotation;
	onClick?: () => void;
};

const Arrow = ({ color, rotate, onClick }: ArrowProps) => {
	color ??= Colors.Black;
	rotate ??= Rotation.Up_Left;
	onClick ??= () => {};

	return (
		<svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 43" fill="none">
			<StyledPath style={{ transform: `rotate(${rotate})` }} d="M40.0876 4.00004L4.02114 4.00004L4.02114 38.5977" stroke={color} strokeWidth="8" strokeMiterlimit="10" />
			<StyledPath style={{ transform: `rotate(${rotate})` }} d="M41 40L4 4" stroke={color} strokeWidth="8" strokeMiterlimit="10" />
		</svg>
	);
};

export default Arrow;
