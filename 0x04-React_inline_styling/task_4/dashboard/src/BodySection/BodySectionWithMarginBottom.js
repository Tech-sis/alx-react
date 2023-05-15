import React, { Component } from 'react'
import BodySection from './BodySection';
import { Stylesheet, css } from 'aphrodite'
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className={css(styles.bodySectionWithMargin)}>
				<BodySection {...this.props} />
			</div>
		);
	}
}

BodySectionWithMarginBottom.defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	])
};

const styles = Stylesheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px'
	}
});

export default BodySectionWithMarginBottom;
