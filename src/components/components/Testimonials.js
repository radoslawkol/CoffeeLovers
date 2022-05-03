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

		if (window.innerWidth >= 776 && slide === 0) {
			setSlide(testimonials.length - 2);
		}

		if (window.innerWidth >= 1400 && slide === 0) {
			setSlide(testimonials.length - 3);
		}
		if (window.innerWidth >= 1400 && slide === 0) {
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

		if (window.innerWidth >= 776 && slide === testimonials.length - 2) {
			setSlide(0);
		}

		if (window.innerWidth >= 1400 && slide === testimonials.length - 3) {
			setSlide(0);
		}

		if (window.innerWidth >= 1600 && slide === testimonials.length - 4) {
			setSlide(0);
		}
	};

	useEffect(() => {
		const slider = document.getElementById("slider");
		let translateCalc;

		if (window.innerWidth >= 1600) {
			if (slide >= 0) {
				translateCalc = `-${slide * 25}% - ${1 * slide}`;
			} else if (slide === -1) {
				translateCalc = `${-(testimonials.length - 4) * 25}% - ${
					1 * (testimonials.length - 4)
				}`;
			}
			slider.style.transform = `translate(calc(${translateCalc}rem))`;
			return;
		}

		if (window.innerWidth >= 1400) {
			if (slide >= 0) {
				translateCalc = `-${slide * 33.3}% - ${1 * slide}`;
			} else if (slide === -1) {
				translateCalc = `${-(testimonials.length - 3) * 33.3}% - ${
					1 * (testimonials.length - 3)
				}`;
			}
			slider.style.transform = `translate(calc(${translateCalc}rem))`;
			return;
		}

		if (window.innerWidth >= 776) {
			if (slide >= 0) {
				translateCalc = `-${slide * 50}% - ${1.5 * slide}`;
			} else if (slide === -1) {
				translateCalc = `${-(testimonials.length - 2) * 50}% - ${
					1.5 * (testimonials.length - 2)
				}`;
			}
			slider.style.transform = `translate(calc(${translateCalc}rem))`;
			return;
		}

		if (slide >= 0) {
			translateCalc = `-${slide * 100}% - ${3 * slide}`;
		} else if (slide === -1) {
			translateCalc = `${-(testimonials.length - 1) * 100}% - ${
				3 * (testimonials.length - 1)
			}`;
		}

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
