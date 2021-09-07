import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
