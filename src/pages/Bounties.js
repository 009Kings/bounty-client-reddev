import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BountyCard from '../partials/BountyCard';
import axios from 'axios';

const Bounties = (props) => {
  // set Bounties state will hold all bounties
  const [bounties, setBounties] = useState([]);

  // useEffect and axios to call our homemake organic API
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
    .then(response => {
      setBounties(response.data)
    })
  }, [])

  const handleToggleCaptured = (bountyId, captured) => {
    // change the captured key of the bounty at bountyId (index in bounty array)
    let tempBounties = [...bounties];
    tempBounties.splice(bountyId, 1, {...bounties[bountyId], captured: !captured});
    setBounties(tempBounties);
  }

  let bountyList = bounties.length > 0 ? 
    bounties.map((bounty, i) => (
      <BountyCard 
        {...bounty} 
        bountyId={i}
        captured={bounty.captured}
        toggleCaptured={() => handleToggleCaptured(i, bounty.captured)}
        key={bounty.name}
      />
    )) : 
    <h3>There are no Bounties yet!</h3>


  return (
    <section>
      <h2>List o Bounties!</h2>
      <div className="bounties-container">
        {bountyList}
      </div>
      <Link to="/bounties/new">Add a New Bounty</Link>
    </section>
  );
}

export default Bounties;