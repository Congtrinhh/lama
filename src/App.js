import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/ProductShowcase";

function App() {
	return (
		<BrowserRouter>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
		</BrowserRouter>
	);
}

export default App;
