"use client";

import { useRef, useState } from "react";

const services = [
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
  },
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
  },
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
  },
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
  },
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
  },
  {
    title: "Corte na máquina",
    price: "R$ 20.00",
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
              className="bg-zinc-900 border border-zinc-900 shadow-md rounded px-6 py-4 min-w-[200px]"
            >
              <h3 className="text-xl font-bold mb-24">{service.title}</h3>
              <hr className="border-gray-500" />
              <p className="text-gray-400 font-bold pt-2">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
