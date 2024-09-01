import PropTypes from 'prop-types';

export default function PurpleStone({stone}) {
    return (
        <div className={stone} >
            <img src="../src/assets/images/goeyPurple.webp" alt="Purple" />
        </div>
    )
}

PurpleStone.propTypes = {
    stone: PropTypes.string.isRequired
};
