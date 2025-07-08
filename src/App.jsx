import { Outlet } from 'react-router-dom'
import Header from './components/haeder/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div dir='rtl'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
