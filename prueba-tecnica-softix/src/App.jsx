import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import Menu from './components/Navbar'
import {Container} from "@mui/material"

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<TaskList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
