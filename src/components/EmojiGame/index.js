/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    scoreList: [],
    isWin: false,
    displayHome: true,
  }

  onEmojiClicked = id => {
    const {score, topScore, scoreList} = this.state
    console.log(score, topScore)

    if (scoreList.includes(id)) {
      console.log(`Includes-->true`)

      this.setState({displayHome: false})
    }
    if (!scoreList.includes(id) && score === 11) {
      console.log(`Winner`)
      this.setState({
        displayHome: false,
        isWin: true,
        score: scoreList.length - 2,
      })
    }
    this.setState(prevState => ({
      scoreList: [...prevState.scoreList, id],
      score: prevState.scoreList.length + 1,
    }))
  }

  onPlayCliked = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        score: 0,
        topScore: score - 1,
        scoreList: [],
        isWin: false,
        displayHome: true,
      })
    } else {
      this.setState({
        score: 0,
        topScore,
        scoreList: [],
        isWin: false,
        displayHome: true,
      })
    }
  }

  render() {
    const {score, topScore, scoreList, isWin, displayHome} = this.state
    console.log(scoreList)
    console.log(isWin, displayHome)
    const dispHome = displayHome ? '' : 'disp-home'
    const dispWinOrLoose = !displayHome ? '' : 'disp-home'
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojisList = shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar
          displayHome={displayHome}
          dispHome={dispHome}
          score={score}
          topScore={topScore}
        />
        <div className="bottom-container">
          <ul className={`emojis-container ${dispHome}`}>
            {emojisList.map(eachEmoji => (
              <EmojiCard
                onEmojiClicked={this.onEmojiClicked}
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
              />
            ))}
          </ul>
          <WinOrLoseCard
            onPlayCliked={this.onPlayCliked}
            dispWinOrLoose={dispWinOrLoose}
            score={score}
            isWin={isWin}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
