import styled from 'styled-components';

export const StyledMaxWidth = styled.div<{ maxWidth: string }>`
	display: flex;

	justify-content: center;
	align-items: center;

	flex-direction: column;

	max-width: ${({ maxWidth }) => maxWidth};
	width: 100%;
`;
