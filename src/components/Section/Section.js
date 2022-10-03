import React from 'react';
import PropTypes from 'prop-types';
import {Title} from './Section.styled';

const Section = ({title, children}) => {
	return (
		<>
		<Title>{title}</Title>
			{children}
		</>)
		
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Section;