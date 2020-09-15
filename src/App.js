import React from "react";
import Header from "./Components/Header";
import "./App.css";

class App extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	render() {
		const title = "To Do: ";
		const subTitleText = "A To-Do list for the stylish person!";
		return (
			<div className="body">
				<Header subTitle={subTitleText} title={title} />
			</div>
		);
	}
}

export default App;
