import Navbar from './components/Navbar'
import About from './components/About'
import { useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MessagesList from './components/MessagesList'
import AdminLogin from './components/AdminLogin'
import './App.css'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

return (
    <div className="max-w-5xl w-full mx-auto px-4">
      <Navbar />

      <header>...</header>

      <main className="...">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="admin">
          {isAdmin ? <MessagesList /> : <AdminLogin onLogin={() => setIsAdmin(true)} />}
        </section>
      </main>

      <footer>...</footer>
    </div>
  )
}
export default App
