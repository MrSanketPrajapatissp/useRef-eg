// CardWrapper.js

import PropTypes from "prop-types";

const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired, // corrected the syntax replace obj to node
};

export default CardWrapper;
