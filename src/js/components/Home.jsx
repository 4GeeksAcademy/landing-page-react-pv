import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import CardList from "./CardList";
import Footer from "./Footer";

//include images into your bundle


//create your first component
const Home = () => {
	return (
	 	<>
      		<NavBar />
			<Jumbotron />
			<CardList />
			<Footer />
    	</>
	);
};

export default Home;