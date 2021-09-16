import "../sass/ProductShowcase.scss";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import NewsLetter from "../components/NewsLetter";

const Products = () => {
	return (
		<>
			<Header />
			<Announcement showBtn={false} />

			<div className="filter-container">
				<div className="header">Dresses</div>
				<div className="filter">
					<div className="left">
						<div className="header">Filter products</div>
						<select name="color" id="color" className="color">
							<option value="0" selected>
								White
							</option>
							<option value="1">Yellow</option>
						</select>
						<select name="size" id="size" className="size">
							<option value="0" selected>
								M
							</option>
							<option value="1">S</option>
						</select>
					</div>
					<div className="right">
						<div className="header">Sort products</div>
						<select name="sort" id="sort" className="sort">
							<option value="0" selected>
								Newest
							</option>
							<option value="1">Price (ASC)</option>
						</select>
					</div>
				</div>
			</div>

			<ProductList />
			<NewsLetter />
			<Footer />
		</>
	);
};

export default Products;
