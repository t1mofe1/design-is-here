import ServiceCard from 'components/ServiceCard';
import { useState } from 'react';
import { Section, SectionTitle, ServicesContainer } from './styles';
import config from 'config';

export default function ServicesSection() {
	const [activeCard, setActiveCard] = useState<number | null>(null);

	return (
		<Section>
			<SectionTitle>#Услуги</SectionTitle>
			<ServicesContainer>
				{config.services.map(({ title, description }, i) => (
					<ServiceCard key={i} title={title} description={description} active={activeCard === i} onClick={() => setActiveCard((prevCard) => (prevCard === i ? null : i))} />
				))}
			</ServicesContainer>
		</Section>
	);
}
