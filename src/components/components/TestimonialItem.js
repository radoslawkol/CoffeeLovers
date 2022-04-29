import classes from "./TestimonialItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

const maxStars = 5;

const ratingCalc = (rating) => {
	let stars = [];

	const rate = Math.ceil(rating);

	for (let i = 0; i < maxStars; i++) {
		stars.push(
			<FontAwesomeIcon icon={emptyStar} className={classes.icon} key={i} />
		);
	}

	const fullStarsArr = [];
	for (let i = 0; i < rate; i++) {
		fullStarsArr.push(
			<FontAwesomeIcon icon={fullStar} className={classes.icon} key={i} />
		);
	}
	stars.splice(0, rate, ...fullStarsArr);
	return stars;
};

const TestimonialItem = ({
	id,
	name,
	surname,
	description,
	photo,
	rating,
	className,
}) => {
	return (
		<div className={`${classes.Testimonial}`}>
			<figure className={classes["Testimonial__user"]}>
				<img
					src={photo}
					alt='user face'
					className={classes["Testimonial__photo"]}
				/>
				<figcaption className={classes["Testimonial__name"]}>
					{name} {surname}
				</figcaption>
			</figure>
			<p className={classes["Testimonial__text"]}>{description}</p>
			<div className={classes["Testimonial__rating"]}>
				{ratingCalc(rating).map((star) => star)}
			</div>
		</div>
	);
};

export default TestimonialItem;
