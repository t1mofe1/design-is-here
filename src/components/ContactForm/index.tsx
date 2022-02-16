import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';
import { JustifyContentEnum, AlignItemsEnum } from 'common/types';

const Contact = ({ title, content, id, t }: ContactProps) => {
	const ValidationType = ({ type }: ValidationTypeProps) => {
		return <Zoom direction="left"></Zoom>;
	};

	return (
		<ContactContainer id={id}>
			{/* <Col lg={12} md={11} sm={24} xs={24}>
					<Slide direction="left">
						<Block title={title} content={content} />
					</Slide>
				</Col> */}
			{/* <Col lg={12} md={12} sm={24} xs={24}>
					<Slide direction="right">
						<FormGroup autoComplete="off" onSubmit={handleSubmit}>
							<Col span={24}>
								<Input type="text" name="name" placeholder="Your Name" value={values.name || ''} onChange={handleChange} />
								<ValidationType type="name" />
							</Col>
							<Col span={24}>
								<Input type="text" name="email" placeholder="Your Email" value={values.email || ''} onChange={handleChange} />
								<ValidationType type="email" />
							</Col>
							<Col span={24}>
								<TextArea placeholder="Your Message" value={values.message || ''} name="message" onChange={handleChange} />
								<ValidationType type="message" />
							</Col>
							<ButtonContainer>
								<Button name="submit">{t('Submit')}</Button>
							</ButtonContainer>
						</FormGroup>
					</Slide>
				</Col> */}
		</ContactContainer>
	);
};

export default Contact;
