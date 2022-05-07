import { useEffect, useRef, useState } from "react";
import classes from "./ContactForm.module.scss";
import ContactModal from "./ContactModal";

const ContactForm = () => {
	const nameInput = useRef();
	const surnameInput = useRef();
	const emailInput = useRef();
	const textarea = useRef();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const submitHandler = (e) => {
		e.preventDefault();
		setIsModalOpen(true);
	};

	useEffect(() => {
		if (isModalOpen) {
			setTimeout(() => {
				setIsModalOpen(false);
				nameInput.current.value = "";
				emailInput.current.value = "";
				surnameInput.current.value = "";
				textarea.current.value = "";
			}, 2000);
		}
	}, [isModalOpen]);

	return (
		<>
			{isModalOpen && <ContactModal />}
			<section className={classes.ContactForm}>
				<h2
					data-aos='fade-right'
					className={`section-heading ${classes.heading}`}
				>
					Contact with us
				</h2>
				<form
					data-aos='fade-up'
					data-aos-delay='200'
					className={classes.form}
					onSubmit={submitHandler}
				>
					<input
						type='text'
						placeholder='Name...'
						className={classes.input}
						required
						ref={nameInput}
					/>
					<input
						type='text'
						placeholder='Surname...'
						className={classes.input}
						required
						ref={surnameInput}
					/>
					<input
						type='email'
						placeholder='Email...'
						className={classes.input}
						required
						ref={emailInput}
					/>
					<textarea
						cols='30'
						rows='10'
						placeholder='Write message...'
						className={classes.textarea}
						required
						ref={textarea}
					></textarea>
					<button className={`${classes.btn} btn btn--yellow`}>Submit</button>
				</form>
			</section>
		</>
	);
};

export default ContactForm;
