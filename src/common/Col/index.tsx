import { ColProps } from 'common/types';
import { StyledCol } from './styles';

const Col = ({ children, ...rest }: ColProps) => {
	return <StyledCol {...rest}>{children}</StyledCol>;
};

export default Col;
