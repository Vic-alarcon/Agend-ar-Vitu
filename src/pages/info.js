



export default function InfoPage() {
  return (
    <div>

      <h1>Centro de Información</h1>

        {/* ---------------- CONTACTO ---------------- */}
      <section id="contacto">
        <h2>Contacto</h2>
        <p>
          Si tenés dudas, consultas o necesitás ayuda con tus entradas,
          podés comunicarte con nuestro equipo de soporte.
        </p>

        <ul>
          <li>Email: soporte@agend-ar.com</li>
          <li>Teléfono: +54 11 5555-5555</li>
          <li>Horarios: Lunes a Viernes de 9 a 18 hs</li>
        </ul>
      </section>

      {/* ---------------- TÉRMINOS Y CONDICIONES ---------------- */}
      <section id="terminos">
        <h2>Términos y Condiciones</h2>

        <p>
          Al utilizar Agend-ar aceptás los siguientes términos y condiciones.
          Estos establecen las reglas generales de uso de la plataforma.
        </p>

        <h3>1. Uso del servicio</h3>
        <p>
          Agend-ar funciona como una plataforma para visualizar y adquirir 
          entradas a eventos. No somos responsables por cambios o cancelaciones 
          realizadas por los organizadores.
        </p>

        <h3>2. Compras</h3>
        <p>
          Todas las compras son finales. Las devoluciones dependen de las 
          políticas del organizador del evento.
        </p>

        <h3>3. Responsabilidad</h3>
        <p>
          Agend-ar no se responsabiliza por pérdidas, robos o daños ocurridos 
          durante los eventos.
        </p>
      </section>

      {/* ---------------- POLÍTICA DE PRIVACIDAD ---------------- */}
      <section id="privacidad">
        <h2>Política de Privacidad</h2>

        <p>
          Esta política describe cómo recopilamos, usamos y protegemos tus datos.
        </p>

        <h3>1. Datos que recopilamos</h3>
        <ul>
          <li>Nombre y apellido</li>
          <li>Email</li>
          <li>Historial de entradas compradas</li>
          <li>Datos de navegación dentro de la plataforma</li>
        </ul>

        <h3>2. Uso de la información</h3>
        <p>
          Utilizamos tus datos para procesar compras, enviar notificaciones sobre
          tus eventos y mejorar tu experiencia en la plataforma.
        </p>

        <h3>3. Protección de datos</h3>
        <p>
          Implementamos medidas de seguridad para proteger tu información y nunca
          la compartimos con terceros sin tu consentimiento.
        </p>
      </section>

      {/* ---------------- PREGUNTAS FRECUENTES (FAQ) ---------------- */}
      <section id="faq">
        <h2>Preguntas Frecuentes (FAQ)</h2>

        <h3>¿Dónde veo mis entradas?</h3>
        <p>
          Una vez realizada la compra, tus entradas aparecen en la sección
          “Descargá tus entradas”, dentro de tu perfil.
        </p>

        <h3>¿Qué pasa si pierdo mi entrada?</h3>
        <p>
          No te preocupes, podés volver a descargarla desde la plataforma.
        </p>

        <h3>¿Puedo pedir un reembolso?</h3>
        <p>
          Los reembolsos dependen del organizador del evento. Si está permitido,
          te daremos la opción directamente desde tu perfil.
        </p>

        <h3>¿Por qué no puedo pagar?</h3>
        <p>
          Puede haber un error con tu método de pago. Recomendamos probar con otra
          tarjeta o comunicarte con tu banco.
        </p>
      </section>

    </div>
  );
}
