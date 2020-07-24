import React from "react";
import "../stylesheets/Landing.scss";
import Card from "../components/Card";
import room from "../assets/stock photos/room1.jpg";
import room2 from "../assets/stock photos/room2.jpg";
import room3 from "../assets/stock photos/room3.jpg";
import room4 from "../assets/stock photos/room4.jpg";
import convenient from "../assets/images/convenient.png";
import quick from "../assets/images/quick.png";
import easy from "../assets/images/easy.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <div className="background-container">
        <nav className="nav">
          <h1 className="word-logo">Alfheim</h1>
          <button>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign In
            </Link>
          </button>
        </nav>
        <div className="hero-section">
          <div className="site-description">
            <h1>Seaching For Rooms Without The Hassel</h1>
            <p>
              Having gone through the struggle of searching for a room to rent
              as a college student in Jamaica, I understand the struggle. So...I
              decided to do something about it.
            </p>
            <p>Thus, PROJECT ALFHEIM was born</p>
            <button>View Gallary</button>
          </div>
          <div className="site-images">
            <img src={room} alt="room" className="image" />
            <img src={room2} alt="room" className="image2" />
            <img src={room3} alt="room" className="image3" />
            <img src={room4} alt="room" className="image4" />
          </div>
        </div>
        <section>
          <Card title="Quick" img={quick} />
          <Card title="Easy" img={easy} />
          <Card title="Convenient" img={convenient} />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
