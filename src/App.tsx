import React from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
      userList: [],
      searchField: ''
		};
	}

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
			this.setState({ userList: users });
		});
	}

	render() {
    const { userList, searchField } = this.state;
    const filteredList = userList.filter((item: any) => item.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div>
				<h1>My Hacker Stories</h1>
        <SearchBox placeholder='search' handleChange={(e: any) => this.setState({searchField: e.target.value})} />
				<CardList users={filteredList} />
			</div>
		);
	}
}

export default App;
