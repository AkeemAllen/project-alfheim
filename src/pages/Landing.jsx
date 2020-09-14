import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";
import room from "../assets/stock photos/room1.jpg";
import logo from "../assets/Logo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Landing = ({ auth, firstname }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.nav}>
          <h1 style={{ fontFamily: "Lobster", color: "white" }}>Alfheim</h1>
          <div>
            {auth ? (
              <Link to="/account" className={classes.link}>
                <NormalButton text={firstname} />
              </Link>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  justifyContent: "flex-end",
                  columnGap: "1rem",
                }}
              >
                <Link to="/login" className={classes.link}>
                  <NormalButton text="Sign In" />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={classes.heroSection}>
          <animated.h1 className={classes.header}>
            Searching For Rooms Without The Hassel
          </animated.h1>
          <Link to="/gallary" className={classes.link}>
            <NormalButton
              text="View Gallary"
              color="51CB20"
              darkerColor="3E941C"
            />
          </Link>
          <Link
            to="/register"
            className={classes.link}
            style={{ marginTop: "1rem" }}
          >
            <NormalButton text="Sign Up To Advertise Your Room" />
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: "#F1F2FA" }}>
        <animated.img
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
          src={room}
          alt="room"
          className={classes.image}
        />
        <div
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          <h3 style={{ fontSize: "3rem" }}>About This Website</h3>
          <p className={classes.p}>
            Having gone through the struggle of searching for a room to rent as
            a college student in Jamaica, I understand the issue. So I decided
            to try building a solution.
          </p>
          <p className={classes.p}>
            On this platform{" "}
            <strong style={{ color: "#3E941C" }}>Landlords</strong> are able to
            create accounts and show off their rooms to prospective buyers. On
            the other hand
            <strong style={{ color: "#3E941C" }}> Students/Rentors</strong> are
            able to go through a large selection of rooms without having to
            leave their homes
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F1F2FA",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "10rem",
          paddingBottom: "1rem",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" width="50" style={{ marginRight: "5rem" }} />
        <p>
          Developed by Akeem Allen <strong>allenakeem8@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

Landing.propTypes = {
  auth: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  firstname: state.auth.firstname,
});

export default connect(mapStateToProps, [])(Landing);

const useStyles = createUseStyles({
  container: {
    height: "100vh",
    backgroundColor: "#F1F2FA",
  },
  background: {
    backgroundColor: "var(--main-color)",
    // borderBottomLeftRadius: "100%",
    // borderBottomRightRadius: "100%",
  },
  nav: {
    paddingTop: "1rem",
    display: "grid",
    gridTemplateColumns: "1fr 0.5fr",
    width: "70rem",
    margin: "auto",
  },
  heroSection: {
    display: "grid",
    justifyContent: "center",
    marginTop: "8rem",
    paddingBottom: "8rem",
  },
  header: {
    fontSize: "4rem",
    width: "43rem",
    textAlign: "center",
    fontWeight: 900,
    color: "white",
    marginBottom: "2rem",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "600px",
    height: "300px",
    borderRadius: "10px",
    margin: "auto",
    position: "relative",
    top: -80,
    boxShadow: "0px 0px 25px rgba(0,0,0,0.25)",
  },
  p: {
    margin: "auto",
    fontSize: "1.2rem",
    marginTop: "1rem",
    maxWidth: "40rem",
    lineHeight: "2rem",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  },
});
