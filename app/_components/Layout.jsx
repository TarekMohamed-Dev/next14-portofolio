//fonts
import { Sora } from '@next/font/google';

//font settings
const soraFont = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//components
import Nav from './Nav'; // Use relative path
import Header from './Header'; // Use relative path
import TopLeftImg from './TopLeftImg'; // Use relative path

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${soraFont.variable} font-sora relative`} >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
