import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from 'assets/svg/burger.svg';
import config from 'config';

export const BurgerContainer = styled.button`
	height: 25px;

	z-index: 9;

	border: none;

	cursor: url(/cursor_link.png), pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const BurgerSvg = styled(BurgerIcon)`
	width: 25px;
	height: 25px;

	display: inline-block;

	@media screen and (min-width: 768px) {
		display: none;
	}

	// #region outT
	@keyframes outT {
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
	// #endregion
	// #region inT
	@keyframes inT {
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
	// #endregion
	// #region outBtm
	@keyframes outBtm {
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
	// #endregion
	// #region inBtm
	@keyframes inBtm {
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
	// #endregion
	// #region outM
	@keyframes outM {
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
	// #endregion
	// #region inM
	@keyframes inM {
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
	// #endregion

	path {
		fill: ${config.colors.black};

		animation-duration: 0.8s;
		animation-fill-mode: forwards;

		&:nth-child(1) {
			animation-name: outT;
		}
		&:nth-child(2) {
			animation-name: outM;
			fill: ${config.colors.pink};
		}
		&:nth-child(3) {
			animation-name: outBtm;
		}
	}

	#hamburger.opened {
		path {
			&:nth-child(1) {
				animation-name: inT;
			}
			&:nth-child(2) {
				animation-name: inM;
			}
			&:nth-child(3) {
				animation-name: inBtm;
				transition: width 1.6s;
			}
		}
	}
`;
