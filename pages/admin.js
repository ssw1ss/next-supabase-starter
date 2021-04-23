import { useEffect, useState } from 'react'

import PrivateContent from "../components/PrivateContent"
import Layout from "../components/Layout"

const Admin = () => {
  const [name, setName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [bracket, setBracket] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const { data, error } = await supabase
      .from("events")
      .insert([
        {name, startDate, endDate, bracket}
      ])
    if (error) console.log("trevor you fucked up", error)
    else {
      console.log("nice!", data)
    }
  }
  return (
    <Layout>
      <PrivateContent>
        <div  className="container">
          <h1>Create Tournament</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="start-date">Start Date</label>
              <input type="date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="end-date">End Date</label>
              <input type="date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="bracket">Bracket</label>
              <input type="text" id="bracket" value={bracket} onChange={e => setBracket(e.target.value)} />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </PrivateContent>
    </Layout>
  )
}

export default Admin
