import Row from 'common/Row';
import { AlignItemsEnum, JustifyContentEnum } from 'common/types';
import styled from 'styled-components';

type JustifyAlign = {
	justifyContent?: JustifyContentEnum;
	alignItems?: AlignItemsEnum;
};

export const StyledNavbar = styled.nav<JustifyAlign>`
	display: flex;
	align-items: center;
	justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
	padding: 20px;
	background-color: transparent;

	width: 100%;
`;

export const StyledNavMenu = styled(Row)`
	gap: 4em;
`;

export const StyledNavMenuItem = styled.div<JustifyAlign>`
	padding: 5px 14px;
`;
