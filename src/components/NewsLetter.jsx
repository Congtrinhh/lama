import "../sass/NewsLetter.scss";
import SendIcon from "@material-ui/icons/Send";

const NewLetter = () => {
	return (
		<div className="new-letter">
			<h2>Newsletter</h2>
			<p>Get timely update from your favourite products</p>
			<div className="form">
				<input type="email" placeholder="Your email" />
				<button>
					<SendIcon className="icon" />
				</button>
			</div>
		</div>
	);
};

export default NewLetter;
