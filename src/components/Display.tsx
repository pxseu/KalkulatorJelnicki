import React, { FC } from "react";
import type { useCalculator } from "@hooks/calculator";
import styled from "styled-components/native";

interface DisplayProps {
	state: ReturnType<typeof useCalculator>[0];
}

const DisplayWrapper = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 0;
	background: #e6e6e6;
	overflow: hidden;
	border-radius: 8px;
	margin: 5px;
`;

const DisplayText = styled.TextInput`
	font-size: 70px;
	font-weight: bold;
	padding: 10px;
	color: #000000;
	overflow: hidden;
	text-align: right;
`;

const DisplayTopText = styled(DisplayText)`
	font-size: 35px;
	color: #808080;
`;

const Display: FC<DisplayProps> = ({ state }) => (
	<DisplayWrapper>
		<DisplayTopText editable={false}>{state.equation}</DisplayTopText>
		<DisplayText editable={false}>{state.output}</DisplayText>
	</DisplayWrapper>
);

export default Display;
