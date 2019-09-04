import React, { Fragment, useState, useEffect } from 'react'
import Fact from './Fact'
import axios from 'axios'

const CatFact = () => {
  const [facts, setFacts] = useState([])
  const [loading, setLoading] = useState(false)

  const getFacts = async () => {
    setLoading(true)
    const res = await axios.get('https://cat-fact.herokuapp.com/facts')

    setFacts(res.data.all)
    setLoading(false)
  }

  useEffect(() => {
    getFacts()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <table className="responsive-table striped">
          <thead>
            <tr>
              <th>Fact</th>
              <th>Vote</th>
              <th>Added By</th>
            </tr>
          </thead>
          <tbody>
            {facts.length > 0 &&
              facts.map(fact => <Fact fact={fact} key={fact._id} />)}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default CatFact
