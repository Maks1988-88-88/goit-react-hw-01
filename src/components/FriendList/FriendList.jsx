import s from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
<ul className={s.friendList}>
    {friends.map(friend => 
    <FriendListItem
     key={friend.id}
     avatar={friend.avatar}
     name={friend.name}
     isOnline={friend.isOnline}
     />
    )}
</ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};


export default FriendList;