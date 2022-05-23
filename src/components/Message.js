function Message(props) {

  const { num, children } = props
  console.log(props)

  return (
    <div>
      {num}: {children}
    </div>
  )

}

export default Message

