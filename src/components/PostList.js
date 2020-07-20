import React, { Component } from 'react';
import PostItem from './PostItem';
import PostListHeader from './PostListHeader';

class PostList extends Component {
    // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.posts !== nextProps.posts;
    }
    render() {
        const { posts } = this.props;

        const postList = posts.map(
            ({id, title, author, content, modifiedDate}) => (
                <PostItem
                    id = {id}
                    title = {title}
                    author = {author}
                    content = {content}
                    modifiedDate = {modifiedDate}
                    key = {id}
                />
            )
        )
        return (
            <div>
                <PostListHeader></PostListHeader>
                {postList}
            </div>
        )
    }
}

export default PostList;