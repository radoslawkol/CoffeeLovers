import classes from "./Directions.module.scss";

const Directions = () => {
	return (
		<section className={classes.Directions}>
			<h2 className={`section-heading ${classes.heading}`}>Directions</h2>
			<div className={classes.wrapper}>
				<div className={classes.mapContainer}>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13476.028887345747!2d-117.88863010863017!3d33.73358112123944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd8e460893ecd%3A0xbfbfb5677bf93656!2sBristol%20Swap%20Mall!5e0!3m2!1spl!2spl!4v1651413940302!5m2!1spl!2spl'
						width='300'
						height='300'
						style={{ border: "0" }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='map'
					></iframe>
				</div>
				<div className={classes.directionsContainer}>
					<div className={classes.group}>
						<h3>Address</h3>
						<p>2972 Westheimer Rd. Santa Ana</p>
						<p>Illinois 85486</p>
					</div>
					<div className={classes.group}>
						<h3>Call us</h3>
						<p>(406) 555-0120</p>
						<p>(480) 555-0103</p>
					</div>
					<div className={classes.group}>
						<h3>Business Hours</h3>
						<p>Mon-Sat - 8:00 am - 10:00 pm</p>
						<p>Sunday - 12:00 - 6:00 pm</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Directions;
