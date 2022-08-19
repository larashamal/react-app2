// TODO: Set up a button component that receives 2 props:
// - label: the text that will be displayed on the button
// - onClick: the function that will be called when the button is clicked

import PropTypes from "prop-types";

export default function Button({ changeHandler }) {
  return (
    <button type="button" onClick={changeHandler}>
      Hello
    </button>
  );
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
