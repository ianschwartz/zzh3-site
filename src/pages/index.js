import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>What the fuck am I looking at?</h1>

    <h3 style={{textAlign: "center"}}>Welcome to the Boston ZigZag Hash House Harriers!</h3>

    <p>
      We're part of the global Hash House Harriers. If you're familiar with that, we're the Boston group.
      If you're not - <a href={"https://en.wikipedia.org/wiki/Hash_House_Harriers"}>Here's some info on what this is all about.</a>
    </p>

    <p>
      <a href={"http://www.bostonhash.com/more/away"}>Boston has a number of kennels</a>, each with their own set of rules and customs. The ZZH3 exists for trails that don't fit the rules or timing for any of our other local kennels.
    </p>

    <div style={{textAlign: 'center'}}>
      <Link to={"/calendar/"}>
        <button>See our trail calendar!</button>
      </Link>
    </div>

    <h3>Useful Stuff</h3>
    <div>
      <ul>
        <li><Link to={"/haring-guide/"}>Haring Guide</Link></li>
        <li><Link to={"/hymnal/"}>Hymnal</Link></li>
      </ul>
    </div>
  </div>
)

export default IndexPage
