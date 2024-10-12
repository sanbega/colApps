import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Sección de Héroe */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-20 text-center text-white">
        <Image
          src="/images/Logocompleto.png"
          alt="Logo de Belleza Natural"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">Shineth</h1>
        <p className="text-lg mb-8">
          Descubre nuestros productos faciales premium
        </p>
        <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200">
          Iniciar Secion
        </button>
      </section>

      {/* Sección de Productos */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Producto 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Crema Hidratante</h3>
                <p className="text-gray-600">$25.00</p>
                <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-pink-600">
                  Añadir al Carrito
                </button>
              </div>
            </div>
            {/* Producto 2 */}
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Producto 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Serum Facial</h3>
                <p className="text-gray-600">$30.00</p>
                <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-pink-600">
                  Añadir al Carrito
                </button>
              </div>
            </div>
            {/* Producto 3 */}
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Producto 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Mascarilla Facial</h3>
                <p className="text-gray-600">$20.00</p>
                <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-pink-600">
                  Añadir al Carrito
                </button>
              </div>
            </div>
            {/* Más productos... */}
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold">Faciales Personalizados</h3>
              <p className="text-gray-600 mt-2">
                Diseñados para tu tipo de piel.
              </p>
            </div>
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold">Tratamientos Antiedad</h3>
              <p className="text-gray-600 mt-2">Ayuda a rejuvenecer tu piel.</p>
            </div>
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold">Limpieza Facial Profunda</h3>
              <p className="text-gray-600 mt-2">
                Elimina impurezas y rejuvenece tu rostro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Testimonios de Clientes</h2>
          <div className="flex flex-col space-y-8">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "¡Me encanta este serum! Mi piel nunca ha estado tan radiante."
              </p>
              <p className="mt-4 font-semibold">- Ana P.</p>
            </div>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "La crema hidratante es increíble. La recomiendo a todos."
              </p>
              <p className="mt-4 font-semibold">- Laura G.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Galería */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Image
                src="/images/galeria1.jpg" // Asegúrate de tener estas imágenes en la carpeta public
                alt="Imagen 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/images/galeria2.jpg"
                alt="Imagen 2"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/images/galeria3.jpg"
                alt="Imagen 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/images/galeria4.jpg"
                alt="Imagen 4"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <h3 className="font-semibold">¿Cómo puedo hacer un pedido?</h3>
              <p className="text-gray-600">
                Puedes hacer un pedido directamente desde nuestra tienda en
                línea.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">¿Hacen envíos internacionales?</h3>
              <p className="text-gray-600">
                Sí, realizamos envíos a varios países. Verifica si tu país está
                en la lista durante el checkout.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-600">
                Aceptamos tarjetas de crédito, PayPal y transferencias
                bancarias.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
          <p className="text-lg mb-4">
            ¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Información de Contacto
              </h3>
              <p className="text-gray-600">
                <strong>Email:</strong> contacto@bellezanatural.com
              </p>
              <p className="text-gray-600">
                <strong>Teléfono:</strong> +123 456 7890
              </p>
              <p className="text-gray-600">
                <strong>Dirección:</strong> Calle de la Belleza 123, Ciudad,
                País
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Facebook
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  Instagram
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Envía un Mensaje</h3>
              <form>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="border rounded-lg p-2 w-full mb-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="border rounded-lg p-2 w-full mb-4"
                  required
                />
                <textarea
                  placeholder="Tu mensaje"
                  className="border rounded-lg p-2 w-full mb-4 h-32"
                  required
                ></textarea>
                <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 hover:bg-pink-600">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Mapa de ubicación (opcional) */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Nuestra Ubicación</h3>
            <iframe
              className="w-full h-64 border rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097337!2d144.95373631531815!3d-37.81720997975175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0b1e5b83%3A0xf3fdfc2bc6cbe7e1!2sCalle%20de%20la%20Belleza%20123%2C%20Ciudad%2C%20Pa%C3%ADs!5e0!3m2!1ses-419!2sus!4v1617985822272!5m2!1ses-419!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-purple-500 text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Belleza Natural. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
