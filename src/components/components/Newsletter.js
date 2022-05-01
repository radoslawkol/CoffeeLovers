import classes from "./Newsletter.module.scss";
import "../../scss/typography.scss";
import NewsletterModal from "../layout/NewsletterModal";
import { useContext, useRef, useState } from "react";
import { NewsletterModalContext } from "../../store/newsletterModal-context";

const Newsletter = ({ onOpenModal }) => {
	const inputRef = useRef();
	const modalCtx = useContext(NewsletterModalContext);
	const openModalHandler = () => {
		modalCtx.openModal();
		inputRef.current.value = "";
	};
	const setEmail = (e) => {
		modalCtx.setUserEmail(e.target.value);
	};
	return (
		<>
			<section className={classes.Newsletter}>
				<div className={classes.shadow}></div>
				<div className={classes.headingContainer}>
					<h2 className={`${classes.heading} section-heading`}>
						Sign up to our Newsletter
					</h2>
				</div>
				<div className={classes.group}>
					<input
						type='email'
						placeholder='email'
						className={classes.input}
						onChange={setEmail}
						ref={inputRef}
					/>
					<button
						className={`${classes.btn} btn btn--yellow`}
						onClick={openModalHandler}
					>
						Subscribe
					</button>
				</div>
			</section>
		</>
	);
};

export default Newsletter;
