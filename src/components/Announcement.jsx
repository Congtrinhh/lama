import "../sass/Announcement.scss";
import { useState } from "react";

const Announcement = ({ showBtn }) => {
	const [isClosed, setIsClosed] = useState(false);

	const handleButtonClick = () => {
		setIsClosed(true);
	};

	return (
		<div className="announcement" style={{ display: isClosed === true ? "none" : "block" }}>
			<p>Super deal! Free shipping on Orders over 500000 vnd</p>
			<button onClick={handleButtonClick} style={{ display: showBtn === true ? "inline-block" : "none" }}>
				&times;
			</button>
		</div>
	);
};

Announcement.defaultProps = {
	showBtn: true,
};

export default Announcement;
