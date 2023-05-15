import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { Stylesheet, css } from 'aphrodite'

function Header() {
	return (
		<div className={css(styles.header)}>
			<img src={logo} alt="logo" className={css(styles.logo)} />
			<h1 className={css(styles.title)}>School dashboard</h1>
		</div>
	)
}

const styles = Stylesheet.create({
	header: {
		display: 'flex',
		color: '#e0344a',
		alignItems: 'center',
		borderBottom: 'thick solid #e0344a',
		width: '100%',
		position: 'fixed',
	},
	logo: {
		width: '144px',
	},
	title: {
		margin: 0,
	},
});

export default Header;
