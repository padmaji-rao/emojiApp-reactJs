import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClicked} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickEmoji = () => {
    onEmojiClicked(id)
  }
  return (
    <li className="emoji-container">
      <button onClick={onClickEmoji} className="emoji-button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
