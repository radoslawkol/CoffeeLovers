import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
