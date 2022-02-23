import { Section, SectionContainer, SectionTitle, ServiceCard, ServiceCardDescription, ServiceCardTitle, ServicesContainer } from './styles';

export default function ServicesSection() {
	return (
		<Section>
			<SectionContainer>
				<SectionTitle>#Услуги</SectionTitle>
				<ServicesContainer>
					<ServiceCard>
						<ServiceCardTitle>Дизайн сайта в Figma</ServiceCardTitle>
						<ServiceCardDescription>Дизайн сайта в Figma</ServiceCardDescription>
					</ServiceCard>
				</ServicesContainer>
			</SectionContainer>
		</Section>
	);
}
