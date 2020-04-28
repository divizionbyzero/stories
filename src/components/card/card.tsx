import React from 'react';
import './card.css';

const Card = (props: any) => {
	return (
		<div className="card-container">
			<img alt="user" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} />
			<h2>{props.user.name}</h2>
			<span>{props.user.username}</span>
			<a href={`mailto:${props.user.email}`}>{props.user.email}</a>
		</div>
	);
};

export default Card;
