// @flow
import React, { Component } from 'react';

interface Props {
	number: number
}

interface State {}

class Fibonacci extends Component<void, Props, State> {

	props: Props;
	state: State;

	// ref
	dom: HTMLElement;

	constructor(props: Object) {
		super(props);

		this.state = {};
	}

	generate(n: number):number {
		if (n < 2) {
			return n;
		}

		return this.generate(n - 1) + this.generate(n - 2);
	}

	render() {

		const { number } = this.props;

		if (typeof number === 'undefined') {
			return null;
		}

		return (
			<div className="fibonacci" ref={el => (this.dom = el)}>
				{this.generate(number)}
			</div>
		);

	}

}

export default Fibonacci;
