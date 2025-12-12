import Logo from '../logo';
import SearchInput from '../searchInput';
import NavBar from '../navBar';
import Profile from '../Profile';

const Header = () => {
  return (
    <>
      <div className="flex justify-between justify items-center">
        <Profile />
        <SearchInput />
        <Logo isLink="/" />
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
