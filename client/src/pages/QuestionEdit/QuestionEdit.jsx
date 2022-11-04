import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch, useSelector } from 'react-redux';
import { asyncEditFetch } from '../../action/asynclistFetch';
import AsideLeft from '../../components/AsideLeft/AsideLeft';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EditMain from './EditMain';
import '@toast-ui/editor/dist/toastui-editor.css';

function QuestionEdit() {
  const id = useParams();
  const selectdata = useSelector(state => state.content.data);
  const listdata = [];

  for (let i = 0; i < selectdata.length; i += 1) {
    if (selectdata[i].contentId === Number(id.id)) {
      listdata.push(selectdata[i]);
    }
  }

  const [title, setTitle] = useState(false);
  const [body, setBody] = useState(false);
  const [titleValue, setTitleValue] = useState(listdata[0].title);
  const [bodyValue, setBodyValue] = useState(listdata[0].body);
  const editorRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hadleTitle = e => {
    if (e.target.value.length < 15 && e.target.value.length >= 1) {
      setTitle(true);
    } else {
      setTitle(false);
    }
    setTitleValue(e.target.value);
  };
  const handleBody = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    if (data.length < 15 && data.length >= 1) {
      setBody(true);
    } else {
      setBody(false);
    }
    setBodyValue(data);
  };
  const handleClick = () => {
    const updata = [titleValue, bodyValue, Number(id.id)];
    dispatch(asyncEditFetch(updata));
    navigate('/');
  };
  return (
    <>
      <Header />
      <EditMain>
        <AsideLeft />
        <div className="box">
          <section className="boxtitle">
            <label htmlFor="titleinput" className="sc-label-head">
              Title
            </label>
            <p className="boxheadcontent">
              Be specific and imagine you’re asking a question to another person
            </p>
            <input
              id={title ? 'notitle' : 'titleinput'}
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              value={titleValue || ''}
              onChange={e => hadleTitle(e)}
            />
            <p className={title ? 'on' : 'no'}>
              Title must be at least 15 characters.
            </p>
            <div className="bodybox">
              <label htmlFor="bodyinput" className="sc-label-head">
                Body
              </label>
              <p className="boxheadcontent">
                Include all the information someone would need to answer your
                question
              </p>
              <Editor
                id="bodyinput"
                initialValue={bodyValue}
                placeholder="내용을 입력해주세요."
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={false}
                ref={editorRef}
                onChange={() => handleBody()}
              />
            </div>
            <p className={body ? 'on' : 'no'}>
              Body must be at least 15 characters.
            </p>
            <br />
            <label htmlFor="taginput" className="sc-label-head">
              Tag
            </label>
            <p className="boxheadcontent">
              Add up to 5 tags to describe what your question is about
            </p>
            <input
              id="taginput"
              placeholder="e.g. (angular sql-server string)"
              value={listdata[0].tags}
            />
          </section>
          <div className="buttons">
            <button
              className="editbutton"
              disabled={title && body}
              onClick={() => handleClick()}
            >
              Save Edit
            </button>
            <Link to="/" className="cancle">
              Cancle
            </Link>
          </div>
        </div>
      </EditMain>
      <Footer />
    </>
  );
}

export default QuestionEdit;
