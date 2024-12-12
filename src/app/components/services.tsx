"use client";

import { useRef, useState } from "react";

const services = [
  {
    title: "Corte na máquina",
    price: "R$ 30.00",
  },
  {
    title: "Corte/Degradê",
    price: "R$ 35.00",
  },
  {
    title: "Barba",
    price: "R$ 30.00",
  },
  {
    title: "Limpeza/Pele",
    price: "R$ 30.00",
  },
  {
    title: "Corte/Tesoura",
    price: "R$ 40.00",
  },
  {
    title: "Realinhamento Capilar",
    price: "R$ 80.00",
  },
  {
    title: "Luzes Capilar",
    price: "R$ 80.00",
  },
  {
    title: "Platinado/Nevou",
    price: "R$ 100.00",
  },
  {
    title: "Corte/Máquina + Sobrancelha",
    price: "R$ 40.00",
  },
  {
    title: "Corte/Degradê + Sobrancelha",
    price: "R$ 45.00",
  },
  {
    title: "Corte/Máquina + Barba + Sobrancelha",
    price: "R$ 70.00",
  },
  {
    title: "Corte/Máquina + Barba + Sobrancelha + Nevou",
    price: "R$ 170.00",
  },
  {
    title: "Corte/Disfarce + Barba",
    price: "R$ 65.00",
  },
  {
    title: "Corte/Disfarce + Barba + Sobrancelha",
    price: "R$ 75.00",
  },
  {
    title: "Corte/Disfarce + Barba + Sobrancelha + Limpeza",
    price: "R$ 105.00",
  },
  {
    title: "Corte/Disfarce + Realinhamento Capilar",
    price: "R$ 115.00",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.userSelect = "none"; // Desativa a seleção de texto
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // Distância movida
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    document.body.style.userSelect = ""; // Reativa a seleção de texto
  };

  return (
    <div className="container mx-auto px-1 pt-6 pb-12 border-t border-zinc-900">
      <div className="pb-4">
        <h2 className="text-2xl font-semibold mb-2 pb-2">Serviços</h2>
        <p className="text-sm font-medium text-gray-400">
          Veja todos os serviços que oferecemos na barbearia
        </p>
      </div>
      {/* Contêiner de rolagem */}
      <div
        className={`max-w-full overflow-hidden cursor-${isDragging ? "grabbing" : "grab"}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div className="flex space-x-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-zinc-900 border border-zinc-900 shadow-md rounded px-4 py-3 min-w-[200px] transform hover:scale-105 transition duration-500 hover:bg-zinc-800 cursor-pointer"
            >
              <h3 className="text-xl font-bold pb-4">{service.title}</h3>
              <div className="mt-auto pt-2 border-t border-gray-500">
                <p className="text-gray-400 font-bold pt-1 pb-1">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
