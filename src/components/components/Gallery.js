import { galleryData } from "../../data";
import classes from "./Gallery.module.scss";
import "../../scss/button.scss";

const Gallery = () => {
	return (
		<div className={classes.Gallery}>
			{galleryData.map((item, index) => {
				return (
					<div className={classes.card} key={index}>
						<img src={item.photo} alt='coffee' className={classes.image} />
						{item.tags.map((tag, index) => {
							return (
								<button
									className={`${classes.tag} btn btn--yellow`}
									key={index}
								>
									{tag}
								</button>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
