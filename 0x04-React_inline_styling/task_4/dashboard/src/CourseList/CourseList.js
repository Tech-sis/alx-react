import React from 'react';
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { Stylesheet, css } from 'aphrodite'

function CourseList({ listCourses }) {
	return (
		<table id="CourseList" cellPadding="0" cellSpacing="0" className={css(styles.table)}>
			<thead>
				<CourseListRow isHeader={true} textFirstCell='Available courses' />
				<CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
			</thead>
			<tbody>
				{
					listCourses.length == 0 ?
						<CourseListRow isHeader={false} textFirstCell='No course available yet' />
						: null
				}
				{
					listCourses.map((val, idx) => {
						return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id} />
					})
				}
			</tbody>
		</table>
	);
}

CourseList.defaultProps = {
	listCourses: []
};

CourseList.propType = {
	listCourses: PropType.arrayOf(CourseShape)
};

const styles = Stylesheet.create({
	th: {
		borderBottom: '1px solid gray',
		margin: '0',
		padding: '0',
		textAlign: 'left'
	},

	table: {
		width: '90 %',
		border: '1px solid gray',
		margin: 'auto',
		marginTop: '40px',
		padding: '0'
	},

	td: {
		paddingLeft: '3px'
	},
});

export default CourseList;
