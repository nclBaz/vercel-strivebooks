import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    books: [],
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Books in the catalogue</h1>
          {this.state.books.map((book, index) => (
            <div key={index}>
              <img alt="" src={book.img} style={{ width: "200px" }}></img>
              <span>{book.title}</span>
            </div>
          ))}
        </header>
      </div>
    )
  }

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_BE_URL
    const resp = await fetch(`${apiUrl}/books`)
    const books = await resp.json()
    this.setState({
      books,
    })
  }
}

export default App
