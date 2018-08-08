import React from 'react';
import Link from 'gatsby-link';
import BagCarSignup from './bagcar-signup'

function BagCar(props) {
  if (props.trail.bagcar === undefined) {
    return <div>Bag Car: Volunteer needed
      <BagCarSignup trail={props.trail} />
    </div>
  }
  return (
    <span>Bag Car: {props.trail.bagcar}</span>
  )
}

export default BagCar
