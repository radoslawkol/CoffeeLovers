import classes from "./ServicesBanner.module.scss";

const ServicesBanner = () => {
	return (
		<header className={classes.ServicesBanner}>
			<h1 className={`section-heading ${classes.heading}`}>
				Welcome to get familiar with our offer
			</h1>
		</header>
	);
};

export default ServicesBanner;
