import Arrow, { Colors, Rotation } from 'common/Arrow';
import { useInternalScript } from 'hooks/useScript';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundBackground, NotFoundContainer, NotFoundDescription, NotFoundLink, NotFoundParticle, NotFoundTitle } from './styles';

const NotFound = () => {
	const navigate = useNavigate();

	const particleRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	// glitch timer
	useEffect(() => {
		const glitch = () => {
			titleRef.current?.classList.add('animate');

			// wait until animation is done
			setTimeout(() => {
				titleRef.current?.classList.remove('animate');

				// animate next time after some delay (from .5s to 3s)
				setTimeout(() => {
					glitch();
				}, Math.floor(Math.random() * 3000) + 500);
			}, 1000);
		};

		glitch();
	}, []);

	// particle timer
	useEffect(() => {
		const move = () => {
			if (!particleRef.current) return;

			particleRef.current.style.left = `${Math.floor(Math.random() * 102) - 2}%`;
			particleRef.current.style.top = `${Math.floor(Math.random() * 102) - 2}vh`;

			setTimeout(() => {
				setTimeout(move, Math.floor(Math.random() * 3000) + 500);
			}, Math.floor(Math.random() * 5000) + 2000);
		};

		move();
	}, []);

	return (
		<>
			<NotFoundContainer>
				<NotFoundBackground src={'/404_background.svg'} alt="404 Background" />
				<NotFoundParticle ref={particleRef} />
				<NotFoundTitle ref={titleRef}>#404</NotFoundTitle>
				<NotFoundDescription>Oops! There is nothing here!</NotFoundDescription>
				<NotFoundLink onClick={() => navigate(-1)}>
					<span>Take me home</span>
					<Arrow rotate={Rotation.Up_Right} color={Colors.Pink} />
				</NotFoundLink>
			</NotFoundContainer>
		</>
	);
};

export default NotFound;
