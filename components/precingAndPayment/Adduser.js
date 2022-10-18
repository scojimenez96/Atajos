import React from 'react'
import { Link } from 'react-router-dom'

export const Adduser = () => {
  const rowAddUser =
    [
      {
        id: 1,
        tittle: "Users",
        lineone: "2 users included with plan",
        linetwo: "Additional users at $149/user/month.",
        button: "Manage Users"
      },
      {
        id: 2,
        tittle: "Social Profiles",
        lineone: "10 social profiles includes with plan",
        linetwo: "Additional profiles at $25/user/month.",
        button: "Manage Social profiles"
      }
    ]
  return (
    <div className='content-addUser'>
      <h5>Add-Ons</h5>
      {
        rowAddUser.map(({ id, tittle, lineone, linetwo, button }) => (
          <div className='display-addUser' key={id} id={`addUser-${id}`}>
            <h5>{tittle}</h5>
            <div className='text-addUser'>
              <p>{lineone}</p>
              <p>{linetwo}</p>
            </div>
            <button className='proceed'>{button}</button>
          </div>
        ))
      }
    </div>
  )
}
