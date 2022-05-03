import classes from "./ServicesPage.module.scss";
import ServicesBanner from "../components/ServicesBanner";
import Footer from "../layout/Footer";
import ServicesCards from "../components/ServicesCards";
import ServicesOffer from "../components/ServicesOffer";
import ServicesMenu from "../components/ServicesMenu";

const ServicesPage = () => {
	return (
		<div className={classes.ServicesPage}>
			<ServicesBanner></ServicesBanner>
			<main>
				<ServicesCards></ServicesCards>
				<ServicesOffer></ServicesOffer>
				<ServicesMenu></ServicesMenu>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default ServicesPage;
