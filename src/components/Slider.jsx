import "../sass/Slider.scss";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { sliderItems } from "../data.js";
import { useState } from "react";

const Slider = (props) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleArrowClick = (direction) => {
		if (direction === "left") {
			slideIndex > 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(sliderItems.length - 1);
		} else if (direction === "right") {
			slideIndex < sliderItems.length - 1 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0);
		}
	};
	return (
		<div className="slider">
			<div className="slide-container" slide-index={slideIndex}>
				{sliderItems.map((sld, idx) => (
					<div
						className="slide"
						key={sld.id}
						style={{
							backgroundColor: "#" + sld.bg,
							zIndex: idx === slideIndex ? "1" : "0",
							opacity: idx === slideIndex ? "1" : "0",
						}}>
						<div className="img-parent">
							<img src={sld.img} alt="" />
							<div className="img-background"></div>
						</div>
						<div className="info">
							<h2 className="title">{sld.title}</h2>
							<p className="desc">{sld.desc}</p>
							<button className="btn">
								Shop Now <ArrowRightIcon className="icon" />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="slider__indicator">
				<div
					className="left"
					onClick={() => {
						handleArrowClick("left");
					}}>
					<ArrowLeftIcon className="icon" />
				</div>
				<div
					className="right"
					onClick={() => {
						handleArrowClick("right");
					}}>
					<ArrowRightIcon className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Slider;
