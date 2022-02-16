import { StyledContainer } from './styles';
import { ContainerProps } from 'common/types';

const Container = ({ children, style }: ContainerProps) => <StyledContainer style={style}>{children}</StyledContainer>;

export default Container;
