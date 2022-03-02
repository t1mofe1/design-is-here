import Arrow from 'common/Arrow';
import { Rotation, Colors } from 'utils/constants';
import { ServiceCardContainer, ServiceCardTop, ServiceCardTitle, ServiceCardDescription } from './styles';

type ServiceCardProps = {
	title: string;
	description: string;
	active?: boolean;
	onClick?: () => void;
};

export default function ServiceCard({ title, description, active, onClick }: ServiceCardProps) {
	return (
		<ServiceCardContainer onClick={onClick} isActive={active}>
			<ServiceCardTop>
				<ServiceCardTitle isActive={active}>{title}</ServiceCardTitle>
				<Arrow rotate={active ? Rotation.Down_Left : Rotation.Down_Right} color={active ? Colors.Pink : Colors.Black} />
			</ServiceCardTop>
			<ServiceCardDescription isActive={active}>{description}</ServiceCardDescription>
		</ServiceCardContainer>
	);
}
