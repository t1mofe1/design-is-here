import React from 'react';
import { StyledText } from './styles';

type TextProps = {
	style?: React.CSSProperties;
	children: React.ReactNode;
};

export default function Text({ style, children }: TextProps) {
	return <StyledText style={style}>{children}</StyledText>;
}
