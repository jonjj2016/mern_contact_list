import React from 'react';
import styled from 'styled-components';
export default function About () {
	return (
		<AboutWrapper>
			<h1>About This App</h1>
			<p className="my-1">This is a Full Stack React App for Keeping contacts</p>
			<p className="bg-dark p bright">
				<strong>Version: </strong> 1.0.0
			</p>
		</AboutWrapper>
	);
}
const AboutWrapper = styled.div`
	.bright {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		height: 100px;
	}
`;
