import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import DetailSection from './DetailSection';
import DetailQuestion from './DetailQuestion';
import DetailAnswer from './DetailAnswer';

function DetailBoard() {
  return (
    <DetailSection>
      <DetailQuestion />
      <header>1 Answers</header>
      <DetailAnswer />
      <section className="answerboard">
        <span className="answerheader">Your Answer</span>
        <div className="AB">
          <Editor
            id="bodyinput"
            initialValue=" "
            placeholder="내용을 입력해주세요."
            previewStyle="vertical"
            height="300px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
          />
        </div>
      </section>
      <button className="answerbutton">Post Your Answer</button>
    </DetailSection>
  );
}

export default DetailBoard;
