import styled from 'styled-components';
import config from 'config';
import { BurgerState } from '.';

type BurgerContainerProps = {
	state: BurgerState;
};
export const BurgerContainer = styled.button<BurgerContainerProps>`
	width: 25px;
	height: 25px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	z-index: 9;

	border: none;
	background: transparent;

	cursor: url(/cursor_link.png), pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}

	// #region burger lines
	// #region keyframes
	@keyframes closeT {
		0% {
			transform: translateY(10px) rotate(45deg) scale(1.1);
		}
		50% {
			transform: translateY(10px) rotate(0deg) scale(1.1);
		}
		100% {
			transform: translateY(0px) rotate(0deg);
		}
	}
	@keyframes openT {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(10px) rotate(0deg) scale(1.1);
		}
		100% {
			transform: translateY(10px) rotate(45deg) scale(1.1);
		}
	}
	@keyframes closeM {
		0% {
			width: 0%;
		}
		18% {
			width: 0%;
		}
		20% {
			width: 100%;
		}
		100% {
			width: 100%;
		}
	}
	@keyframes openM {
		0% {
			width: 100%;
		}
		15% {
			width: 100%;
		}
		50% {
			width: 0%;
		}
		100% {
			width: 0%;
		}
	}
	@keyframes closeBtm {
		0% {
			width: 100%;
			transform: translateY(-10px) rotate(-45deg) scale(1.1);
			/* or 135deg */
		}
		50% {
			width: 100%;
			transform: translateY(-10px) rotate(0deg) scale(1.1);
		}
		100% {
			width: 50%;
			transform: translateY(0px) rotate(0deg);
		}
	}
	@keyframes openBtm {
		0% {
			transform: translateY(0px) rotate(0deg);
			width: 50%;
		}
		50% {
			transform: translateY(-10px) rotate(0deg) scale(1.1);
			width: 100%;
		}
		100% {
			transform: translateY(-10px) rotate(-45deg) scale(1.1);
			/* or 135deg */
		}
	}
	// #endregion keyframes

	> div {
		width: 25px;
		height: 5px;

		border-radius: 5px;

		background-color: ${config.colors.black};

		animation-duration: 0.8s;

		&:nth-child(1) {
			// INITIAL STATE
			${({ state }) =>
				state === BurgerState.Opened &&
				`
					transform: translateY(10px) rotate(45deg) scale(1.1);
			`}

			animation-name: ${({ state }) => (state === BurgerState.Initalized ? '' : state === BurgerState.Opened ? `openT` : `closeT`)};
		}
		&:nth-child(2) {
			background-color: ${config.colors.pink};

			// INITIAL STATE
			${({ state }) =>
				state === BurgerState.Opened &&
				`
				width: 0%;
			`}

			animation-name: ${({ state }) => (state === BurgerState.Initalized ? '' : state === BurgerState.Opened ? `openM` : `closeM`)};
		}
		&:nth-child(3) {
			width: 50%;
			transition: width 0.1s;

			// INITIAL STATE
			${({ state }) =>
				state === BurgerState.Opened &&
				`
				width: 100%;
				transform: translateY(-10px) rotate(-45deg) scale(1.1);
			`}

			animation-name: ${({ state }) => (state === BurgerState.Initalized ? '' : state === BurgerState.Opened ? `openBtm` : `closeBtm`)};
		}
	}
	// #endregion burger lines
`;
