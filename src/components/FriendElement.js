import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const FriendElement = ({ friendObject, onClickStar, onClickDelete }) => {
  return (
    <div className='friend-wrapper'>
      <div className='friend-name-wrapper'>
        <div className='friend-name'>{friendObject.name}</div>
        <div className='friend-help-text'> is your friend</div>
      </div>
      <div className='actions'>
        {friendObject.isStarred ? (
          <AiFillStar
            className='star filled'
            onClick={() => {
              onClickStar(friendObject, 'unstar')
            }}
          />
        ) : (
          <AiOutlineStar
            className='star'
            onClick={() => {
              onClickStar(friendObject, 'star')
            }}
          />
        )}
        <RiDeleteBin6Line
          className='delete'
          onClick={() => {
            onClickDelete(friendObject)
          }}
        />
      </div>
    </div>
  )
}

export default FriendElement
