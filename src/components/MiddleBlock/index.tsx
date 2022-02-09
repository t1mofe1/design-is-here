import Row from 'common/Row';
import Col from 'common/Col';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import { MiddleBlockSection, Content, ContentWrapper } from './styles';
import { JustifyContentEnum, AlignItemsEnum } from 'common/types';

interface MiddleBlockProps {
	title: string;
	content: string;
	button: string;
	t?: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<MiddleBlockSection>
			<Slide direction="up">
				<Row justifyContent={JustifyContentEnum.center} alignItems={AlignItemsEnum.center}>
					<ContentWrapper>
						{/* <Col lg={24} md={24} sm={24} xs={24}>
							<h6>{t(title)}</h6>
							<Content>{t(content)}</Content>
							{button && (
								<Button name="submit" onClick={() => scrollTo('mission')}>
									{t(button)}
								</Button>
							)}
						</Col> */}
					</ContentWrapper>
				</Row>
			</Slide>
		</MiddleBlockSection>
	);
};

export default MiddleBlock;
