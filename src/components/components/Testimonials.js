import { useEffect, useState } from "react";
import classes from "./Testimonials.module.scss";
import "../../scss/typography.scss";
import { testimonials } from "../../data";
import TestimonialItem from "./TestimonialItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleLeft,
	faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

import mixins from "../../scss/mixins.module.scss";

const Testimonials = () => {
	const [slide, setSlide] = useState(0);

	const translate = (percentage, gap, last) => {
		let translateCalc;
		if (slide >= 0) {
			translateCalc = `-${slide * percentage}% - ${gap * slide}`;
		} else if (slide === -1) {
			translateCalc = `${-(testimonials.length - last) * percentage}% - ${
				1.5 * (testimonials.length - last)
			}`;
		}
		return `translate(calc(${translateCalc}rem))`;
	};

	const prevCartHandler = () => {
		setSlide((state) => {
			return state - 1;
		});

		if (slide < 0) {
			setSlide(testimonials.length - 1);
		}

		if (window.innerWidth >= 776 && slide === 0) {
			setSlide(testimonials.length - 2);
		}

		if (window.innerWidth >= 1400 && slide === 0) {
			setSlide(testimonials.length - 3);
		}
		if (window.innerWidth >= 1600 && slide === 0) {
			setSlide(testimonials.length - 4);
		}
	};
	const nextCartHandler = () => {
		setSlide((state) => {
			return state + 1;
		});

		if (slide >= testimonials.length - 1) {
			setSlide(0);
		}

		if (
			window.innerWidth >= mixins.medium &&
			slide === testimonials.length - 2
		) {
			setSlide(0);
		}

		if (
			window.innerWidth >= mixins.extraLarge &&
			slide === testimonials.length - 3
		) {
			setSlide(0);
		}

		if (window.innerWidth >= mixins.big && slide === testimonials.length - 4) {
			setSlide(0);
		}
	};

	useEffect(() => {
		const slider = document.getElementById("slider");
		let transform;

		const interval = setInterval(() => {
			nextCartHandler();
		}, 2000);

		transform = translate(100, Number(classes.gap), 1);

		if (window.innerWidth >= mixins.medium) {
			transform = translate(100 / 2, Number(classes.gap) / 2, 2);
		}

		if (window.innerWidth >= mixins.extraLarge) {
			transform = translate(100 / 3, Number(classes.gap) / 3, 3);
		}

		if (window.innerWidth >= mixins.big) {
			transform = translate(100 / 4, Number(classes.gap) / 4, 4);
		}
		slider.style.transform = transform;

		return () => {
			clearInterval(interval);
		};
	}, [slide]);

	useEffect(() => {}, []);

	return (
		<section className={classes.Testimonials}>
			<h2
				data-aos='fade-up'
				className={`section-heading ${classes["Testimonials__heading"]}`}
			>
				what customers say about us?
			</h2>
			<div
				data-aos='fade-up'
				data-aos-duration='400'
				className={classes["Testimonials__wrapper"]}
			>
				<div className={classes["Testimonials__container"]}>
					<div className={classes["Testimonials__slider"]} id='slider'>
						{testimonials.map((item) => {
							return <TestimonialItem key={item.id} {...item} />;
						})}
					</div>
				</div>
				<FontAwesomeIcon
					icon={faCircleLeft}
					className={classes.arrow}
					onClick={prevCartHandler}
				/>
				<FontAwesomeIcon
					icon={faCircleRight}
					className={classes.arrow}
					onClick={nextCartHandler}
				/>
			</div>
		</section>
	);
};

export default Testimonials;
