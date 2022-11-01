import AsideLeft from '../../components/AsideLeft/AsideLeft';
import AsideRight from '../../components/AsideRight/AsideRight';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import DetailBoard from '../../components/QuestionDetail/DetailBoard';
import DetailHead from '../../components/QuestionDetail/DetailHead';
import DetailMain from './DetailMain';

function QuestionDetail() {
  return (
    <>
      <Header />
      <DetailMain>
        <AsideLeft />
        <div>
          <section className="head">
            <DetailHead />
          </section>
          <section className="boardcontent">
            <DetailBoard className="left" />
            <AsideRight />
          </section>
        </div>
      </DetailMain>
      <Footer />
    </>
  );
}

export default QuestionDetail;
