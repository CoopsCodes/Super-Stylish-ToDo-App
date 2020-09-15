import React from "react";
import Header from "./Components/Header";
import Action from "./Components/Action";
import Options from "./Components/Options";
import AddOption from "./Components/AddOption";
import "./App.scss";

class App extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	componentDidMount = () => {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options: options }));
			}
			console.log("Mounted");
		} catch (error) {
			console.log("Error in componentDidMount try-catch", error);
		}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
			console.log("Updated");
		}
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const selected = this.state.options[randomNum];

		this.setState(() => ({ selectedOption: selected }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToRemove !== option
			),
		}));
	};

	handleDeleteAll = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToRemove !== option
			),
		}));
	};

	handleAddOption = (option) => {
		if (!option) {
			return "Please enter a valid item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exists";
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
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
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteAll={this.handleDeleteAll}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
