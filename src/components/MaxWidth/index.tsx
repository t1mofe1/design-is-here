import { StyledMaxWidth } from './styles';

type MaxWidthProps = {
	children: React.ReactNode;
	maxWidth: string;
	style?: React.CSSProperties;
};

export default function MaxWidth({ children, maxWidth, style }: MaxWidthProps) {
	return (
		<StyledMaxWidth maxWidth={maxWidth} style={style}>
			{children}
		</StyledMaxWidth>
	);
}
