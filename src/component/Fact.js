import React from 'react'

const Fact = ({ fact }) => {
  console.log(fact.user)
  return (
    <tr>
      <td style={tdStyle}>{fact.text}</td>
      <td>{fact.upvotes}</td>
      <td>
        {fact.user !== undefined &&
          `${fact.user.name.first} ${fact.user.name.last} `}
      </td>
    </tr>
  )
}

const tdStyle = { width: '50%', padding: '10px' }

export default Fact
