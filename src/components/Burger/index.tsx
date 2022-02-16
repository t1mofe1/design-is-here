import { Colors } from 'utils/constants';
import { BurgerContainer, BurgerSvg } from './styles';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import config from 'config';

type BurgerProps = {
	bgColor?: CSSProperties['backgroundColor'];
	color?: Colors;
	breakpoint?: CSSProperties['maxWidth'];
	onOpen?: (burger: HTMLButtonElement) => void;
	onClose?: (burger: HTMLButtonElement) => void;
	onClick?: (burger: HTMLButtonElement, opened: boolean) => void;
};

// function openedBurger() {
// 	return (
// 		<OpenedBurger
// 	)
// }

export function Burger({ color, bgColor, breakpoint, onOpen, onClose, onClick }: BurgerProps) {
	if (!bgColor) bgColor = 'transparent';
	if (!color) color = Colors.Pink;
	if (!breakpoint) breakpoint = '768px';

	// const burgerRef = useRef<HTMLButtonElement>(null);
	// const burgerLinesRef = useRef<(HTMLSpanElement | null)[]>([]);

	// const [burgerOpened, setBurgerOpened] = useState<boolean>(false);

	// const handleClick = useCallback(() => {
	// 	if (!burgerRef.current) return;

	// 	burgerLinesRef.current?.forEach((line) => line?.classList[burgerOpened ? 'add' : 'remove']('active'));

	// 	onClick?.(burgerRef.current, burgerOpened);

	// 	if (burgerOpened) onClose?.(burgerRef.current);
	// 	else onOpen?.(burgerRef.current);

	// 	setBurgerOpened(!burgerOpened);
	// }, [onClose, onOpen, burgerRef]);

	return (
		<>
			<BurgerContainer>
				<BurgerSvg
					width="100%"
					height="100%"
					viewBox="0 0 70 70"
					// xmlns="http://www.w3.org/2000/svg"
					// xmlnsXlink="http://www.w3.org/1999/xlink"
					fill="none"
				>
					<path d="M70 0H0V14H70V0Z"></path>
					<path d="M70 28H0V42H70V28Z" fill={config.colors.pink}></path>
					<path d="M35 56H0V70H35V56Z"></path>
				</BurgerSvg>
			</BurgerContainer>
		</>
	);
}
