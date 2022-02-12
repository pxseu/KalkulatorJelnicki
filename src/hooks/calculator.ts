import { useReducer } from "react";

interface State {
	output: number;
	equation: string;
}

type Action =
	| {
			type: "append";
			value: string;
	  }
	| {
			type: "equals";
	  }
	| {
			type: "clear";
	  };

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "append":
			return {
				...state,
				equation: state.equation + action.value,
			};

		case "equals":
			try {
				return {
					...state,
					output: eval(state.equation) as number,
					equation: state.output.toString(),
				};
			} catch (e) {
				return {
					...state,
					output: NaN,
				};
			}

		case "clear":
			return {
				...state,
				output: 0,
				equation: "",
			};

		default:
			return state;
	}
};

export const useCalculator = () =>
	useReducer(reducer, {
		output: 0,
		equation: "",
	});
