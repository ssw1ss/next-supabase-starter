import { supabase } from '../utils/initSupabase'
import Layout from "../components/Layout"

const Index = ({ tournaments }) => {
  return (
    <Layout>
      <div className="container mt-24">
        <h1 className="text-4xl font-semibold">Tournaments</h1>
        <div>
          {tournaments.map(({ id, name, startDate, endDate, bracket }) => (
            <div key={id}>
              <h3>{name}</h3>
              <div>From {startDate} to {endDate}</div>
              <a href={bracket} target="_blank">Bracket Link</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const { data, error } = await supabase
    .from("events")
    .select()
  if (error) console.log(error)
  return {
    props: {
      tournaments: data
    }
  }
}