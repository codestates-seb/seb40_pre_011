import AsideRight from '../../components/AsideRight/AsideRight';
import Header from '../../components/Header/Header';
import MainStyle from './MainStyle';
import AsideLeft from '../../components/AsideLeft/AsideLeft';
import Footer from '../../components/Footer/Footer';
import Mainhead from '../../components/Questions/Mainhead';
import MainQuestions from '../../components/Questions/MainQuestions';

export default function Mainpage() {
  return (
    <>
      <Header />
      <MainStyle>
        <AsideLeft className="asideleft" />
        <div className="Main">
          <Mainhead />
          <MainQuestions />
        </div>
        <AsideRight />
      </MainStyle>
      <Footer />
    </>
  );
}
