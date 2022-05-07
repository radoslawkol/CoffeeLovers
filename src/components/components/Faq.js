import classes from "./Faq.module.scss";
import "../../scss/typography.scss";

import { faqData } from "../../data";

import AccordionItem from "./AccordionItem";

const Faq = () => {
	return (
		<section className={classes.Faq}>
			<h2
				data-aos='fade-up'
				data-aos-delay='200'
				className={`section-heading ${classes.heading}`}
			>
				Faq
			</h2>
			<div className={classes.accordion}>
				{faqData.map((item, index) => {
					return (
						<AccordionItem
							question={item.question}
							answer={item.answer}
							key={index}
							index={index}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Faq;
