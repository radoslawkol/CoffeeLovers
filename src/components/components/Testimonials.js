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

const Testimonials = () => {
	const [slide, setSlide] = useState(0);

	const prevCartHandler = () => {
		setSlide((state) => {
			return state - 1;
		});

		if (slide < 0) {
			setSlide(testimonials.length - 1);
		}
	};
	const nextCartHandler = () => {
		setSlide((state) => {
			return state + 1;
		});

		if (slide >= testimonials.length - 1) {
			setSlide(0);
		}
	};

	useEffect(() => {
		const slider = document.getElementById("slider");
		let translateCalc;

		console.log(slide);

		if (slide >= 0) {
			translateCalc = `-${slide * 100}% - ${3 * slide}`;
		}
		// applied for slide = -1
		else if (slide === -1) {
			translateCalc = `${-(testimonials.length - 1) * 100}% - ${
				3 * (testimonials.length - 1)
			}`;
		} else {
			translateCalc = `-${slide * 100}% - ${3 * slide}`;
		}

		console.log(`translate(calc(${translateCalc}rem))`);

		slider.style.transform = `translate(calc(${translateCalc}rem))`;
	}, [slide]);

	return (
		<section className={classes.Testimonials}>
			<h2 className={`section-heading ${classes["Testimonials__heading"]}`}>
				what customers say about us?
			</h2>
			<div className={classes["Testimonials__wrapper"]}>
				<div className={classes["Testimonials__container"]}>
					<div className={classes["Testimonials__slider"]} id='slider'>
						{testimonials.map((item) => {
							return <TestimonialItem key={item.id} {...item} />;
						})}
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
			</div>
		</section>
	);
};

export default Testimonials;
