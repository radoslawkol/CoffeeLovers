import classes from "./ContactModal.module.scss";

const ContactModal = () => {
	return (
		<div data-aos='fade-down' className={classes.ContactModal}>
			<p className={classes.text}>Message sent successfuly!</p>
		</div>
	);
};

export default ContactModal;
