import Text from 'common/Text';
import config from 'config';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	margin: 0 auto;

	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 2em 3em;

	z-index: 1;

	transition: transform 0.3s;

	@media screen and (min-width: 768px) {
		background-color: transparent;
		box-shadow: none;
		transition: background-color 0.5s ease 0s;
	}
`;

export const NavMenu = styled.nav`
	display: flex;

	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100vh;

	background-color: ${config.colors.light_gray};
	color: ${config.colors.pink};

	transform: translateY(-100%);
	transition: transform 0.6s ease 0s;

	&.show {
		transform: translateY(0);
	}

	@media screen and (min-width: 768px) {
		position: unset;
		width: unset;
		height: unset;
		background-color: unset;
		transform: unset;

		color: ${config.colors.black};

		flex: 1 1 auto;

		justify-content: flex-start;
		flex-direction: row;
	}
`;

export const NavMenuItem = styled.div`
	padding: 5px 14px;
`;

export const HeaderAuthorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeaderAuthorText = styled(Text)`
	padding: 5px 14px;
`;
