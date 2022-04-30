import "../../scss/button.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./Home.module.scss";
import logo from "../../images/coffee-beans.png";
import About from "../components/About";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/Footer";

const isMobile = window.matchMedia("(max-width: 576px)").matches;

const Home = () => {
	const [isMobileDevice, setIsMobile] = useState(isMobile);

	const windowSizeHandler = () => {
		setIsMobile(window.matchMedia("(max-width: 576px)").matches);
	};

	const scrollDownHandler = () => {
		const { x, y } = document
			.getElementById("aboutSection")
			.getBoundingClientRect();

		const navHeight = document.querySelector("nav").clientHeight;

		window.scrollTo(x, y - navHeight + window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("resize", windowSizeHandler);
	});

	if (isMobileDevice) {
		return (
			<>
				<header className={classes.mobiHeader}>
					<div className={classes["mobiHeader__title"]}>
						<img
							src={logo}
							alt='logo of cafe'
							className={classes["mobiHeader__logo"]}
						/>
						<h2>Company Name</h2>
					</div>
					<div className={classes["mobiHeader__content"]}>
						<h1>Find the best coffee for you!</h1>
						<FontAwesomeIcon
							onClick={scrollDownHandler}
							icon={faAnglesDown}
							className={classes["mobiHeader__icon"]}
						/>
					</div>
				</header>
				<main>
					<About></About>
					<Testimonials />
					<Newsletter />
					<Footer />
				</main>
			</>
		);
	} else {
		return (
			<>
				<header className={classes.desktopHeader}>
					<div className={classes["desktopHeader__title"]}>
						<img
							src={logo}
							alt='logo of cafe'
							className={classes["desktopHeader__logo"]}
						/>
						<h2>Company Name</h2>
					</div>
					<div className={classes["desktopHeader__content"]}>
						<h1 className={classes["desktopHeader__heading"]}>
							<TypewriterComponent
								onInit={(typewriter) => {
									typewriter
										.typeString("Find the best coffee for you!")
										.start();
								}}
							/>
						</h1>
						<p className={classes["desktopHeader__text"]}>
							Voluptatum vero iure at cupiditate ut! <br></br>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>
							Voluptatibus placea dolorem at eum accusantium. <br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit placea
						</p>
						<Link to='/services' className='btn btn--yellow'>
							Read more
						</Link>
					</div>
					<div className={classes["desktopHeader__side-content"]}>
						<p className={classes["desktopHeader__quote"]}>
							"It’s amazing how the world begins to change through the eyes of a
							cup of coffee"
						</p>
						<strong>Donna A. Favors</strong>
					</div>
				</header>
				<main>
					<About></About>
					<Testimonials />
					<Newsletter />
					<Footer />
				</main>
			</>
		);
	}
};

export default Home;
