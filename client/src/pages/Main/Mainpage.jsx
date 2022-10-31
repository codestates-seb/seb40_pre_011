import AsideRight from '../../components/AsideRight/AsideRight';
import Header from '../../components/Header/Header';
import MainStyle from './MainStyle';
import AsideLeft from '../../components/AsideLeft/AsideLeft';
import Footer from '../../components/Footer/Footer';
import Mainhead from './Mainhead';

export default function Mainpage() {
  return (
    <>
      <Header />
      <MainStyle>
        <AsideLeft className="asideleft" />
        <div className="Main">
          <Mainhead />
        </div>
        <AsideRight />
      </MainStyle>
      <Footer />
    </>
  );
}
