import { useState } from 'react'

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin@example.com' && password === '1234') {
      onLogin()
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <input
        type="email"
        placeholder="Correo admin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Iniciar sesión
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  )
}

export default AdminLogin
