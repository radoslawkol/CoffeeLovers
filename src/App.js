import "./index.scss";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import ServicesPage from "./components/pages/ServicesPage";
import GalleryPage from "./components/pages/GalleryPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import NewsletterModal from "./components/layout/NewsletterModal";
import { NewsletterModalContext } from "./store/newsletterModal-context";
import ScrollToTop from "./components/utils/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const modalCtx = useContext(NewsletterModalContext);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			modalCtx.openModal();
		}, 6000);
	}, []);
	return (
		<>
			<Navigation />
			{modalCtx.isModalOpen && <NewsletterModal />}
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/services' element={<ServicesPage />} />
					<Route path='/gallery' element={<GalleryPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</ScrollToTop>
		</>
	);
}

export default App;
