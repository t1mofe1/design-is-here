import Arrow from 'common/Arrow';
import { Colors, Rotation } from 'utils/constants';
import { Fragment, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundBackground, NotFoundContainer, NotFoundDescription, NotFoundLink, NotFoundParticle, NotFoundTitle } from './styles';
import { createGlobalStyle } from 'styled-components';

const RemoveOverflowFromBody = createGlobalStyle`
	body {
		overflow-y: hidden;
	}
`;

const NotFound = () => {
	const navigate = useNavigate();

	const particleRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	// glitch timer
	useEffect(() => {
		const glitch = () => {
			if (!titleRef.current) return;

			titleRef.current.classList.add('animate');

			titleRef.current.addEventListener('animationend', function animationEnd() {
				if (!titleRef.current) return;

				titleRef.current.classList.remove('animate');
				titleRef.current.removeEventListener('animationend', animationEnd);

				setTimeout(glitch, Math.floor(Math.random() * 3000) + 500);
			});
		};

		glitch();
	}, []);

	// particle timer
	useEffect(() => {
		const move = () => {
			if (!particleRef.current) return;

			const transitionEnd = {
				top: false,
				left: false,
			};

			particleRef.current.addEventListener('transitionend', function func({ propertyName }: TransitionEvent) {
				if (!particleRef.current) return;

				if (propertyName === 'top') {
					transitionEnd.top = true;
				} else if (propertyName === 'left') {
					transitionEnd.left = true;
				}

				if (Object.values(transitionEnd).every(Boolean)) {
					particleRef.current.removeEventListener('transitionend', func);

					setTimeout(move, Math.floor(Math.random() * 3000) + 500);
				}
			});

			particleRef.current.style.left = `${Math.floor(Math.random() * 102) - 2}%`;
			particleRef.current.style.top = `${Math.floor(Math.random() * 102) - 2}vh`;
		};

		move();
	}, []);

	return (
		<>
			<RemoveOverflowFromBody />
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
