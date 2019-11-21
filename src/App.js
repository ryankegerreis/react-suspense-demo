import React, { Suspense } from 'react';
import './App.css';
// import axios from 'axios';

const Image = React.lazy(() => import('./Image'));

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Suspense fallback={<div>No Dog...</div>}>
					<Image />
				</Suspense>

				<p>
					Change the speed settings to mid tier mobile in chrome dev tools to
					see all the dog loading glory.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
