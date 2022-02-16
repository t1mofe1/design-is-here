import React from 'react';
import { StyledLink } from './styles';

type LinkProps = React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
	dataHref?: string;
};

export default function Link({ children, dataHref, ...props }: LinkProps) {
	const linkRef = React.useRef<HTMLAnchorElement>(null);

	const hrefElement = dataHref && document.querySelector(dataHref);

	if (linkRef.current && hrefElement) {
		linkRef.current.addEventListener('click', () => {
			hrefElement.scrollIntoView({ behavior: 'smooth' });
		});
	}

	return (
		<StyledLink {...props} ref={linkRef}>
			{children}
		</StyledLink>
	);
}
