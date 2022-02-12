import { useCalculator } from "@hooks/calculator";
import React, { FC } from "react";
import styled from "styled-components/native";
import Display from "./Display";
import Keypad from "./Keypad";

const CalculatorWrapper = styled.View`
	display: flex;
	flex-direction: column;
	background: #a0a0a0;
	width: 100%;
	height: 100%;
	padding: 15px;
`;

const Calculator: FC = () => {
	const [state, dispatch] = useCalculator();

	return (
		<CalculatorWrapper>
			<Display values={state} />
			<Keypad dispatch={dispatch} />
		</CalculatorWrapper>
	);
};

export default Calculator;
