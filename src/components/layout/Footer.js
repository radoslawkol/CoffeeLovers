import classes from "./Footer.module.scss";
import logo from "../../images/coffee-beans.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { NewsletterModalContext } from "../../store/newsletterModal-context";
import { useContext, useRef } from "react";

const Footer = () => {
	const inputRef = useRef();
	const modalCtx = useContext(NewsletterModalContext);
	const openModalHandler = () => {
		modalCtx.openModal();
		inputRef.current.value = "";
	};

	return (
		<footer className={classes.Footer}>
			<div className={classes.logoContainer}>
				<div data-aos='fade-right' className={classes.logo}>
					<img src={logo} alt='logo of cafe' className={classes.logoImg} />
					<h2 className={classes.logoName}>Logo</h2>
				</div>
				<div className={classes.line} />
			</div>
			<div className={classes.info}>
				<p data-aos='fade-up' className={classes.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat egestas
					volutpat nisl nulla dignissim volutpat quam ac cursus. Aenean odio est
					tincidunt phasellus accumsan commodo. Pharetra varius pulvinar non
					vulputate feugiat. Id cras eget diam libero lacus. Quam eget pulvinar
					non mi nibh tincidunt.
				</p>
				<Link
					data-aos='fade-up'
					to='/about'
					className={`${classes.btn} btn btn--yellow`}
				>
					Read more
				</Link>
			</div>
			<div className={classes.socialsContainer}>
				<h3 data-aos='fade-up'>Social Media</h3>
				<div className={classes.socials}>
					<a
						data-aos='fade-up'
						data-aos-delay='100'
						target='_blank'
						href='https://www.facebook.com/'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faFacebook} className={classes.icon} />
					</a>
					<a
						data-aos='fade-up'
						data-aos-delay='200'
						target='_blank'
						href='https://www.instagram.com/'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faInstagram} className={classes.icon} />
					</a>
					<a
						data-aos='fade-up'
						data-aos-delay='300'
						target='_blank'
						href='https://www.reddit.com/'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faReddit} className={classes.icon} />
					</a>
				</div>
			</div>
			<div className={classes.newsletterContainer}>
				<h3 data-aos='fade-up'>Sign up to our Newsletter</h3>
				<div>
					<div data-aos='fade-right' className={classes.inputContainer}>
						<input
							type='email'
							className={classes.input}
							placeholder='email'
							ref={inputRef}
							onChange={(e) => modalCtx.setUserEmail(e.target.value)}
						/>

						<button
							onClick={openModalHandler}
							className={`${classes.btnInput} btn btn--yellow`}
						>
							Subscribe
						</button>
					</div>
					<p data-aos='fade-left' className={classes.text}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
						consequatur ratione tempora perferendis rerum nobis? Repudiandae
						necessitatibus dolorum, consequuntur numquam unde possimus. Natus
						cumque nobis mollitia molestiae modi laboriosam libero.
					</p>
				</div>
			</div>
			<div className={classes.copyrights}>
				<p className={classes.copy}>
					Copyrights: @ 2022 LoveCoffee. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
