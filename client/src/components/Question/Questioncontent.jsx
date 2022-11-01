import styled from 'styled-components';

const Section = styled.section``;

function Questioncontent() {
  return (
    <Section className="content">
      <p className="boxhead">Writing a good question</p>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
      </p>
      <p className="boxcontentend">
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </p>
      <h5 className="step">Steps</h5>
      <ul className="steps">
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>
          Add “tags” which help surface your question to members of the
          community.
        </li>
        <li>Review your question and post it to the site.</li>
      </ul>
    </Section>
  );
}

export default Questioncontent;
