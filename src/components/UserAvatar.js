import React from 'react';

function UserAvatar({ imageUrl, username }) {
    return (
        <div className="user-avatar">
            <img src={imageUrl} alt={username} />
            <span>{username}</span>
        </div>
    );
}

export default UserAvatar;
