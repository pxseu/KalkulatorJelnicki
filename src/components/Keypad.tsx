import { useCalculator } from "@hooks/calculator";
import React, { FC, memo, useCallback } from "react";
import styled from "styled-components/native";
import KeypadButton from "./Button";

interface KeypadProps {
	dispatch: ReturnType<typeof useCalculator>[1];
}

// // TODO: figure out how to make this auto-generate
// const DISPLAY = [
// 	["(", ")", "C"],
// 	["7", "8", "9", "/"],
// 	["4", "5", "6", "*"],
// 	["1", "2", "3", "-"],
// 	["0", ".", "=", "+"],
// ];

const KeypadWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex-grow: 0;
`;

const KeypadRow = styled.View<{ totalRow: number }>`
	display: flex;
	flex-direction: row;
	width: 100%;
	aspect-ratio: 4;
	justify-content: center;
`;

const Keypad: FC<KeypadProps> = ({ dispatch }) => (
	<KeypadWrapper>
		<KeypadRow totalRow={4}>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: "(" }), [])}>
				(
			</KeypadButton>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: ")" }), [])}>
				)
			</KeypadButton>
			<KeypadButton variant="function" onPress={useCallback(() => dispatch({ type: "clear" }), [])} span={2}>
				C
			</KeypadButton>
		</KeypadRow>
		<KeypadRow totalRow={4}>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "7" }), [])}>
				7
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "8" }), [])}>
				8
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "9" }), [])}>
				9
			</KeypadButton>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: "/" }), [])}>
				÷
			</KeypadButton>
		</KeypadRow>
		<KeypadRow totalRow={4}>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "4" }), [])}>
				4
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "5" }), [])}>
				5
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "6" }), [])}>
				6
			</KeypadButton>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: "*" }), [])}>
				×
			</KeypadButton>
		</KeypadRow>
		<KeypadRow totalRow={4}>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "1" }), [])}>
				1
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "2" }), [])}>
				2
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "3" }), [])}>
				3
			</KeypadButton>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: "-" }), [])}>
				{"\u2212"}
			</KeypadButton>
		</KeypadRow>
		<KeypadRow totalRow={4}>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "0" }), [])}>
				0
			</KeypadButton>
			<KeypadButton variant="number" onPress={useCallback(() => dispatch({ type: "append", payload: "." }), [])}>
				.
			</KeypadButton>
			<KeypadButton variant="function" onPress={useCallback(() => dispatch({ type: "equals" }), [])}>
				=
			</KeypadButton>
			<KeypadButton variant="sign" onPress={useCallback(() => dispatch({ type: "append", payload: "+" }), [])}>
				+
			</KeypadButton>
		</KeypadRow>
	</KeypadWrapper>
);

export default memo(Keypad);
