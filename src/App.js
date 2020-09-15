import React from "react";
import Header from "./Components/Header";
import Action from "./Components/Action";
import "./App.scss";

class App extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const selected = this.state.options[randomNum];

		this.setState(() => ({ selectedOption: selected }));
	};

	render() {
		const title = "To Do: ";
		const subTitleText = "A To-Do list for the stylish person!";
		return (
			<div className="body">
				<Header subTitle={subTitleText} title={title} />
				<div className="container">
					<Action
						hasOptions={this.state.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget"></div>
				</div>
			</div>
		);
	}
}

export default App;
