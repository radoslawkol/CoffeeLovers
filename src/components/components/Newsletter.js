import classes from "./Newsletter.module.scss";
import "../../scss/typography.scss";
import { Link } from "react-router-dom";

const Newsletter = ({ onOpenModal }) => {
	const openModalHandler = () => {
		// open modal from props or context
	};
	return (
		<section className={classes.Newsletter}>
			<div className={classes.shadow}></div>
			<div className={classes.headingContainer}>
				<h2 className={`${classes.heading} section-heading`}>
					Sign up to our Newsletter
				</h2>
			</div>
			<div className={classes.group}>
				<input type='email' placeholder='email' className={classes.input} />
				<button
					className={`${classes.btn} btn btn--yellow`}
					onClick={openModalHandler}
				>
					Subscribe
				</button>
			</div>
		</section>
	);
};

export default Newsletter;
