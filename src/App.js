import React from 'react';
import './styles.css';

import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			latitude: null,
			errorMessage: '',
			isLoading: true,
		};
	}

	componentDidMount() {
		this.getCurrPosition();
	}

	getCurrPosition() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					isLoading: false,
				});
			},
			(err) => {
				this.setState({
					errorMessage: err.message || 'Could not access your location',
					isLoading: false,
				});
			}
		);
	}

	renderContent() {
		if (this.state.isLoading) {
			return (
				<Spinner
					isLoading={this.state.isLoading}
					message="Please allow location access..."
				/>
			);
		} else {
			return (
				<SeasonDisplay
					latitude={this.state.latitude}
					errorMessage={this.state.errorMessage}
				/>
			);
		}
	}

	render() {
		return <div className="App">{this.renderContent()}</div>;
	}
}
