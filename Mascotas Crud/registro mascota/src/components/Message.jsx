function Message({ text, type = 'info' }) {
  return <div className={`message ${type}`}>{text}</div>;
}

export default Message;
