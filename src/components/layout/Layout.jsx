import Sidebar from './Sidebar';
import Header from './Header';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
