import { BurgerContainer } from './styles';
import { useRef, useState } from 'react';

export type BurgerOnClickProps = {
	burger: HTMLButtonElement;
	oldState: BurgerState;
	newState: BurgerState;
};

type BurgerProps = {
	onClick?: ({}: BurgerOnClickProps) => any;
};

export enum BurgerState {
	Initalized = 'initialized',
	Opened = 'opened',
	Closed = 'closed',
}

export function Burger({ onClick }: BurgerProps) {
	const burgerRef = useRef<HTMLButtonElement>(null);

	const [burgerState, setBurgerState] = useState<BurgerState>(BurgerState.Initalized);

	const handleClick = () => {
		if (!burgerRef.current) return;

		const oldBurgerState = burgerState;
		const newBurgerState = burgerState === BurgerState.Opened ? BurgerState.Closed : BurgerState.Opened;

		setBurgerState(newBurgerState);

		onClick?.({
			burger: burgerRef.current,
			oldState: oldBurgerState,
			newState: newBurgerState,
		});
	};

	return (
		<>
			<BurgerContainer onClick={handleClick} state={burgerState} ref={burgerRef}>
				<div />
				<div />
				<div />
			</BurgerContainer>
		</>
	);
}
