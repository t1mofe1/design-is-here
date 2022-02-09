import { Suspense } from 'react';
import Loader from 'components/Loader';
import routes from './config';
import { Styles } from '../styles/styles';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
	<Suspense fallback={<Loader />}>
		<Styles />
		<Routes>
			{routes.map((route, i) => (
				<Route {...route} key={i} />
			))}
		</Routes>
	</Suspense>
);

export default Router;
