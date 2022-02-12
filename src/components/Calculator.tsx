import React, { FC } from "react";
import styled from "styled-components/native";
import Display from "@comp/Display";
import Keypad from "@comp/Keypad";
import { useCalculator } from "@hooks/calculator";

const AppWrapper = styled.View`
	display: flex;
	justify-content: center;
	margin: 8px;
	border: solid #808080 4px;
	padding: 5px;
	border-radius: 8px;
`;

const Center = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f5fcff;
	width: 100%;
	height: 100%;
`;

const Calculator: FC = () => {
	const [state, dispatch] = useCalculator();

	return (
		<Center>
			<AppWrapper>
				<Display state={state} />
				<Keypad dispatch={dispatch} />
			</AppWrapper>
		</Center>
	);
};

export default Calculator;
