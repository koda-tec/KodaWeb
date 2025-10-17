
"use client";


import { useState, FormEvent, ChangeEvent } from 'react';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, telefono, mensaje }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Algo salió mal.');
      }

      setSuccess('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setNombre('');
      setEmail('');
      setTelefono('');
      setMensaje('');

    } catch (err) {
     
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error inesperado.');
      }
    } finally {
      setLoading(false);
    }
  }

  const messageStyles = {
    success: "p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg",
    error: "p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={telefono}
          
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTelefono(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={mensaje}
          
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMensaje(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      {success && <div className={messageStyles.success}>{success}</div>}
      {error && <div className={messageStyles.error}>{error}</div>}

        <div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center font-bold text-white rounded-lg transition-opacity hover:opacity-90 py-3 px-4 
                     bg-gradient-to-r from-btn-start to-btn-end disabled:bg-gray-400 disabled:bg-none"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}