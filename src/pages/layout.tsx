import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
