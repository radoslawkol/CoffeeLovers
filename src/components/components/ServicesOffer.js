import classes from "./ServicesOffer.module.scss";
import image from "../../images/Services-image.jpg";

const ServicesOffer = () => {
	return (
		<section className={classes.ServicesOffer}>
			<div className={classes.container}>
				<div className={classes.imageContainer}>
					<img src={image} alt='coffee and beans' className={classes.image} />
				</div>
				<div className={classes.content}>
					<div className={classes.group}>
						<h3 className={classes.heading}>100% Delicous</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
							massa tortor duis sapien. Orci pulvinar proin nunc fusce.
							Consequat dignissim volutpat a nisi. Integer quis ornare volutpat.
						</p>
					</div>
					<div className={classes.group}>
						<h3 className={classes.heading}>Spiced coffee</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
							massa tortor duis sapien. Orci pulvinar proin nunc fusce.
							Consequat dignissim volutpat.
						</p>
					</div>
					<div className={classes.group}>
						<h3 className={classes.heading}>Hot Offer</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
							massa tortor duis sapien. Orci pulvinar proin nunc fusce.
							Consequat dignissim volutpat. pulvinar proin nunc fusce. Consequat
							dignissim volutpat.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesOffer;
