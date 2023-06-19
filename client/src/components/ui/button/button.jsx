import "./button.css";

export const Button = ({ text, type }) => {
	return (
		<button class="custom-btn btn-3" type={type}>
			<span>{text}</span>
		</button>
	);
};
