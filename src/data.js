// Testimonials
import { Link } from "react-router-dom";
import user1 from "./images/reviewers/user-1.jpg";
import user2 from "./images/reviewers/user-2.jpg";
import user3 from "./images/reviewers/user-3.jpg";
import user4 from "./images/reviewers/user-4.jpg";
import user5 from "./images/reviewers/user-5.jpg";

import {
	faMugHot,
	faIceCream,
	faCakeCandles,
	faTruck,
} from "@fortawesome/free-solid-svg-icons";

import americano from "./images/americano.jpg";
import hotChocolate from "./images/hot-chocolate.jpg";
import cappuchino from "./images/cappuchino.jpg";
import macchiato from "./images/macchiato.jpg";
import latte from "./images/latte.jpg";
import ristretto from "./images/ristretto.jpg";
import strawberyMilk from "./images/strawwbery-milk.jpg";
import expressoMachiato from "./images/expresso-macchiato.jpg";

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

export const servicesData = [
	{
		type: "Coffee",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
		icon: faMugHot,
	},
	{
		type: "Desserts",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam. Lorem ipsum dolor sit amet",
		icon: faIceCream,
	},
	{
		type: "Specials",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
		icon: faCakeCandles,
	},
	{
		type: "Delivery",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
		icon: faTruck,
	},
];

export const servicesMenu = [
	{
		name: "Caffe Macchiato",
		description: "Shot of expressio extracted the Italian way.",
		price: 15,
		photo: macchiato,
	},
	{
		name: "Caffe Latte",
		description: "Shot of expressio extracted the Italian way.",
		price: 14,
		photo: latte,
	},
	{
		name: "Expresso Macchiato",
		description: "Shot of expressio extracted the Italian way.",
		price: 13,
		photo: expressoMachiato,
	},
	{
		name: "Caffe Americano.",
		description: "Shot of expressio extracted the Italian way.",
		price: 18,
		photo: americano,
	},
	{
		name: "Hot chocolate",
		description: "Shot of expressio extracted the Italian way.",
		price: 12,
		photo: hotChocolate,
	},
	{
		name: "Strawberry Milk",
		description: "Shot of expressio extracted the Italian way.",
		price: 19,
		photo: strawberyMilk,
	},
	{
		name: "Coffee Ristretto",
		description: "Shot of expressio extracted the Italian way.",
		price: 21,
		photo: ristretto,
	},
	{
		name: "Cappuccino",
		description: "Shot of expressio extracted the Italian way.",
		price: 16,
		photo: cappuchino,
	},
];
