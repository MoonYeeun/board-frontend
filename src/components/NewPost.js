import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
    const [title, setTitle] = useState(''); // title
    const [content, setContent] = useState(''); // content
    const [author, setAutor] = useState(''); // author

    const handleSubmit = () => {
        if(title === '' || content === '' || author === '') alert('모든 내용을 다 입력하세요');
        else {
            const body = {
                title: title,
                content: content,
                author: author
            }
            axios.post("/api/posts", body)
            .then(res => {
                alert(res.data);
                window.location.href="/"
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.container}>
                <label style={styles.label}>제목</label>
                <input style={styles.input} onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </div>
            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                <input style={styles.input} onChange={(e) => setAutor(e.target.value)} value={author}></input>
            </div>
            <textarea style={styles.textarea} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
            <div style={styles.container}>
                <label style={styles.label}>첨부파일</label>
                <input style={styles.input} type="file"></input>
            </div>
            <div>
                <button style={styles.okBtn} type="submit">ok</button>
                <Link to="/" style={styles.cancelBtn}>cancel</Link>
            </div>
        </form>
    )
}

const styles = {
    form : {
        position: 'absolute',
        width: '100%',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        padding: '5px',
        alignItems: 'center',
    },
    label: {
        flex: 0.4,
        textAlign: 'center'
    },
    input: {
        flex: 0.6,
        padding: '.3em .5em', /* 여백으로 높이설정 */
    },
    textarea: {
        width: '60%',
        height: '300px',
        marginTop: '10px'
    },
    okBtn: {
        width: '70px',
        marginTop: '20px',
        marginLeft: '10px',
        border: 'none',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#f8f9fa',
        background: '#343a40',
        padding: '.3em', /* 여백으로 높이설정 */
    },
    cancelBtn: {
        width: '70px',
        marginTop: '20px',
        marginLeft: '10px',
        border: '1px solid black',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#343a40',
        background: '#f8f9fa',
        padding: '.3em', /* 여백으로 높이설정 */
        textDecoration: 'none'
    }
}
export default NewPost;