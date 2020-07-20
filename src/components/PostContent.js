import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostContent = ({location}) => {
    const {id, title, content, author } = location.state;
    const [isEdit, setEdit] = useState(false);
    const [inputTitle, setTitle] = useState(title);
    const [inputContent, setContent] = useState(content);

    // 게시글 삭제
    const handleDelete = (id) => {
        const url = "/api/posts/" + id;

        axios.delete(url)
        .then(res => {
            window.location.href="/"
        })
        .catch(error => {
          console.log(error);
        })
    }

    // 게시글 수정
    const handleUpdate = () => {
        const url = "/api/posts/" + id;
        const body = {
            title : inputTitle,
            content: inputContent
        }

        axios.put(url, body).then()
        .catch(error => {
          console.log(error);
        })
        setEdit(false);
    }

    return (
        <div style={styles.form}>
            <div style={styles.container}>
                <label style={styles.label}>제목</label>
                {
                    isEdit === false ? <div style={styles.content}>{inputTitle}</div>
                    : <input style={styles.content} onChange={(e) => setTitle(e.target.value)}></input>
                }
            </div>
            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                <div style={styles.content}>{author}</div>
            </div>
            {
                isEdit === false ? <div style={styles.textarea}>{inputContent}</div>
                :  <textarea style={styles.textarea} onChange={(e) => setContent(e.target.value)}></textarea>
            }
            <div style={styles.container}>
                <label style={styles.label}>첨부파일</label>
                <input style={styles.input} type="file"></input>
            </div>
            <div>
                {
                    isEdit === false ? (
                        <div>
                            <button style={styles.Btn} onClick={() => setEdit(true)}>수정</button>
                            <button style={styles.Btn} onClick={() => handleDelete(id)}>삭제</button>
                            <Link to="/" style={styles.cancelBtn}>목록</Link>
                        </div>
                    ) :
                    (
                        <div>
                            <button style={styles.Btn} onClick={handleUpdate}>완료</button>
                            <button style={styles.Btn} onClick={() => setEdit(false)}>취소</button>
                        </div>
                    )
                }
            </div>
        </div>
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
    content: {
        flex: 0.6,
        padding: '.3em .5em', /* 여백으로 높이설정 */
    },
    textarea: {
        width: '60%',
        height: '300px',
        marginTop: '10px'
    },
    Btn: {
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
export default PostContent;