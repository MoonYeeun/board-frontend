import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

class PostItem extends Component {
    render() {
        const { id, title, author, content, modifiedDate } = this.props;

        return (
            <div className='postItem'>
                <div>{id}</div>
                <div>
                    <Link to={{
                        pathname: `/posts/${id}`,
                        state: {
                            id: id,
                            title: title,
                            content: content,
                            author: author,
                        }
                    }} className="link">{title}</Link>
                </div>
                <div>{author}</div>
                <div>{modifiedDate}</div>
            </div>
        )
    }
}

export default PostItem;