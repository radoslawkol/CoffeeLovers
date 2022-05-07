import classes from "./ServicesCards.module.scss";
import { servicesData } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesCards = () => {
	return (
		<section className={classes.ServicesCards}>
			{servicesData.map((item, index) => {
				return (
					<div
						data-aos='flip-right'
						data-aos-delay={`${index * 100 + 150}`}
						className={classes.card}
						key={index}
					>
						<FontAwesomeIcon
							icon={item.icon}
							className={classes.icon}
						></FontAwesomeIcon>
						<h3 className={classes.title}>{item.type}</h3>
						<p className={classes.text}>{item.description}</p>
					</div>
				);
			})}
		</section>
	);
};

export default ServicesCards;
