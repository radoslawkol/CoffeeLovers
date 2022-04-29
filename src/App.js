import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import ServicesPage from "./components/pages/ServicesPage";
import GalleryPage from "./components/pages/GalleryPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
		</>
	);
}

export default App;
