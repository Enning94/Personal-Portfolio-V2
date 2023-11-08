import React from 'react';
import PropTypes from 'prop-types';

const Skill = (props) => {
  const { Logo, label } = props;
  return (
    <div
      className="language-item d-flex justify-content-center align-items-center flex-column"
      data-aos="fade-left"
    >
      <div className="lang-icon d-flex justify-content-center align-items-center">
        <Logo />
      </div>
      <span className="lag-label">{label}</span>
    </div>
  );
};

Skill.propTypes = {
  Logo: PropTypes.string, // or any other appropriate type
  label: PropTypes.string, // or any other appropriate type
};

Skill.defaultProps = {
  Logo: null,
  label: null, // Provide a default value (in this case, null) to indicate it's optional
};
export default Skill;
