import React, { FC } from "react";
import styled from "styled-components/native";
import type { useCalculator } from "@hooks/calculator";
import { KeypadButton } from "./Buttons";

interface Props {
	dispatch: ReturnType<typeof useCalculator>[1];
}

const KeypadWrapper = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	height: 90%;
`;

const KeypadRow = styled.View`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;

const Keypad: FC<Props> = ({ dispatch }) => {
	return (
		<KeypadWrapper>
			<KeypadRow>
				<KeypadButton onPress={() => dispatch({ type: "append", value: "(" })} title="(" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: ")" })} title=")" />
				<KeypadButton onPress={() => dispatch({ type: "clear" })} title="C" span={2} />
			</KeypadRow>
			<KeypadRow>
				<KeypadButton onPress={() => dispatch({ type: "append", value: "7" })} title="7" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "8" })} title="8" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "9 " })} title="9" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "/" })} title="÷" />
			</KeypadRow>
			<KeypadRow>
				<KeypadButton onPress={() => dispatch({ type: "append", value: "4" })} title="4" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "5" })} title="5" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "6" })} title="6" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "*" })} title="×" />
			</KeypadRow>
			<KeypadRow>
				<KeypadButton onPress={() => dispatch({ type: "append", value: "1" })} title="1" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "2" })} title="2" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "3" })} title="3" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "-" })} title="-" />
			</KeypadRow>
			<KeypadRow>
				<KeypadButton onPress={() => dispatch({ type: "append", value: "0" })} title="0" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "." })} title="." />
				<KeypadButton onPress={() => dispatch({ type: "equals" })} title="=" />
				<KeypadButton onPress={() => dispatch({ type: "append", value: "+" })} title="+" />
			</KeypadRow>
		</KeypadWrapper>
	);
};

export default Keypad;
