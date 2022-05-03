import classes from "./ContactPage.module.scss";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";

const ContactPage = () => {
	return (
		<div className={classes.ContactPage}>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default ContactPage;
