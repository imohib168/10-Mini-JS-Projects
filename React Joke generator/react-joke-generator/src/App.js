import React, { useState, useEffect } from 'react'

const url = "http://api.icndb.com/jokes/random";

function App() {

	const [joke, setJoke] = useState();

	const generateJoke = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setJoke(data.value.joke))
	}

	useEffect(() => {
		generateJoke();
	}, [])

	return (
		<div className="box">
			<h3>Chuck Norris joke Generator</h3>
			<p dangerouslySetInnerHTML={{__html: joke}} />
			<button onClick={generateJoke}>Get the joke 😂</button>
		</div>
	);
}

export default App;
