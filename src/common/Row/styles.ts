import styled from 'styled-components';
import { RowProps } from 'common/types';

export const StyledRow = styled.div<RowProps>`
	display: flex;
	flex-flow: row wrap;

	&::before,
	&::after {
		display: flex;
	}

	flex-wrap: ${({ wrap }) => wrap || 'wrap'};

	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'stretch'};
`;
