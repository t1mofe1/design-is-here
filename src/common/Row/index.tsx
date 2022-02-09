import { RowProps } from 'common/types';
import { StyledRow } from './styles';

const Row = ({ children, ...rest }: RowProps) => {
	return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
