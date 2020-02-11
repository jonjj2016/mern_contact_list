import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaIdCardAlt } from 'react-icons/fa';
const NavBar = ({ title, icon }) => {
	return (
		<NavBarWrapper className="navbar bg-primary ">
			<h1 className="logo">
				{icon} {title}
			</h1>
			<ul className="nav">
				<li className="nav-item">
					<NavLink to="/" className="nav-link ">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link " to="/about">
						About
					</NavLink>
				</li>
			</ul>
		</NavBarWrapper>
	);
};
NavBar.prototype = {
	title : PropTypes.string.isRequired,
	icon  : PropTypes.string
};
NavBar.defaultProps = {
	title : 'Contact Keeper',
	icon  : <FaIdCardAlt />
};
const NavBarWrapper = styled.nav`
	color: #fff;
	ul {
		list-style: none;
	}
	.logo {
		color: #fff;
	}
	.nav-link {
		color: #fff;
		font-size: 1.3rem;
		transition: 200ms ease-in-out;
	}
	.nav-link:hover {
		color: #333;
	}
`;
export default NavBar;
