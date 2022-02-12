import { useReducer } from "react";

interface State {
	output: string;
	equation: string;
}

type Action =
	| {
			type: "append";
			payload: string;
	  }
	| {
			type: "equals";
	  }
	| {
			type: "clear";
	  };

const reducer = (state: State, action: Action): State => {
	console.log(state);

	switch (action.type) {
		case "append":
			return {
				...state,
				output: state.output + action.payload,
			};

		case "equals":
			try {
				const output = eval(state.output);

				if (isNaN(output)) throw new Error("NaN");

				return {
					...state,
					equation: state.output,
					output,
				};
			} catch (e) {
				return {
					...state,
					equation: state.output,
					output: "Błąd",
				};
			}

		case "clear":
			return {
				...state,
				output: "",
				equation: "",
			};

		default:
			return state;
	}
};

export const useCalculator = () =>
	useReducer(reducer, {
		output: "",
		equation: "",
	});
