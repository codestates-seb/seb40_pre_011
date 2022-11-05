import QuestionHead from './QuestionHead';
import QuestMain from './QuestMain';
import Questioncontent from './Questioncontent';
import Question from './Question';

function Questionsboard() {
  return (
    <QuestMain>
      <div className="maxwid">
        <QuestionHead />
        <Questioncontent />
        <Question />
      </div>
    </QuestMain>
  );
}

export default Questionsboard;
