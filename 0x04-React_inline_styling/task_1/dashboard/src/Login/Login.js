import React from 'react';
import { Stylesheet, css } from 'aphrodite'

function Login() {
	return (
		<React.Fragment>
			<div className={css(styles.body)}>
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" name="email" />
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" name="password" className={css(styles.input)} />
				<button>OK</button>
			</div>
		</React.Fragment>
	)
}

const styles = Stylesheet.create({
	body: {
		padding: '36px 24px'
	},

	input: {
		margin: '0 16px 0 8px'
	}
});

export default Login;
