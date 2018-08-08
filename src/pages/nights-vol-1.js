import React from 'react'
import Link from 'gatsby-link'
import Trail from '../components/trail'

const ZZNights1 = () => {
  const trail =
    {
      title: "zig zig nights #1",
      id: 0,
      when: "Sat June 2 2018 21:00",
      where: {
        mapUrl: "https://goo.gl/maps/LkTGTU7GKjF2",
        name: "Whitney's, 37 John F. Kennedy St, Cambridge, MA 02138"
      },
      hashCash: 5,
      bagCar: "Shits and Ladders",
      hares: [
        "Queer and Foaming in my Anus",
        "Gone Gaywohl"
      ],
      description: " This trail starts at 9pm, so come drunk and come often. Two beer checks and an outdoor circle. Don’t make plans for Sunday.",
      promises: [
        "zigzags",
        "circle done in time to take the t",
        "virgins drunk",
        "beer fucked",
        "moonburn",
        "cheetoburn"
      ],
      signature: "tomorrow already hurts"
    }
  return (
    <Trail trail={trail} />
  )
}

export default ZZNights1
