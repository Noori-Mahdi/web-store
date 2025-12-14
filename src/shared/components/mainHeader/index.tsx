import Logo from '../logo';
import SearchInput from '../searchInput';
import NavBar from '../navBar';
import Profile from '../Profile';
import { Badge, Button } from '../shadcn';
import { ChevronLeft, Instagram, Send, ShoppingCart } from 'lucide-react';
import Container from '../container';

const Header = () => {
  return (
    <header>
      <Container
        removeSpaceLeft
        removeSpaceRight
        removeSpaceBottom
        className="flex flex-col gap-4 bg-neutral-700"
      >
        <Container
          className="flex justify-between justify items-center"
          removeSpaceBottom
          removeSpaceTop
        >
          <div className="flex gap-4">
            <Button className="relative w-8 h-8 cursor-pointer rounded-full">
              <Badge className="absolute text-xs translate-y-1/2  translate-x-1/2 bottom-0 right-0 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                9
              </Badge>
              <ShoppingCart className="text-base" />
            </Button>
            <Profile />
          </div>
          <SearchInput />
          <Logo lable="سورنا" isLink="/" />
        </Container>
        <Container className="flex justify-between items-center bg-neutral-800 py-3">
          <NavBar />
          <div className="flex gap-4 items-center ">
            <Send size={20} className="cursor-pointer" />
            <Instagram size={20} className="cursor-pointer" />
          </div>
        </Container>
      </Container>
    </header>
  );
};

export default Header;
