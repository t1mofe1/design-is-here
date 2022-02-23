import styled from 'styled-components';

import { ReactComponent as Logo } from 'assets/logo.svg';

export const Section = styled('section')`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100%;

	flex-direction: column;

	column-gap: 2em;

	padding: 6em 0em 0em;

	@media screen and (min-width: 576px) {
		flex-direction: row;

		padding-bottom: 6em;
	}
`;

export const SectionContainer = styled('div')`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	flex-direction: column;

	@media screen and (min-width: 576px) {
		max-width: 45%;
	}

	row-gap: 2.5em;
`;

export const StyledLogo = styled(Logo)``;

export const SectionTitle = styled('h1')``;

export const SectionDescription = styled('p')`
	font-family: Golca;
	font-weight: 300;
	font-size: 24px;
`;

export const SectionImageContainer = styled(SectionContainer)`
	flex: 1 1 auto;

	width: 100%;
	max-width: unset;

	margin-top: 2.5em;
	@media screen and (min-width: 576px) {
		margin-top: 0;
	}

	@media screen and (min-width: 576px) {
		width: unset;
	}
`;

export const SectionImage = styled('img')`
	width: 100%;
`;
