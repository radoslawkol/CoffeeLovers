import "./index.scss";
import { useContext, useEffect, useState } from "react";
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

function App() {
	const modalCtx = useContext(NewsletterModalContext);

	useEffect(() => {
		setTimeout(() => {
			modalCtx.openModal();
		}, 4000);
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
