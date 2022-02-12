import React, { FC } from "react";
import styled from "styled-components/native";

interface Props {
	values: {
		output: number;
		equation: string;
	};
}

const DisplayWrapper = styled.View`
	display: flex;
	border: solid #00000080 4px;
	border-radius: 8px;
	margin: 5px;
	font-size: 25px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	background-color: #e6e6e6;
`;

const DisplayText = styled.Text`
	font-size: 60px;
	color: #000000;
`;

const DisplayTopText = styled(DisplayText)`
	font-size: 30px;
	color: #808080;
`;

const Display: FC<Props> = ({ values }) => {
	return (
		<DisplayWrapper>
			<DisplayTopText>{values.equation}</DisplayTopText>
			<DisplayText>{values.output}</DisplayText>
		</DisplayWrapper>
	);
};

export default Display;
