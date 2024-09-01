import PropTypes from 'prop-types';

export default function TopLeftBg({className}) {
    return (
        <img
            src="./src/assets/images/topleft.svg"
            alt="Top Left Decoration"
            className={className}
        />
    )
}

TopLeftBg.propTypes = {
    className: PropTypes.string.isRequired
};
