import React from 'react';
import './PostItem.css'

const PostListHeader = () => {
    return (
        <div style= {styles.header}>
            <p>No</p>
            <p>Title</p>
            <p>Name</p>
            <p>Date</p>
        </div>
    )
}

const styles = {
    header: {
        color: '#343a40',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '3px',
        borderBottom: '1px solid lightgray',
        textAlign: 'center',
        fontSize: '13px'
    }
}
export default PostListHeader;