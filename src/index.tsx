import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				{/* add localization */}
				<Router />
			</BrowserRouter>
		</React.StrictMode>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
