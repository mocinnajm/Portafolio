import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',        // <- corregido
    email: '',
    message: ''      // <- corregido
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) {
      setStatus('❗ Por favor, completa todos los campos.')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('✅ Mensaje enviado con éxito')
        setFormData({ name: '', email: '', message: '' }) // limpiar
      } else {
        const data = await response.json()
        setStatus(`❌ Error: ${data.error || 'al enviar el mensaje'}`)
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error)
      setStatus('❌ Error al conectar con el servidor')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded p-6 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full p-2 border rounded"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>

      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  )
}

export default Contact
