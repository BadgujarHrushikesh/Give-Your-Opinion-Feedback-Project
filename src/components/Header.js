function Header({ text, bgColor, textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor


    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h4>{text}</h4>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'feedback',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}


export default Header;