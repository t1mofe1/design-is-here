import { JustifyContentEnum } from 'common/types';
import config from 'config';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Link from 'common/Link';
import MaxWidthContext from 'context/maxWidthContext';
import { HeaderAuthorContainer, HeaderAuthorText, HeaderContainer, NavMenu, NavMenuItem } from './styles';
import { Burger } from 'components/Burger';
import { Colors } from 'utils/constants';

export default function Navbar() {
	const maxWidth = useContext(MaxWidthContext);

	const navMenuRef = useRef<HTMLElement>(null);

	function handleBurgerClick(burger: HTMLButtonElement, state: boolean) {
		if (!navMenuRef.current) return;

		navMenuRef.current.classList[state ? 'add' : 'remove']('show');
		document.body.classList[state ? 'add' : 'remove']('lock');
	}

	return (
		<HeaderContainer style={{ maxWidth }}>
			<Burger onClick={handleBurgerClick} color={Colors.Pink} />

			<NavMenu ref={navMenuRef}>
				{config.navbar.links.map(({ name, dataURL, url, newTab }) => (
					<NavMenuItem key={name}>
						<Link dataHref={dataURL} href={url} target={newTab ? '_blank' : undefined}>
							{name}
						</Link>
					</NavMenuItem>
				))}
			</NavMenu>

			<HeaderAuthorContainer>
				<HeaderAuthorText>{config.navbar.author}</HeaderAuthorText>
			</HeaderAuthorContainer>
		</HeaderContainer>
	);
}
