import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	let [ count, setCount ] = useState(0);
	let ref = useRef();

	function incrementCounter() {
		console.log('calling');
		setCount(count + 1);
	}

	useEffect(() => {
		function tick() {
			ref.current = incrementCounter;
		}
		console.log('ticks');
		tick();
	});

	useEffect(() => {
		//big difference here between passing just ref.current and () => ref.current.  The former loses the intermediate reference type 'ref'
		//so we just call the same function over and over again.  With () => ref.current, we still have ref providing mutable information that is used for the context of our next function call,
		setInterval(() => ref.current, 1000);
	}, []);

	return (
		<div className="App">
			<div className="Clock">
				<div className="display">{count}</div>
			</div>
		</div>
	);
}

export default App;
