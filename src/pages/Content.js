import { Route } from 'react-router-dom';
import Home from './Home';
import Bounties from './Bounties';
import NewBounty from './NewBounty';

const Content = (props) => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/bounties" component={Bounties} />
      <Route path="/bounties/new" component={NewBounty} />
    </div>
  );
}

export default Content;