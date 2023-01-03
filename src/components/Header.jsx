import Button from "./Button";
import PropTypes from "prop-types";
const Header = ({ title }) => {
  function clicked() {
    console.log("clicked!!!");
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={clicked} text="Add" bgColor="green" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
