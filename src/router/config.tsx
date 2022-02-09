import { RouteObject } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

export default routes;
