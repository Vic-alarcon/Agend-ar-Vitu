"use client";



import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import UpcomingEventsModal from "./UpcomingEventsModal";
import UbicacionesDropdown from "./UbicacionesDropdown";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-[#242424] text-white pt-10 pb-4">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div className="flex flex-col gap-2">
          <div>
            <Image
              src="/Logo_agendar.png"
              alt="Logo de Agend-ar"
              width={120}
              height={80}
            />
          </div>
          <p className="text-sm text-gray-300">
            Tu agenda de eventos nacional.
          </p>
        </div>

        {/* DESCUBRIR */}
        <div>
          <h3 className="text-[#45f7ce] font-bold text-lg mb-3">Descubrir</h3>
          <ul className="flex flex-col gap-2">
            <li
              className="text-gray-300 hover:text-[#45f7ce] transition-colors cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              Próximos Eventos
            </li>

            <li className="text-gray-300 hover:text-[#45f7ce] transition-colors">
              <UbicacionesDropdown />
            </li>

            <li>
              <a
                href="https://paginaexterna.com/descargar-entradas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#45f7ce] transition-colors"
              >
                Descarga tu entrada
              </a>
            </li>
          </ul>
        </div>

        <UpcomingEventsModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* AYUDA */}
        <div>
          <h3 className="text-[#45f7ce] font-bold text-lg mb-3">Ayuda</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/info#contacto"
                className="text-gray-300 hover:text-[#45f7ce] transition-colors"
              >
                Contacto
              </a>
            </li>

            <li>
              <a
                href="/info#terminos"
                className="text-gray-300 hover:text-[#45f7ce] transition-colors"
              >
                Términos y Condiciones
              </a>
            </li>

            <li>
              <a
                href="/info#privacidad"
                className="text-gray-300 hover:text-[#45f7ce] transition-colors"
              >
                Política de Privacidad
              </a>
            </li>

            <li>
              <a
                href="/info#faq"
                className="text-gray-300 hover:text-[#45f7ce] transition-colors"
              >
                Preguntas Frecuentes (FAQ)
              </a>
            </li>
          </ul>
        </div>

        {/* SIGUENOS */}
        <div>
          <h3 className="text-[#45f7ce] font-bold text-lg mb-3">Síguenos</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-300 hover:text-[#45f7ce] transition-colors" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-300 hover:text-[#45f7ce] transition-colors" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-300 hover:text-[#45f7ce] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="h-px bg-gray-700 mt-8 mb-4 w-full"></div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-xs">
        © 2024 Agend-ar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
