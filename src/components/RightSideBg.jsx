import PropTypes from 'prop-types';

export default function RightSideBg({className}) {
  return (
    <img
            src="../../rightbg.svg"
            alt="Right Side Decoration"
            className={className}
        />
  )
}

RightSideBg.propTypes = {
    className: PropTypes.string.isRequired
};

