import { useState } from "react"
import { gql, useQuery, useMutation } from "@apollo/client"
import { ALL_AUTHORS, CHANGE_AUTHOR } from "../queries"

const Authors = (props) => {
  const [birthAuthor, setBirthAuthor] = useState("")
  const [birthYear, setBirthYear] = useState('')
  const result = useQuery(ALL_AUTHORS)
  const [changeAuthor] = useMutation(CHANGE_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  if (result.loading) {
    return <div>loading...</div>
  }

  const setBirth = async (event) => {
    event.preventDefault()

    changeAuthor({
      variables: { name: birthAuthor, setBornTo: parseInt(birthYear) },
    })

    setBirthAuthor('')
    setBirthYear('')
  }

  const authors = result.data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>set birth year</h2>
      <form onSubmit={setBirth}>
        <div>name <input
          value={birthAuthor}
          onChange={({ target }) => setBirthAuthor(target.value)}
        /></div>
        <div>
          born
        <input
          value={birthYear}
          onChange={({ target }) => setBirthYear(target.value)}
        />
        </div>
        <button type="submit">update Author</button>
      </form>
    </div>
  )
}

export default Authors
