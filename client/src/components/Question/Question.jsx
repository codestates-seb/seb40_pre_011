import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Vector from '../../images/Vector.png';
import '@toast-ui/editor/dist/toastui-editor.css';
import { asynclistupFetch } from '../../action/asynclistFetch';

const Section = styled.section`
  .tagbox {
  }
  .fobox {
    display: flex;
    width: 100%;
    height: 35px;
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
  #foinbox {
    width: 100%;
    border: none;
    outline: none;
    margin-left: 10px;
  }
  #taginput {
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    &:focus {
      border: 1px solid #38a9f0;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
      color: var(--black-900);
      outline: 0;
    }
  }
  .tags {
    display: inline-flex;
    align-items: center;
    margin: 4px;
    padding: 4px;
    border: none;
    color: rgb(57, 115, 157);
    background-color: rgb(225, 236, 244);
    border-radius: 3px;
    font-size: 12px;
    cursor: auto;
    > button {
      margin-left: 5px;
      border: none;
      font-size: 15px;
      color: rgb(57, 115, 157);
      background-color: rgb(225, 236, 244);
      cursor: pointer;
    }
  }
`;

function Question() {
  const editorRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(false);
  const [tagb, setTagB] = useState(false);
  const [body, setBody] = useState(false);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const hadleTitle = e => {
    if (e.target.value.length < 15) {
      setTitle(false);
    } else {
      setTitle(true);
    }
    setTitleValue(e.target.value);
  };
  const handleBody = () => {
    const data = editorRef.current.getInstance().getMarkdown();

    if (data.length === 0) {
      setBodyValue('');
    }
    if (data.length < 15) {
      setBody(false);
    } else {
      setBody(true);
    }
    setBodyValue(data);
  };
  const handleClick = () => {
    if (
      tags.length === 0 &&
      titleValue.length >= 15 &&
      bodyValue.length >= 15
    ) {
      setTagB(false);
    }
    if (
      tags.length !== 0 &&
      titleValue.length !== 0 &&
      bodyValue.length !== 0
    ) {
      const updata = [titleValue, bodyValue, tags];
      dispatch(asynclistupFetch(updata));
      navigate('/');
    }
  };
  const handleTag = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const updatedTagList = [...tags];
      updatedTagList.push(tag);
      setTags(updatedTagList);
      setTagB(true);
      setTag('');
    }
  };
  const handleTagDelete = tagfil => {
    const filtertag = tags.filter(data => data !== tagfil);
    setTagB(!tagb);
    setTags(filtertag);
  };
  return (
    <Section className="question">
      <div className="box">
        <section className="boxtitle">
          <label htmlFor="titleinput" className="sc-label-head">
            Title
          </label>
          <p className="boxheadcontent">
            Be specific and imagine you’re asking a question to another person
          </p>
          <input
            id={titleValue.length !== 0 && !title ? 'notitle' : 'titleinput'}
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            value={titleValue || ''}
            onChange={e => hadleTitle(e)}
          />
          <p className={titleValue === '' || title ? 'no' : 'on'}>
            Title must be at least 15 characters.
          </p>
          <label htmlFor="bodyinput" className="sc-label-head">
            Body
          </label>
          <p className="boxheadcontent">
            Include all the information someone would need to answer your
            question
          </p>
          <Editor
            id="bodyinput"
            initialValue=" "
            placeholder="내용을 입력해주세요."
            previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            ref={editorRef}
            onChange={() => handleBody()}
          />
          <br />
          <p className={body || bodyValue.length === 0 ? 'no' : 'on'}>
            Body must be at least 15 characters.
          </p>
          <br />
          <label htmlFor="taginput" className="sc-label-head">
            Tag
          </label>
          <p className="boxheadcontent">
            Add up to 5 tags to describe what your question is about
          </p>
          <div className={tags.length !== 0 ? 'fobox' : 'tagbox'}>
            {tags.map(data => {
              return (
                <div className="tags">
                  <p>{data}</p>
                  <button onClick={() => handleTagDelete(data)}>x</button>
                </div>
              );
            })}
            <input
              id={tags.length !== 0 ? 'foinbox' : 'taginput'}
              placeholder="e.g. (angular sql-server string)"
              value={tag}
              onChange={e => {
                setTag(e.target.value);
              }}
              onKeyUp={e => handleTag(e)}
            />
          </div>
          <p className={tagb || tag === '' ? 'no' : 'on'}>
            Please enter one tag.
          </p>
        </section>
        <aside className="boardaside">
          <div className="writegoodtitle">
            <span className="goodtitle">Writing a good title</span>
            <div className="content-p">
              <img src={Vector} alt="연필사진" className="asideImg" />
              <div className="cotent-p-box">
                <p>Your title should summarize the problem.</p>
                <p>
                  You might find that you have a better idea of your title after
                  writing out the rest of the question.
                </p>
              </div>
            </div>
          </div>
          <div className="writegoodbody">
            <span className="goodtitle">Introduce the problem</span>
            <div className="content-p">
              <img src={Vector} alt="연필사진" className="asideImg" />
              <div className="cotent-p-box">
                <p>
                  Explain how you encountered the problem you’re trying to
                  solve, and any difficulties that have prevented you from
                  solving it yourself.
                </p>
              </div>
            </div>
          </div>
          <div className="writegoodtag">
            <span className="goodtitle">Expand on the problem</span>
            <div className="content-p">
              <img src={Vector} alt="연필사진" className="asideImg" />
              <div className="cotent-p-box">
                <p>
                  Show what you’ve tried, tell us what happened, and why it
                  didn’t meet your needs.
                </p>
                <p>
                  Not all questions benefit from including code, but if your
                  problem is better understood with code you’ve written, you
                  should include a minimal, reproducible example.
                </p>
                <p>
                  Please make sure to post code and errors as text directly to
                  the question (and not as images), and format them
                  appropriately.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <button
        disabled={!tagb || !title || !body}
        onClick={() => handleClick()}
        className={tagb && title && body ? 'able' : null}
      >
        Review your question
      </button>
    </Section>
  );
}
export default Question;
