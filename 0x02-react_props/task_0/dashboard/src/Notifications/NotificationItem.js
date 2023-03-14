import React from 'react';
const NoticationItem = ({ type, html, value }) => {
	return (
		<li data-notification-type={type} dangerouslySetInnerHTML={html}>
			{value}
		</li>
	);
};
export default NoticationItem;