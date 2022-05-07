import classes from "./ServicesMenu.module.scss";
import "../../scss/typography.scss";
import { servicesMenu } from "../../data";

const ServicesMenu = () => {
	return (
		<section className={classes.ServicesMenu}>
			<h2 data-aos='fade-up' className={`section-heading`}>
				Coffee menu
			</h2>
			<div className={classes.menuContainer}>
				{servicesMenu.map((item, index) => {
					return (
						<figure
							data-aos='fade-up'
							data-aos-delay={`${index * 100}`}
							className={classes.menuItem}
							key={index}
						>
							<img src={item.photo} alt={item.name} className={classes.image} />
							<div className={classes.content}>
								<div key={index} className={classes.title}>
									<h4 className={classes.itemHeading}>{item.name}</h4>
									<span className={classes.price}>${item.price}</span>
								</div>
								<figcaption className={classes.description}>
									{item.description}
								</figcaption>
							</div>
						</figure>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesMenu;
