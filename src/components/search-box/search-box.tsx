import React from 'react';
import './search-box.css';

const SearchBox = (props: any) => {
	return (
		<input
            className='search'
			id='search'
			type='text'
			placeholder={props.placeholder}
			onChange={props.handleChange}
		/>
	);
};

export default SearchBox;