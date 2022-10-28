import RightStyle from './RightStyle';
import AsideRightPencil from '../../images/AsideRightPencil.png';
import AsideRightmessage from '../../images/AsideRightmessage.png';
import AsideRightstack from '../../images/AsideRightstack.png';

export default function AsideRight() {
  return (
    <RightStyle>
      <ul>
        <li className="title">The Overflow Blog</li>
        <li className="content">
          <img
            src={AsideRightPencil}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>How hardware and software can maximize your flow states</div>
        </li>
        <li className="content">
          <img
            src={AsideRightPencil}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>
            Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS
            conference
          </div>
        </li>
        <li className="title">Featured on Meta</li>
        <li className="content">
          <img
            src={AsideRightmessage}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>The 2022 Community-a-thon has begun!</div>
        </li>
        <li className="content">
          <img
            src={AsideRightmessage}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>Mobile app infrastructure being decommissioned</div>
        </li>
        <li className="content">
          <img
            src={AsideRightstack}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>The [script] tag is being burninated</div>
        </li>
        <li className="content">
          <img
            src={AsideRightstack}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>The Ask Wizard (2022) has graduated</div>
        </li>
        <li className="content">
          <img
            src={AsideRightstack}
            alt="aside오른쪽 팬 이미지"
            className="left"
          />
          <div>Staging Ground Workflow: Canned Comments</div>
        </li>
        <li className="title">Hot Meta Posts</li>
        <li className="content end">
          <div className="left">4</div>
          <div>What should be done about [explode]?</div>
        </li>
      </ul>
    </RightStyle>
  );
}
