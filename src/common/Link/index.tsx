import { StyledLink } from './styles';

export default function Link({ href, children }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	if (!href) href = '#';

	return <StyledLink href={href}>{children}</StyledLink>;
}
