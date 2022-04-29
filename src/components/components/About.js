import classes from "./About.module.scss";
import "../../scss/typography.scss";
import "../../scss/button.scss";
import photo1 from "../../images/About-photo-1.jpg";
import photo2 from "../../images/About-photo-2.jpg";
import photo3 from "../../images/About-photo-3.jpg";
import wave from "../../images/wave.svg";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section id='aboutSection' className={classes.About}>
			<h2 className='section-heading'>About us</h2>
			<div className={classes["About__container"]}>
				<p
					className={`${classes["About__text"]} ${classes["About__text--first"]}`}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
					pretium viverra venenatis at sed. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Mauris pretium viverra venenatis at sed.
				</p>
				<div className={classes["About__content-image"]}>
					<img
						src={photo1}
						alt='Coffee machine'
						className={classes["About__photo"]}
					/>
					<img
						src={photo2}
						alt='Waiter making coffee'
						className={classes["About__photo"]}
					/>
					<img
						src={photo3}
						alt='cups of coffee'
						className={classes["About__photo"]}
					/>
				</div>
				<p
					className={`${classes["About__text"]} ${classes["About__text--second"]}`}
				>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum.
				</p>
				<Link
					to='/about'
					className={`btn btn--yellow ${classes["About__btn"]}`}
				>
					Read More
				</Link>
			</div>
			<img src={wave} alt='Wave' className={classes["About__wave"]} />
		</section>
	);
};

export default About;
