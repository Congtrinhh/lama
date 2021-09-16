import { categories } from "../data.js";
import "../sass/Category.scss";

const Category = () => {
	return (
		<div className="category">
			{categories.map((c) => (
				<div className="item" key={c.id}>
					<img src={c.img} alt="" />
					<div className="info">
						<h3>{c.title}</h3>
						<button>Shop now</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;
