import React from 'react'
import Link from 'gatsby-link'
import Trail from '../components/trail'

const PreLewd = () => {
  const trail =
    {
      title: "ZigZag H3: Cambridge Danceparty Prelewd",
      id: 1,
      when: "Fri June 29 2018 18:00",

      where: {
        mapUrl: "https://goo.gl/maps/3fb3WRatk542",
        name: "The Asgard Irish Pub & Restaurant 350 Massachusetts Ave Cambridge MA 02139 United States"
      },
      hashCash: 5,
      bagCar: "Shits and Ladders",
      hares: [
        "The Buttler Hit It"
      ],
      description: " This trail starts at 9pm, so come drunk and come often. Two beer checks and an outdoor circle. Don’t make plans for Sunday.",
      promises: [
        "Dance Party",
        "Friendly Go-To Drinks"
      ],
      signature: "dance!"
    }
  return (
    <Trail trail={trail} />
  )
}

export default PreLewd
