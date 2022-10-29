import AsideRight from '../../components/AsideRight/AsideRight';
import Header from '../../components/Header/Header';
import MainStyle from './MainStyle';
import AsideLeft from '../../components/AsideLeft/AsideLeft';
import Footer from '../../components/Footer/Footer';

export default function Mainpage() {
  return (
    <>
      <Header />
      <MainStyle>
        <AsideLeft className="asideleft" />
        <div className="Main" />
        <AsideRight className="asideRight" />
      </MainStyle>
      <Footer />
    </>
  );
}
