import { ContentBlockProps } from 'components/ContentBlock/types';
import { Fade } from 'react-awesome-reveal';
import { LeftContentSection, Content, ContentWrapper, ServiceWrapper, MinTitle, MinPara } from './styles';
import { JustifyContentEnum, AlignItemsEnum } from 'common/types';

const LeftContentBlock = ({ icon, title, content, section, t, id }: ContentBlockProps) => {
	return (
		<LeftContentSection>
			<Fade direction="left">
				{/* <Col lg={11} md={11} sm={12} xs={24}>
						<SvgIcon src={icon} width="100%" height="100%" />
					</Col> */}
				{/* <Col lg={11} md={11} sm={11} xs={24}>
						<ContentWrapper>
							<h6>{t(title)}</h6>
							<Content>{t(content)}</Content>
							<ServiceWrapper>
								<Row justifyContent={JustifyContentEnum.spaceBetween}>
									{typeof section === 'object' &&
										section.map((item: any, id: number) => {
											return (
												<Col key={id} span={11}>
													<SvgIcon src={item.icon} width="60px" height="60px" />
													<MinTitle>{t(item.title)}</MinTitle>
													<MinPara>{t(item.content)}</MinPara>
												</Col>
											);
										})}
								</Row>
							</ServiceWrapper>
						</ContentWrapper>
					</Col> */}
			</Fade>
		</LeftContentSection>
	);
};

export default LeftContentBlock;
