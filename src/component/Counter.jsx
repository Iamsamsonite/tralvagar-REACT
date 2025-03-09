import React from 'react'

const Counter = (props) => {
    const name = props.name
    const email = props.email
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>can i please get your {email}</p>
    </div>
  )
}

export default Counter
