import Announcement from "../components/Announcement";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
	return (
		<>
			<Announcement />
			<Header />
			<Slider />
			<Category />
			<ProductList />
			<NewsLetter />
			<Footer />
		</>
	);
};

export default Home;
