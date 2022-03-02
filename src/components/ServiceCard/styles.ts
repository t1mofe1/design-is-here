import config from 'config';
import styled from 'styled-components';

type ActiveProp = {
	isActive?: boolean;
};

export const ServiceCardContainer = styled.div<ActiveProp>`
	width: 100%;

	flex-direction: column;

	background-color: ${config.colors.light_gray};

	margin: 2em 0;

	transition: max-height 0.3s;
	max-height: ${({ isActive }) => (isActive ? '500px' : '36px')};

	cursor: url(/cursor_link.png), pointer;
`;

export const ServiceCardTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	z-index: 1;

	width: 100%;

	> svg {
		height: 36px;
	}
`;

export const ServiceCardTitle = styled.h3<ActiveProp>`
	height: 100%;

	margin-right: auto;

	cursor: url(/cursor_link.png), pointer;

	&::before {
		display: inline-block;
		transform-origin: center;

		content: '>';

		margin-right: 0.1em;

		transition: all 0.2s ease;

		${({ isActive }) => isActive && 'transform: rotate(90deg);'}
		${({ isActive }) => isActive && `color: ${config.colors.pink};`}
	}
`;

export const ServiceCardDescription = styled.p<ActiveProp>`
	z-index: 0;

	padding: 1em 1em 1em 2em;

	transition: transform 0.2s, opacity 0.2s;
	opacity: ${({ isActive }) => Number(isActive)};
	transform: translateY(${({ isActive }) => (isActive ? '0%' : '-100%')});
`;
