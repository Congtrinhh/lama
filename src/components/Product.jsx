import "../sass/Product.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const Product = (props) => {
	return (
		<div className="wrapper" key={props.product.id}>
			<div className="product">
				<img src={props.product.img} alt="" />
				<div className="buttons">
					<div className="cart-btn">
						<ShoppingCartOutlinedIcon />
					</div>
					<div className="search-btn">
						<SearchOutlinedIcon />
					</div>
					<div className="favourite-btn">
						<FavoriteBorderOutlinedIcon />
					</div>
				</div>
				<div className="circle"></div>
			</div>
		</div>
	);
};

export default Product;
