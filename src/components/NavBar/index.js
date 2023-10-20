import './index.css'

const NavBar = props => {
  const {score, topScore, dispHome, displayHome} = props
  console.log(dispHome)
  return (
    <nav className="nav-container">
      <li className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </li>
      {displayHome ? (
        <li className={`score-container ${dispHome}`}>
          <p className="score">{`Score: ${score}`}</p>
          <p>{`Top Score: ${topScore}`}</p>
        </li>
      ) : null}
    </nav>
  )
}

export default NavBar
