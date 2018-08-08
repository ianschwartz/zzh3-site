import React from 'react'
import Link from 'gatsby-link'

const CalendarPage = () => {
  return (
    <div>
      <h3>
        Upcoming Trails
      </h3>
      <div>
        Nothing yet. Care to hare one?
      </div>
      <h3>
        Past Trails
      </h3>
      <div>
        <ul>
          <Link to={"/nights-vol-2/"}>
            <li>ZigZag Nights Vol. 2</li>
          </Link>
          <Link to={"/cambridge-dance-party-prelewd/"}>
            <li>Cambridge Dance Party Prelewd</li>
          </Link>
          <Link to={"/nights-vol-1/"}>
            <li>ZigZag Nights Vol. 1</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default CalendarPage;
