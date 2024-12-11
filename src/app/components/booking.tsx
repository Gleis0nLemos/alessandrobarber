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
    <div className="container mx-auto px-1 pt-6 pb-12 border-t border-zinc-900">
      <div className="pb-4">
        <h2 className="text-2xl font-semibold mb-2 pb-2">Agendamento</h2>
        <p className="text-sm font-medium text-gray-400">
          Preencha os campos abaixo para marcar o seu horário na Barbearia
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-12">
        {/* Campo Nome */}
        <div className="flex gap-4">
          <div className="w-3/4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 pb-1">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="mt-1 block w-full p-2 bg-background text-white border border-zinc-700 rounded-lg"
            />
          </div>

          {/* Campo Celular/WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 pb-1">
              Celular/WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(xx) xxxxx-xxxx"
              required
              className="mt-1 block w-full p-2 bg-background text-white border border-zinc-700 rounded-lg"
            />
          </div>
        </div>

        {/* Campo Procedimento */}
        <div className="pt-4">
          <label htmlFor="procedure" className="block text-sm font-medium text-gray-200 pb-1">
            Escolha o procedimento que irá realizar
          </label>
          <select
            id="procedure"
            name="procedure"
            value={formData.procedure}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 bg-background text-white border border-zinc-700 rounded-lg"
          >
            <option value="" disabled>
              Selecione o corte desejado
            </option>
            <option value="corte">Corte de cabelo</option>
            <option value="barba">Barba</option>
            <option value="coloracao">Coloração</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Campo Observação */}
        <div className="pt-4">
          <label htmlFor="observation" className="block text-sm font-medium text-gray-200 pb-1">
            Observação (opcional)
          </label>
          <textarea
            id="observation"
            name="observation"
            value={formData.observation}
            onChange={handleChange}
            placeholder="Quer deixar alguma observação para o barbeiro? Fale aqui"
            rows={4}
            className="mt-1 block w-full p-2 bg-background text-white border border-zinc-700 rounded-lg"
          />
        </div>

        {/* Botão de Envio */}
        <div className="flex justify-end">
          
        <button
          type="submit"
          className="w-1/4 bg-gray-200 hover:bg-white transition delay-100 text-zinc-950 font-medium py-2 rounded-lg"
          >
          Confirmar Agendamento
        </button>
          </div>
      </form>
    </div>
  );
};

export default BookingForm;
