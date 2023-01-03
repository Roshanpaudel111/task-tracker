import PropTypes from "prop-types";

const Button = ({ text, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};
