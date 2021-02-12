import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BountyCard from '../partials/BountyCard';

const Bounties = (props) => {
  // set Bounties state will hold all bounties
  const [bounties, setBounties] = useState([]);

  // useEffect and axios to call our homemake organic API
  useEffect(() => {
    // TODO: Query Bounty Hunter Server
    // console.log('calling the server')
    setBounties([
      {
        name: 'Han Solo',
        wantedFor : 'Owing money',
        client : 'Jabba the Hut',
        reward : 1000000,
        ship: 'Millennium Falcon',
        hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
        captured: false,
        lastSeen: 'yesterday'
      }
    ])
  }, [])

  const handleToggleCaptured = (bountyId, captured) => {
    // change the captured key of the bounty at bountyId (index in bounty array)
    let tempBounties = [...bounties];
    console.log('🔥')
    console.log(tempBounties);
    tempBounties.splice(bountyId, 1, {...bounties[bountyId], captured: !captured});
    console.log('💩')
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