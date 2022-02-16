import Text from 'common/Text';
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

	padding: 2em 1em;

	z-index: 1;

	@media screen and (min-width: 768px) {
		background-color: transparent;
		box-shadow: none;
		transition: background-color 0.5s ease 0s;
	}

	@media screen and (min-width: 576px) {
		padding: 2em 3em;
	}
`;

export const NavMenu = styled.nav`
	display: flex;

	flex: 1 1 auto;
	justify-content: flex-start;
	align-items: center;
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
