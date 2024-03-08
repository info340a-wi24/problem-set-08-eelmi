import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import SAMPLE_DOGS from '../data/dogs.json'; // A sample list of dogs (model)

function PetDetail(props) {
  const petNameString = useParams().petName; // REPLACE THIS WITH CORRECT VALUE
 
  // Pretend we loaded external data    
  let pet = _.find(SAMPLE_DOGS, {name: petNameString}); // Find pet in data
  
  if (!pet) return <h2>No pet specified</h2>; // If unspecified
  
  // Make a bootstrap carousel (because it's fun)
  let carouselItems = pet.images.map(function(img){
    return (
      <Carousel.Item key={img}>
        <img className="d-block" src={'../'+img} alt={pet.name} />
      </Carousel.Item>
    );
  });

  return (
    <div>
      <h2>Adopt {pet.name}</h2>
      <p className="lead">{pet.sex} {pet.breed}</p>
      <div>
        <Carousel indicators={false} prevLabel="" nextLabel="">
          {carouselItems}
        </Carousel>
      </div>      
      <Button disabled variant="primary" size="lg">Adopt me now!</Button>
    </div>
  );
}

export default PetDetail;
