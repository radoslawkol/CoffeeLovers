// Testimonials
import { Link } from "react-router-dom";
import user1 from "./images/reviewers/user-1.jpg";
import user2 from "./images/reviewers/user-2.jpg";
import user3 from "./images/reviewers/user-3.jpg";
import user4 from "./images/reviewers/user-4.jpg";
import user5 from "./images/reviewers/user-5.jpg";

export const testimonials = [
	{
		id: "t1",
		name: "Alicja",
		surname: "Kołodziej",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.",
		photo: user1,
		rating: 3,
	},
	{
		id: "t2",
		name: "Marcin",
		surname: "Zwierz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.",
		photo: user2,
		rating: 3.9,
	},
	{
		id: "t3",
		name: "Jessica",
		surname: "Muller",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.",
		photo: user3,
		rating: 4.9,
	},
	{
		id: "t4",
		name: "John",
		surname: "Smith",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.",
		photo: user4,
		rating: 5,
	},
	{
		id: "t5",
		name: "Natan",
		surname: "Williams",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.",
		photo: user5,
		rating: 4,
	},
];

export const faqData = [
	{
		question: "How to get to our cafe?",
		answer: `Our cafe is on Bridge Street in London. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	},
	{
		question: "Do you sell coffee online?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id. Posuere ut purus ultrices porttitor id.`,
	},
	{
		question: "Where do your coffee come from?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.`,
	},
	{
		question: "Is your coffee hand-made?",
		answer: `Yes, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.`,
	},
	{
		question: "What kinds of coffee do you sell?",
		answer: `Yes, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut purus ultrices porttitor id.`,
	},
];
