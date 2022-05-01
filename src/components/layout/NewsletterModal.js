import ReactDOM from "react-dom";
import classes from "./NewsletterModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NewsletterModalContext } from "../../store/newsletterModal-context";
import { useContext, useRef } from "react";

const Backdrop = () => {
	const modalCtx = useContext(NewsletterModalContext);
	return (
		<div
			className={classes.backdrop}
			onClick={() => modalCtx.closeModal()}
		></div>
	);
};

const Modal = () => {
	const modalCtx = useContext(NewsletterModalContext);
	const closeModalHandler = () => {
		modalCtx.closeModal();
		modalCtx.setUserEmail("");
	};

	const submitHandler = (e) => {
		e.preventDefault();
		closeModalHandler();
	};
	return (
		<div className={classes.Modal}>
			<FontAwesomeIcon
				icon={faXmark}
				className={classes.icon}
				onClick={closeModalHandler}
			/>
			<h2 className={`section-heading ${classes.heading}`}>
				Get 10% discount!
			</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo id,
				consequuntur voluptatem repellat odit labore recusandae, incidunt sunt
				optio sequi enim sit. Nobis, ducimus iure! Excepturi ab quae vero
				dolorum ut, nihil totam atque quis dicta quidem illum earum?
			</p>
			<form className={classes.group} onSubmit={submitHandler}>
				<input
					type='email'
					placeholder='email'
					className={classes.input}
					required
					value={modalCtx.enteredEmail}
					onChange={(e) => modalCtx.setUserEmail(e.target.value)}
				/>
				<button
					type='submit'
					className={`${classes.btn} btn btn--yellow`}
					// onClick={closeModalHandler}
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

const NewsletterModal = ({ children }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
			{ReactDOM.createPortal(
				<Modal></Modal>,
				document.getElementById("overlays")
			)}
		</>
	);
};

export default NewsletterModal;
