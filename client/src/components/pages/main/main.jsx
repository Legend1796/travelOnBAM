import React from "react";
import title from "./title.jpg";
import "./main.css";

const Main = () => {
	return (
		<div>
			<img src={title} alt="title image" className="main__bg" />
		</div>
	);
};

export default Main;
