import Footer from "../layout/Footer";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import classes from "./AboutPage.module.scss";

const AboutPage = () => {
	return (
		<main className={classes.AboutPage}>
			<About></About>
			<Testimonials></Testimonials>
			<Faq></Faq>
			<Footer></Footer>
		</main>
	);
};

export default AboutPage;
