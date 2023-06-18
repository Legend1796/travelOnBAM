import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
	const [pageWidth, setPageWidth] = useState(
		document.documentElement.scrollWidth
	);
	window.onresize = newPageSize;

	const dispatch = useDispatch();

	function newPageSize() {
		setTimeout(() => {
			changePageWidth();
			setPageWidth(document.documentElement.scrollWidth);
		}, 1000);
	}

	const changePageWidth = () => {
		dispatch({
			type: "changePageWidth",
			payload: document.documentElement.scrollWidth,
		});
	};
	return <div className="App"></div>;
}

export default App;
