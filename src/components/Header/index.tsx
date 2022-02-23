import { JustifyContentEnum } from 'common/types';
import config from 'config';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'common/Link';
import MaxWidthContext from 'context/maxWidthContext';
import { HeaderAuthorContainer, HeaderAuthorText, HeaderContainer, NavMenu, NavMenuItem } from './styles';
import { Burger, BurgerOnClickProps, BurgerState } from 'components/Burger';
import { Colors } from 'utils/constants';

export default function Header() {
	const maxWidth = useContext(MaxWidthContext);

	const headerRef = useRef<HTMLElement>(null);
	const navMenuRef = useRef<HTMLElement>(null);

	const handleBurgerClick = useCallback(({ newState }: BurgerOnClickProps) => {
		if (!navMenuRef.current) return;

		navMenuRef.current.classList[newState === BurgerState.Opened ? 'add' : 'remove']('show');
		document.body.classList[newState === BurgerState.Opened ? 'add' : 'remove']('lock');
	}, []);

	useEffect(() => {
		/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

		let prevScrollpos = window.pageYOffset;

		function scrollHandler() {
			if (!headerRef.current) return;

			const { pageYOffset: currentScrollPos } = window;

			if (prevScrollpos > currentScrollPos) {
				headerRef.current.style.transform = '';
			} else {
				headerRef.current.style.transform = 'translateY(-100%)';
			}

			prevScrollpos = currentScrollPos;
		}

		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<HeaderContainer ref={headerRef} style={{ maxWidth }}>
			<Burger onClick={handleBurgerClick} />

			<NavMenu ref={navMenuRef}>
				{useMemo(
					() =>
						config.navbar.links.map(({ name, dataURL, url, newTab }) => (
							<NavMenuItem key={name}>
								<Link dataHref={dataURL} href={url} target={newTab ? '_blank' : undefined}>
									{name}
								</Link>
							</NavMenuItem>
						)),
					[],
				)}
			</NavMenu>

			<HeaderAuthorContainer>
				<HeaderAuthorText>{config.navbar.author}</HeaderAuthorText>
			</HeaderAuthorContainer>
		</HeaderContainer>
	);
}
