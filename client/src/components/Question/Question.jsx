import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import Vector from '../../images/Vector.png';
import '@toast-ui/editor/dist/toastui-editor.css';

const Section = styled.section``;

function Question() {
  return (
    <Section className="box">
      <section className="boxtitle">
        <label htmlFor="titleinput" className="sc-label-head">
          Title
        </label>
        <p className="boxheadcontent">
          Be specific and imagine you’re asking a question to another person
        </p>
        <input
          id="titleinput"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        />
        <label htmlFor="bodyinput" className="sc-label-head">
          Body
        </label>
        <p className="boxheadcontent">
          Include all the information someone would need to answer your question
        </p>
        <Editor
          id="bodyinput"
          initialValue=" "
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
        />
        <br />
        <label htmlFor="taginput" className="sc-label-head">
          Tag
        </label>
        <p className="boxheadcontent">
          Add up to 5 tags to describe what your question is about
        </p>
        <input id="taginput" placeholder="e.g. (angular sql-server string)" />
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
                Explain how you encountered the problem you’re trying to solve,
                and any difficulties that have prevented you from solving it
                yourself.
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
                Show what you’ve tried, tell us what happened, and why it didn’t
                meet your needs.
              </p>
              <p>
                Not all questions benefit from including code, but if your
                problem is better understood with code you’ve written, you
                should include a minimal, reproducible example.
              </p>
              <p>
                Please make sure to post code and errors as text directly to the
                question (and not as images), and format them appropriately.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </Section>
  );
}
export default Question;
