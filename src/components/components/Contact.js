import ContactForm from "./ContacForm";
import Directions from "./Directions";
import classes from "./Contact.module.scss";

const Contact = () => {
	return (
		<div className={classes.Contact}>
			<Directions className={classes.Directions}></Directions>
			<ContactForm className={classes.ContactForm}></ContactForm>
		</div>
	);
};

export default Contact;
