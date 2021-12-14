import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './styles/style.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  )
}

export default App