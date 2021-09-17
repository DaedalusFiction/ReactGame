import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header>
            <p>{props.title} brah</p>
        </header>
    )

}

Header.defaultProps = {
    title: 'Yo',
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header;
