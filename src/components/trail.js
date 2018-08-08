import React from 'react'
import BagCar from './bagcar'

function Trail(props) {
  const t = props.trail;
  return (
    <div>
      <h3>
        {t.title}
      </h3>
      <p>
        <ul>
          <li>
            When: {t.when}
          </li>
          <li>
            Where: <a href={t.where.mapUrl}>{t.where.name}</a>
          </li>
          <li>
            Hare(s): {t.hares.map((h) => <div>{h}</div>)}
          </li>
          <li>
            <BagCar trail={t}/>
          </li>
          <li>
            Hash Cash: ${t.hashCash}
          </li>
        </ul>
      </p>

      <h3>
        Description:
      </h3>
      <p>
        {t.description}
      </p>

      <h3>
        Promises and Lies
      </h3>

      <p>
        <ul>
          {t.promises.map((p) => {
            return <li>{p}</li>
          })}
        </ul>
      </p>

      <div>
        On-{t.signature}-on!<br/>
        {t.hares.map((h) => {return h + " "})}
      </div>
    </div>
  )
}

export default Trail;
