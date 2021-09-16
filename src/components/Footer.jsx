import "../sass/Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = () => {
	return (
		<div className="footer">
			<div className="left">
				<h2>Công boutique</h2>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using 'Content here, content here', making it look like
					readable English.
				</p>
				<ul>
					<li>
						<a href="">
							<FacebookIcon />
						</a>
					</li>
					<li>
						<a href="">
							<InstagramIcon />
						</a>
					</li>
					<li>
						<a href="">
							<TwitterIcon />
						</a>
					</li>
					<li>
						<a href="">
							<PinterestIcon />
						</a>
					</li>
				</ul>
			</div>
			<div className="center">
				<h3>Useful links</h3>
				<div className="wrapper">
					<ul>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Man fashion</a>
						</li>
						<li>
							<a href="">Accessories</a>
						</li>
						<li>
							<a href="">Order tracking</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="">Cart</a>
						</li>
						<li>
							<a href="">Man fashion</a>
						</li>
						<li>
							<a href="">Wishlist</a>
						</li>
						<li>
							<a href="">Terms</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="right">
				<h3>Contact</h3>
				<div className="wrapper">
					<div className="location">
						<span className="icon">
							<RoomIcon />
						</span>
						98 Oxford street, London, UK
					</div>
					<div className="phone">
						<span className="icon">
							<PhoneIcon />
						</span>
						+84 346 134 678
					</div>
					<div className="mail">
						<span className="icon">
							<MailOutlineIcon />
						</span>
						contact@congtrinhh.com
					</div>
					<div className="payment">
						<img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
