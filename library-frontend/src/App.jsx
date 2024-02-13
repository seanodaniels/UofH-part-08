import { useState } from "react"
import Authors from "./components/Authors"
import Books from "./components/Books"
import NewBook from "./components/NewBook"
import { Routes, Route, Link, Navigate } from "react-router-dom"
import "./App.css"

const App = () => {
  const [page, setPage] = useState("authors")
  console.log("page", page)

  return (
    <div>
      <div id="nav-primary">
        <Link to="/authors">authors</Link>
        <Link to="/books">books</Link>
        <Link to="/create-book">create book</Link>
      </div>

      <Routes>
        <Route path="/authors/" element={<Authors />} />
        <Route path="/books/" element={<Books />} />
        <Route path="/create-book/" element={<NewBook />} />
      </Routes>
    </div>
  )
}

export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
