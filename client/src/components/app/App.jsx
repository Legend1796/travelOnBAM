import { useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/main";

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
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" Component={Main} />
			</Routes>
		</div>
	);
}

export default App;
