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

export const galleryData = [
	{
		photo:
			"https://images.unsplash.com/photo-1631155989916-4aabcabcce8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		tags: ["coffee"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1577392648386-000e77cbc962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["coffee", "cookies"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1569097893724-974d2018a152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["coffee", "latte"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80",
		tags: ["cafe", "interior"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
		tags: ["cafe", "interior"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		tags: ["cafe", "4 cups"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["cafe", "4 cups"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
		tags: ["cafe", "milk"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
		tags: ["cafe", "milk"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
		tags: ["coffee", "cup"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		tags: ["coffee", "table"],
	},
	{
		photo:
			"https://images.unsplash.com/photo-1589985902809-39d25db22101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		tags: ["coffee", "milk"],
	},
];
