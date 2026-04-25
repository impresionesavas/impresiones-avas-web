import { useState } from "react";
import {
  MessageCircle,
  Menu,
  X,
  Heart,
  Printer,
  NotebookPen,
  Sticker,
  Gift,
  BookOpen,
  ShoppingBag,
  PackageCheck,
  PencilLine,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import "./App.css";

const WHATSAPP = "5493854687019";
const INSTAGRAM = "https://www.instagram.com/impresiones.avas";
const FACEBOOK = "https://www.facebook.com/share/1ArGR6uFVE/";
const TIKTOK = "https://www.tiktok.com/@impresiones.avas?_r=1&_t=ZS-95q7SsDs3TM";

function whatsapp(text) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

const categorias = [
  {
    titulo: "Agendas y cuadernos",
    texto:
      "Agendas, cuadernos y productos personalizados para organizar tu día con estilo.",
    imagen: "/imagenes/agendas.jpg",
    icono: NotebookPen,
    mensaje: "Hola, quiero consultar por agendas y cuadernos personalizados.",
  },
  {
    titulo: "Stickers y etiquetas",
    texto:
      "Stickers, etiquetas y tarjetas para emprendimientos, eventos y regalos.",
    imagen: "/imagenes/stickers.jpg",
    icono: Sticker,
    mensaje: "Hola, quiero consultar por stickers y etiquetas personalizadas.",
  },
  {
    titulo: "Cumpleaños y eventos",
    texto:
      "Papelería personalizada para cumpleaños, baby shower, bautismos y fechas especiales.",
    imagen: "/imagenes/eventos.jpg",
    icono: Gift,
    mensaje: "Hola, quiero consultar por papelería para cumpleaños o eventos.",
  },
  {
    titulo: "Álbumes y recuerdos",
    texto:
      "Álbumes, libros de buenos deseos y detalles para guardar momentos únicos.",
    imagen: "/imagenes/albumes.jpg",
    icono: BookOpen,
    mensaje: "Hola, quiero consultar por álbumes o recuerdos personalizados.",
  },
  {
    titulo: "Impresiones y anillados",
    texto:
      "Dossiers, cartillas, impresiones, plastificados, laminados y terminaciones.",
    imagen: "/imagenes/anillados.jpg",
    icono: Printer,
    mensaje: "Hola, quiero consultar por impresiones, anillados o cartillas.",
  },
  {
    titulo: "Librería y escolares",
    texto:
      "Artículos escolares y productos disponibles para compra directa. Consultá stock.",
    imagen: "/imagenes/libreria.jpg",
    icono: ShoppingBag,
    mensaje: "Hola, quiero consultar por productos de librería disponibles.",
  },
];

const trabajos = [
  {
    titulo: "Agenda personalizada",
    categoria: "Agendas",
    imagen: "/imagenes/trabajo-agenda.jpg",
  },
  {
    titulo: "Cuaderno pediátrico",
    categoria: "Recuerdos",
    imagen: "/imagenes/trabajo-pediatrico.jpg",
  },
  {
    titulo: "Calendarios imantados",
    categoria: "Imanes",
    imagen: "/imagenes/trabajo-calendarios.jpg",
  },
  {
    titulo: "Baby shower",
    categoria: "Eventos",
    imagen: "/imagenes/trabajo-baby.jpg",
  },
  {
    titulo: "Agenda profesional",
    categoria: "Emprendedores",
    imagen: "/imagenes/trabajo-profesional.jpg",
  },
  {
    titulo: "Detalles personalizados",
    categoria: "Especiales",
    imagen: "/imagenes/trabajo-especial.jpg",
  },
];

function Imagen({ src, alt }) {
  const [error, setError] = useState(false);

  return (
    <div className="imagen-box">
      {!error && <img src={src} alt={alt} onError={() => setError(true)} />}
      <div className="imagen-fallback">
        <Printer size={34} />
        <span>{alt}</span>
      </div>
    </div>
  );
}

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <main>
      <header className="header">
        <a className="logo" href="#inicio">
          <div className="logo-icon">
            <Printer size={30} />
          </div>
          <div>
            <strong>Impresiones AVAS</strong>
            <span>Diseño & Personalización</span>
          </div>
        </a>

        <nav className={menuAbierto ? "nav abierto" : "nav"}>
          <a href="#inicio" onClick={() => setMenuAbierto(false)}>
            Inicio
          </a>
          <a href="#productos" onClick={() => setMenuAbierto(false)}>
            Productos
          </a>
          <a href="#como-pedir" onClick={() => setMenuAbierto(false)}>
            Cómo pedir
          </a>
          <a href="#trabajos" onClick={() => setMenuAbierto(false)}>
            Trabajos
          </a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>
            Contacto
          </a>
        </nav>

        <a
          className="btn-whatsapp desktop"
          href={whatsapp(
            "Hola, quiero consultar por productos personalizados de Impresiones AVAS."
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-texto">
          <div className="etiqueta">
            <Sparkles size={16} />
            Papelería personalizada hecha con amor
          </div>

          <h1>
            Impresiones <span>AVAS</span>
          </h1>

          <div className="linea-corazon">
            <span></span>
            <Heart size={18} fill="currentColor" />
            <span></span>
          </div>

          <p>
            Creamos agendas, stickers, souvenirs, papelería para eventos,
            impresiones y productos personalizados hechos a pedido, con diseño
            cuidado y armado manual.
          </p>

          <div className="hero-botones">
            <a href="#productos" className="btn-principal">
              Ver productos
            </a>

            <a
              href={whatsapp(
                "Hola, quiero consultar por productos personalizados de Impresiones AVAS."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-secundario"
            >
              <MessageCircle size={19} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-imagen">
          <Imagen
            src="/imagenes/portada.jpg"
            alt="Trabajo personalizado de Impresiones AVAS"
          />
          <div className="tarjeta-flotante">
            <strong>Detalles únicos</strong>
            <p>Diseños a medida para regalar, organizar y celebrar.</p>
          </div>
        </div>
      </section>

      <section id="productos" className="seccion">
        <div className="titulo-seccion">
          <span>Productos y servicios</span>
          <h2>Explorá nuestras categorías</h2>
          <p>
            Elegí la categoría que te interesa y consultanos por cantidad,
            temática, materiales y fecha de entrega.
          </p>
        </div>

        <div className="grid-categorias">
          {categorias.map((item) => {
            const Icono = item.icono;

            return (
              <article className="card" key={item.titulo}>
                <Imagen src={item.imagen} alt={item.titulo} />
                <div className="card-info">
                  <div className="card-icon">
                    <Icono size={25} />
                  </div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                  <a
                    href={whatsapp(item.mensaje)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="como-pedir" className="como-pedir">
        <div className="titulo-seccion">
          <h2>Cómo pedir</h2>
          <p>Simple, personalizado y directo por WhatsApp.</p>
        </div>

        <div className="pasos">
          <div className="paso">
            <span>1</span>
            <MessageCircle size={35} />
            <h3>Escribinos</h3>
            <p>
              Contanos qué producto necesitás, cantidad, temática y fecha
              aproximada.
            </p>
          </div>

          <div className="paso">
            <span>2</span>
            <PencilLine size={35} />
            <h3>Coordinamos el diseño</h3>
            <p>
              Definimos medidas, materiales, presupuesto y detalles
              personalizados.
            </p>
          </div>

          <div className="paso">
            <span>3</span>
            <PackageCheck size={35} />
            <h3>Preparamos tu pedido</h3>
            <p>Diseñamos, imprimimos y armamos tu trabajo con dedicación.</p>
          </div>
        </div>
      </section>

      <section id="trabajos" className="seccion">
        <div className="titulo-seccion">
          <span>Inspiración y productos personalizados</span>
          <h2>Ideas para tu próximo pedido</h2>
          <p>
            Las imágenes muestran ideas de referencia y ejemplos de productos
            personalizados. Cada pedido se adapta a la temática, nombre, colores
            y materiales elegidos.
          </p>
        </div>

        <div className="grid-trabajos">
          {trabajos.map((item) => (
            <article className="trabajo" key={item.titulo}>
              <Imagen src={item.imagen} alt={item.titulo} />
              <div>
                <span>{item.categoria}</span>
                <h3>{item.titulo}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sobre">
        <div>
          <span>Impresiones AVAS</span>
          <h2>Diseño, impresión y armado manual</h2>
          <p>
            Cada pedido se realiza de manera personalizada, cuidando los detalles
            para que recibas un producto único, prolijo y hecho con amor.
            Trabajamos con papelería, agendas, stickers, souvenirs, impresiones
            y productos especiales para emprendedores, escuelas y eventos.
          </p>
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div className="footer-info">
          <div>
            <h2>Conectemos</h2>
            <p>
              Escribinos para consultar por productos personalizados,
              presupuestos o disponibilidad.
            </p>
          </div>

          <a
            href={whatsapp("Hola, quiero hacer una consulta a Impresiones AVAS.")}
            target="_blank"
            rel="noreferrer"
            className="btn-principal"
          >
            <MessageCircle size={19} />
            WhatsApp
          </a>
        </div>

        <div className="redes">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            <span className="red-icon">IG</span> Instagram
          </a>

          <a href={FACEBOOK} target="_blank" rel="noreferrer">
            <span className="red-icon">FB</span> Facebook
          </a>

          <a href={TIKTOK} target="_blank" rel="noreferrer">
            <span className="red-icon">TT</span> TikTok
          </a>

          <a
            href={whatsapp("Hola, quiero hacer una consulta a Impresiones AVAS.")}
            target="_blank"
            rel="noreferrer"
          >
            <span className="red-icon">WA</span> WhatsApp
          </a>

          <div>
            <MapPin /> Frías, Santiago del Estero
          </div>
        </div>

        <div className="copy">
          <p>© 2026 Impresiones AVAS. Todos los derechos reservados.</p>
          <p>Hecho con amor para mostrar lo que creás.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;