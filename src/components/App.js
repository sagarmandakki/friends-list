import { Component } from 'react'
import '../styles/App.css'
import FriendElement from './FriendElement'
import Pagination from './Pagination'

class FriendsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friendsList: [],
      searchText: '',
      currentPage: 1,
      itemsPerPage: 4,
    }
  }

  componentDidMount() {
    this.setState({
      friendsList: [
        { name: 'Janice Shepherd', isStarred: true },
        { name: 'Shiba Lopex', isStarred: false },
        { name: 'Botez Alex', isStarred: true },
        { name: 'John Doe', isStarred: true },
        { name: 'Jane Doe', isStarred: false },
        { name: 'Chloe Barnes', isStarred: true },
        { name: 'Rocket Alex', isStarred: false },
        { name: 'Thor', isStarred: true },
        { name: 'Thanos was right', isStarred: true },
      ],
    })
  }

  onChangeSearchText = (e) => {
    const { value } = e.target
    this.setState({
      searchText: value,
    })
  }

  onClickDelete = (friendObj) => {
    const { name: friendNameToDelete } = friendObj

    const doDelete = window.confirm(
      `Are you sure you want to delete ${friendNameToDelete}?`
    )
    if (doDelete) {
      const { friendsList } = this.state

      this.setState({
        friendsList: friendsList.filter(
          (friendEle) => friendEle.name !== friendNameToDelete
        ),
      })
    }
  }

  onClickStar = (starClickedfriend, action) => {
    const { friendsList } = this.state

    const newFriendsList = friendsList.map((friend) => {
      if (friend.name === starClickedfriend.name) {
        friend.isStarred = action === 'star'
      }

      return friend
    })
    this.setState({
      friendsList: newFriendsList,
    })
  }

  handlePageNumberClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    })
  }

  onClickSort = () => {
    const { friendsList } = this.state
    
    let newFriendsList = friendsList.sort((itemA, itemB) => {
      
      return itemA.isStarred && !itemB.isStarred ? -1 : !itemA.isStarred && itemB.isStarred? 1 : 0
    })
  
    this.setState({
      friendsList: newFriendsList
    })
  }

  render() {
    const { friendsList, searchText, currentPage, itemsPerPage } = this.state

    const friendsListToShow = friendsList.filter((element) => {
      const nameUpperCase = element.name.toUpperCase()
      const searchTextUpperCase = searchText.toUpperCase()

      return nameUpperCase.indexOf(searchTextUpperCase) !== -1
    })

    // Logic for displaying friendsListToShow
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = friendsListToShow.slice(
      indexOfFirstItem,
      indexOfLastItem
    )

    return (
      <div className='main-content-wrapper'>
        <div className='header'>Friends List</div>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder="Enter your friend's name"
            value={searchText}
            onChange={this.onChangeSearchText}
          />
        </div>
        <div className='friend-list-wrapper'>
          {currentItems.map((friend, index) => {
            return (
              <FriendElement
                key={index}
                friendObject={friend}
                onClickStar={this.onClickStar}
                onClickDelete={this.onClickDelete}
              />
            )
          })}

          <div className='footer-wrapper'>
            <div className='pagination-wrapper'>
              <Pagination
                friendsListToShow={friendsListToShow}
                itemsPerPage={itemsPerPage}
                handlePageNumberClick={this.handlePageNumberClick}
              />
            </div>

            <div className='sort-wrapper'>
              <input type="button" value="Sort by Favourites" onClick={this.onClickSort}/>
            </div>
          </div>
          {friendsListToShow.length === 0 && <div>No friends found!</div>}
        </div>
      </div>
    )
  }
}

export { FriendsList }
