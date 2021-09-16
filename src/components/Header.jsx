import "../sass/Header.scss";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

const Header = () => {
	const [scrollingUp, setScrollingUp] = useState(false);

	return (
		<div id="header">
			<div className="container flex">
				<div className="left flex">
					<div className="form">
						<select name="" id="">
							<option value="">VND</option>
							<option value="">USD</option>
						</select>
					</div>
					<div className="search">
						<input type="text" placeholder="Search" />
						<SearchOutlinedIcon className="icon" />
					</div>
				</div>
				<div className="center">
					<div className="logo">Công boutique</div>
				</div>
				<div className="right">
					<ul className="flex">
						<li>
							<a href="">register</a>
						</li>
						<li>
							<a href="">sign in</a>
						</li>
						<li>
							<a href="">
								<Badge badgeContent={1} color="primary">
									<ShoppingCartOutlinedIcon />
								</Badge>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
