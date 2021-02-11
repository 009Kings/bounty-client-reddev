import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Bounty Hunters!</h1>
      <nav>
        <Link to="/">Main Page</Link>{' | '}
        <Link to="/bounties">Not a link to anything</Link>
      </nav>
    </header>
  );
}

export default Header;