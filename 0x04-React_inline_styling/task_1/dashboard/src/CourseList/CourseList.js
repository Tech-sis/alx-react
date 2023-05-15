import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
	return (
		<table className={css(styles.courseList)}>
			<thead>
				<CourseListRow textFirstCell='Available courses' isHeader={true} />
				<CourseListRow
					textFirstCell='Course name'
					textSecondCell='Credit'
					isHeader={true}
				/>
			</thead>
			<tbody>
				{listCourses.length === 0 && (
					<CourseListRow
						textFirstCell='No course available yet'
						isHeader={false}
					/>
				)}

				{listCourses.map((course) => (
					<CourseListRow
						key={course.id}
						textFirstCell={course.name}
						textSecondCell={course.credit}
						isHeader={false}
					/>
				))}
			</tbody>
		</table>
	);
};

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
	courseList: {
		display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		margin: '2rem auto 0 auto',
		width: '90%',
	},
});

export default CourseList;