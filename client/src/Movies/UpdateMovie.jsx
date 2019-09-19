import React from 'react';
import axios from 'axios';

function UpdateMovie (props) {

	const [itemToUpdate, setItemToUpdate] = React.useState({})

	React.useEffect(() => {
		const item = props.match.params.id;
		console.log(item)
		axios(`http://localhost:5000/api/movies/${item}`)
		.then(res => setItemToUpdate(res.data))
		.catch(err => console.log(err))
	}, [props.match.params.id])

	return(
		<h1>I am the movie form</h1>
	)
}

export default UpdateMovie;