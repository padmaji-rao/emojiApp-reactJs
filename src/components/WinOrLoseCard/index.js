import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, dispWinOrLoose, onPlayCliked} = props
  console.log(`is Win or Loose displayed :${dispWinOrLoose}`)
  const onClickPlayed = () => {
    onPlayCliked()
  }
  console.log(score, isWin)
  const displayScore = isWin ? score : score - 1
  const heading = isWin ? 'You Won' : 'You Lose'
  const scorePara = isWin ? 'Best Score' : 'Score'
  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className={`win-loose-container ${dispWinOrLoose}`}>
      <div className="details-container">
        <h1>{heading}</h1>
        <p className="score-para">{scorePara}</p>
        <p className="actual-score">{`${displayScore}/12`}</p>
        <div>
          <button onClick={onClickPlayed} className="play-again" type="button">
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
