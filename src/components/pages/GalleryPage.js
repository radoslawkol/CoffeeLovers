import "./GalleryPage.module.scss";
import Gallery from "../components/Gallery";
import classes from "./GalleryPage.module.scss";
import Footer from "../layout/Footer";

const GalleryPage = () => {
	return (
		<section className={classes.GalleryPage}>
			<h2 className={`${classes.heading} section-heading`}>Gallery</h2>
			<Gallery />;
			<Footer />
		</section>
	);
};

export default GalleryPage;
