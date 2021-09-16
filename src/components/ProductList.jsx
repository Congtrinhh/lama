import { popularProducts } from "../data.js";
import "../sass/ProductList.scss";
import Product from "./Product";

const ProductList = () => {
	return (
		<div className="products">
			{popularProducts.map((p) => (
				// <div className="wrapper" key={p.id}>
				// 	<div className="product">
				// 		<img src={p.img} alt="" />
				// 		<div className="buttons">
				// 			<div className="cart-btn">
				// 				<ShoppingCartOutlinedIcon />
				// 			</div>
				// 			<div className="search-btn">
				// 				<SearchOutlinedIcon />
				// 			</div>
				// 			<div className="favourite-btn">
				// 				<FavoriteBorderOutlinedIcon />
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>
				<Product product={p} key={p.id} />
			))}
		</div>
	);
};

export default ProductList;
