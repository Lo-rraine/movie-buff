import React from 'react';

const Heading = (props) => {
	return (
		<div className=''>
			<h1>{props.heading}</h1>
			<p><strong>{props.text}</strong></p>
		</div>
	);
};

export default Heading;