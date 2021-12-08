import Header from 'src/components/Header/Header';
import classes from 'src/components/layouts/MainLayout/MainLayout.module.scss';
import { MainLayoutProps } from 'src/components/layouts/MainLayout//MainLayout.types';

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
