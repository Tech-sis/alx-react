import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import NotificationItem from "./NotificationItem";

describe("Testing the <NotificationItem /> Component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NotificationItem />);
	});

	it("<NotificationItem /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an("undefined");
	});

	it("<NotificationItem /> renders the correct html", () => {
		expect(wrapper.html()).to.equal("<li></li>");
	});

	it("<NotificationItem /> renders the correct html given props", () => {
		const wrapper = shallow(
			<NotificationItem type="default" value="test" html={{ __html: "<u>test</u>" }} />
		);
		expect(wrapper.html()).to.equal(
			'<li data-notification-type="default"><u>test</u></li>'
		);
	});

	it("<NotificationItem /> renders the correct html given props", () => {
		const wrapper = shallow(
			<NotificationItem type="urgent" value="test" html={{ __html: "<u>test</u>" }} />
		);
		expect(wrapper.html()).to.equal(
			'<li data-notification-type="urgent"><u>test</u></li>'
		);
	});
});
