export enum Colors {
	Pink = '#FF197A',
	Black = '#000',
}

export enum Rotation {
	Up = '45deg',
	Down = '-135deg',
	Left = '-45deg',
	Right = '135deg',

	Up_Left = '0deg',
	Up_Right = '90deg',
	Down_Left = '-90deg',
	Down_Right = '180deg',
}

export type ArrowProps = {
	color?: Colors;
	rotate?: Rotation;
};

const Arrow = ({ color, rotate }: ArrowProps) => {
	if (!color) color = Colors.Black;
	if (!rotate) rotate = Rotation.Up_Left;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 43" fill="none">
			<path style={{ transform: `rotate(${rotate}) translateY(-45px)` }} d="M40.0876 4.00004L4.02114 4.00004L4.02114 38.5977" stroke={color} strokeWidth="8" strokeMiterlimit="10" />
			<path style={{ transform: `rotate(${rotate}) translateY(-45px)` }} d="M41 40L4 4" stroke={color} strokeWidth="8" strokeMiterlimit="10" />
		</svg>
	);
};

export default Arrow;
