import { HtmlMeta } from '../look/components';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <HtmlMeta />
      <div className={s.home}>
        <div className="container">Home page layout</div>
      </div>
    </>
  );
};

export default Home;
