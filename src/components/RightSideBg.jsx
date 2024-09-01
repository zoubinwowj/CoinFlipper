import PropTypes from 'prop-types';

export default function RightSideBg({className}) {
  return (
    <img
            src="/src/assets/images/rightbg.svg"
            alt="Right Side Decoration"
            className={className}
        />
  )
}

RightSideBg.propTypes = {
    className: PropTypes.string.isRequired
};

