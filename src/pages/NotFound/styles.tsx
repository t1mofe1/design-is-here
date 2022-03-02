import styled from 'styled-components';
import config from 'config';

export const NotFoundBackground = styled.img`
	position: absolute;

	left: 0;
	top: 0;

	width: 100%;
	max-height: 100vh;

	z-index: 0;
`;

export const NotFoundParticle = styled.div`
	position: absolute;

	left: 0;
	top: 0;

	width: 20vh;
	height: 20vh;

	background: rgba(255, 25, 122, 0.75);
	filter: blur(60px);

	z-index: 0;

	transition: left 3s ease-in-out, top 3s ease-in-out;
	transform: translateZ(0); // to enable hardware acceleration
`;

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;

	padding: 0 1rem;
`;

export const NotFoundTitle = styled.h1`
	font-family: Micra;
	font-size: 7.5rem;

	margin-top: 0;
	margin-bottom: clamp(0px, 5vw, 75px);

	position: relative;

	&::before,
	&::after {
		position: absolute;
		top: 0;
		left: 0;

		content: '#404';
		opacity: 0.9;
	}

	&.animate {
		animation: glitch 1s linear;

		&::before {
			transform: translate(-5px, -5px);
			filter: drop-shadow(2px 2px 2px rgba(35, 184, 197, 1));
			animation: noise-anim 0.5s linear alternate-reverse;
		}
		&::after {
			transform: translate(5px, 5px);
			filter: drop-shadow(2px 2px 2px rgba(274, 27, 27, 1));
			animation: noise-anim-2 1s linear alternate-reverse;
		}
	}

	// #region keyframes
	@keyframes glitch {
		0%,
		20%,
		33%,
		60%,
		64%,
		66%,
		69%,
		73%,
		75%,
		90%,
		93%,
		100% {
			transform: skew(0deg);
		}
		21%,
		81% {
			transform: skew(30deg, 0deg);
		}
		22%,
		82% {
			transform: skew(-30deg, 0deg);
		}
		61% {
			transform: skew(35deg);
		}
		62% {
			transform: skew(-15deg, -8deg);
		}
		65% {
			transform: skew(15deg, -8deg);
		}
		70% {
			transform: skew(-65deg);
		}
		74% {
			transform: skew(15deg, -15deg);
		}
	}

	@keyframes noise-anim {
		0% {
			clip: rect(77px, 9999px, 6px, 0);
		}
		5% {
			clip: rect(65px, 9999px, 70px, 0);
		}
		10% {
			clip: rect(82px, 9999px, 82px, 0);
		}
		15% {
			clip: rect(32px, 9999px, 35px, 0);
		}
		20% {
			clip: rect(31px, 9999px, 49px, 0);
		}
		25% {
			clip: rect(18px, 9999px, 46px, 0);
		}
		30% {
			clip: rect(94px, 9999px, 64px, 0);
		}
		35% {
			clip: rect(69px, 9999px, 31px, 0);
		}
		40% {
			clip: rect(6px, 9999px, 72px, 0);
		}
		45% {
			clip: rect(25px, 9999px, 35px, 0);
		}
		50% {
			clip: rect(82px, 9999px, 26px, 0);
		}
		55% {
			clip: rect(7px, 9999px, 92px, 0);
		}
		60% {
			clip: rect(54px, 9999px, 30px, 0);
		}
		65% {
			clip: rect(86px, 9999px, 90px, 0);
		}
		70% {
			clip: rect(38px, 9999px, 65px, 0);
		}
		75% {
			clip: rect(41px, 9999px, 66px, 0);
		}
		80% {
			clip: rect(31px, 9999px, 37px, 0);
		}
		85% {
			clip: rect(8px, 9999px, 12px, 0);
		}
		90% {
			clip: rect(50px, 9999px, 69px, 0);
		}
		95% {
			clip: rect(7px, 9999px, 42px, 0);
		}
		100% {
			clip: rect(14px, 9999px, 57px, 0);
		}
	}
	@keyframes noise-anim-2 {
		0% {
			clip: rect(18px, 9999px, 13px, 0);
		}
		5% {
			clip: rect(74px, 9999px, 51px, 0);
		}
		10% {
			clip: rect(33px, 9999px, 65px, 0);
		}
		15% {
			clip: rect(64px, 9999px, 66px, 0);
		}
		20% {
			clip: rect(75px, 9999px, 6px, 0);
		}
		25% {
			clip: rect(40px, 9999px, 49px, 0);
		}
		30% {
			clip: rect(71px, 9999px, 1px, 0);
		}
		35% {
			clip: rect(42px, 9999px, 73px, 0);
		}
		40% {
			clip: rect(92px, 9999px, 57px, 0);
		}
		45% {
			clip: rect(4px, 9999px, 33px, 0);
		}
		50% {
			clip: rect(4px, 9999px, 34px, 0);
		}
		55% {
			clip: rect(49px, 9999px, 25px, 0);
		}
		60% {
			clip: rect(24px, 9999px, 44px, 0);
		}
		65% {
			clip: rect(31px, 9999px, 99px, 0);
		}
		70% {
			clip: rect(54px, 9999px, 83px, 0);
		}
		75% {
			clip: rect(57px, 9999px, 97px, 0);
		}
		80% {
			clip: rect(3px, 9999px, 15px, 0);
		}
		85% {
			clip: rect(84px, 9999px, 34px, 0);
		}
		90% {
			clip: rect(100px, 9999px, 88px, 0);
		}
		95% {
			clip: rect(91px, 9999px, 59px, 0);
		}
		100% {
			clip: rect(10px, 9999px, 87px, 0);
		}
	}
	// #endregion
`;

export const NotFoundDescription = styled.span`
	font-family: Golca;
	font-weight: 300;

	font-size: 2rem;

	text-align: center;
`;

export const NotFoundLink = styled.div`
	font-family: Micra;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	margin-top: 25px;

	> span {
		font-size: 2rem;

		white-space: nowrap;
	}

	> svg {
		height: 100%;

		margin-left: 10px;
	}

	&::after {
		position: absolute;
		bottom: calc(clamp(1px, 1vw, 5px) * -1);

		content: '';

		display: inline-block;

		margin: auto;
		height: clamp(1px, 1vw, 5px);
		background-color: transparent;
		width: 0%;
		transition: width 0.2s ease, background-color 0.4s ease;
	}
	&:hover::after {
		background-color: ${config.colors.pink};
		width: 100%;
	}
`;
