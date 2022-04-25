import classes from "./Navigation.module.scss";
import { useEffect, useState } from "react";
import logo from "../images/coffee-beans.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuOpenHandler = () => {
		setIsOpen((prevState) => {
			return !prevState;
		});
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "scroll";
		}
	}, [isOpen]);

	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>
				<img className={classes.logo__img} src={logo} alt='Logo of cafe' />
				<p className={classes.logo__name}>Logo</p>
			</div>
			<button onClick={menuOpenHandler} className={classes.hamburgerBtn}>
				{!isOpen && <FontAwesomeIcon icon={faBars} />}
				{isOpen && <FontAwesomeIcon icon={faXmark} />}
			</button>
			<ul className={`${classes.list} ${isOpen ? classes.open : ""}`}>
				<li>
					<NavLink className={classes.link} to='/' onClick={menuOpenHandler}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={classes.link}
						to='/about'
						onClick={menuOpenHandler}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={classes.link}
						to='/services'
						onClick={menuOpenHandler}
					>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink
						className={classes.link}
						to='/gallery'
						onClick={menuOpenHandler}
					>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink
						className={classes.link}
						to='/contact'
						onClick={menuOpenHandler}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
