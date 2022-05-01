import React, { useState } from "react";

export const NewsletterModalContext = React.createContext({
	enteredEmail: "",
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	setUserEmail: () => {},
});

const NewsletterModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");

	const setUserEmail = (email) => {
		setEnteredEmail(email);
	};

	const openModalHandler = () => {
		setIsModalOpen(true);
	};
	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	const modalContext = {
		enteredEmail,
		isModalOpen,
		openModal: openModalHandler,
		closeModal: closeModalHandler,
		setUserEmail,
	};
	return (
		<NewsletterModalContext.Provider value={modalContext}>
			{children}
		</NewsletterModalContext.Provider>
	);
};

export default NewsletterModalProvider;
