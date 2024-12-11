"use client";

import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    procedure: "",
    observation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado com os seguintes dados:", formData);
    // Aqui você pode adicionar o código para enviar os dados a um servidor ou backend.
    alert("Agendamento enviado com sucesso!");
  };

  return (
    <div className="max-w-md mx-auto bg-zinc-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Agendamento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
            className="mt-1 block w-full p-2 bg-zinc-800 text-white border border-zinc-700 rounded"
          />
        </div>

        {/* Campo Celular/WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
            Celular/WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
            className="mt-1 block w-full p-2 bg-zinc-800 text-white border border-zinc-700 rounded"
          />
        </div>

        {/* Campo Procedimento */}
        <div>
          <label htmlFor="procedure" className="block text-sm font-medium text-gray-400">
            Procedimento a realizar
          </label>
          <select
            id="procedure"
            name="procedure"
            value={formData.procedure}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 bg-zinc-800 text-white border border-zinc-700 rounded"
          >
            <option value="" disabled>
              Selecione o procedimento
            </option>
            <option value="corte">Corte de cabelo</option>
            <option value="barba">Barba</option>
            <option value="coloracao">Coloração</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Campo Observação */}
        <div>
          <label htmlFor="observation" className="block text-sm font-medium text-gray-400">
            Observação
          </label>
          <textarea
            id="observation"
            name="observation"
            value={formData.observation}
            onChange={handleChange}
            placeholder="Alguma observação?"
            rows={4}
            className="mt-1 block w-full p-2 bg-zinc-800 text-white border border-zinc-700 rounded"
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
        >
          Agendar
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
