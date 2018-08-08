import React from 'react'
import Link from 'gatsby-link'
import Trail from '../components/trail'

const ZigZagNightsVol2 = () => {
  const trail =
      {
        title: "ZigZag Nights Vol. 2",
        id: 2,
        when: "Sat August 4, 2018 21:30",

        where: {
          mapUrl: "https://goo.gl/maps/JevRfc71UVF2",
          name: "Shay's Pub & Wine Bar, 58 Jfk St, Cambridge, MA 02138"
        },
        hashCash: 5,
        bagCar: "Shits and Ladders",
        hares: [
          "Queer and Foaming in my Anus"
        ],
        description: "It is with great joy that I announce the second in what will be an ongoing series of monthly/bimonthly/sporadic late night hashes. Trail starts after the babies go to bed, so cum drunk and cum often!",
        promises: [
          "Trail done before the T stops running", "cheetoburn", "virgins drank", "beer fucked", "Sunday morning super fucked"
        ],
        signature: "zigzag"
      }
  return (
    <Trail trail={trail} />
  )
}

export default ZigZagNightsVol2
