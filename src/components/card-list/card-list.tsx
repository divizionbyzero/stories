import React from 'react';
import Card from '../card/card';
import './card-list.css';

const CardList = function(props: any) {
	return (
		<div className="card-list">
			{props.users.map(function(item: any) {
				return <Card key={item.id} user={item} />;
			})}
		</div>
	);
};

export default CardList;
