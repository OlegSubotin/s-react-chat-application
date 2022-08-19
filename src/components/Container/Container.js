import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Container;
