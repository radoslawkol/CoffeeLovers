import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import classes from "./AccordionItem.module.scss";
import { useState } from "react";

const AccordionItem = ({ question, answer }) => {
	const [isContentOpen, setIsContentOpen] = useState(false);
	const showContentHandler = () => {
		setIsContentOpen((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className={classes.AccordionItem}>
			<div className={classes.title} onClick={showContentHandler}>
				<p>{question}</p>
				{!isContentOpen && (
					<FontAwesomeIcon icon={faPlus} className={classes.icon} />
				)}
				{isContentOpen && (
					<FontAwesomeIcon icon={faMinus} className={classes.icon} />
				)}
			</div>
			{isContentOpen && (
				<div className={classes.content}>
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default AccordionItem;
