import React from 'react';

export type ContainerProps = {
	border?: boolean;
	children: React.ReactNode;
};

export type ButtonProps = {
	color?: string;
	fixedWidth?: boolean;
	name?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export type SvgIconProps = {
	src: string;
	width: string;
	height: string;
};

export type InputProps = {
	name: string;
	placeholder: string;
	t?: any;
	type?: string;
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type validateProps = {
	name: string;
	message: string;
	email: string;
};

export enum JustifyContentEnum {
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	center = 'center',
	spaceBetween = 'space-between',
	spaceAround = 'space-around',
	spaceEvenly = 'space-evenly',
	inherit = 'inherit',
	initial = 'initial',
	unset = 'unset',
}

export enum AlignItemsEnum {
	stretch = 'stretch',
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	center = 'center',
	baseline = 'baseline',
	inherit = 'inherit',
	initial = 'initial',
	unset = 'unset',
}

export const WrapEnum = {
	wrap: 'wrap',
	nowrap: 'nowrap',
	wrapReverse: 'wrap-reverse',
	initial: 'initial',
	inherit: 'inherit',
};
export type WrapEnum = typeof WrapEnum[keyof typeof WrapEnum];

export type RowProps = {
	wrap?: WrapEnum;
	justifyContent?: JustifyContentEnum;
	alignItems?: AlignItemsEnum;
	children: React.ReactNode;
	style?: React.CSSProperties;
	id?: string;
};

export type ColProps = {
	children: React.ReactNode;
};
