import React, { Component } from "react";

class Constant extends Component {

	static get BRAND_NAME() {
		return {
			name : "GFG",
			id : 1
		}
	}

	render() {
		return (
			<div>My constant is :
{JSON.stringify(this.constructor.BRAND_NAME)}</div>
		);
	}
}

export default App
