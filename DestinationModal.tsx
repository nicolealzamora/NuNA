import React, { useState } from 'react';
import {
  Search,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import DestinationModal from './components/DestinationModal';
import { destinations } from './data/destinations';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [destinationsList, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showPeopleCounter, setShowPeopleCounter] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleAdultsChange = (value) => {
    setAdults(Math.max(0, adults + value));
  };

  const handleChildrenChange = (value) => {
    setChildren(Math.max(0, children + value));
  };

  const handleInfantsChange = (value) => {
    setInfants(Math.max(0, infants + value));
  };

  const totalPeople = adults + children + infants;

  const handleOpenModal = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  const regions = ['Arequipa', 'Huánuco', 'San Martín', 'Ancash'];

  const regionDestinations = {
    Arequipa: [
      'Cataratas de Pillones y Bosque de Piedras de Imata',
      'Excursión a las lagunas de Salinas y Yanaorco + Baños termales de Lojen',
      'Ruta del Sillar + Cañón de Culebrillas',
      'Dunas de la Joya',
      'Bosque de piedras de Choqolaqa',
      'Santuario Nacional Lagunas de Mejía',
    ],
    Huánuco: [
      'Cueva de las Lechuzas',
      '5 Lagunas de Pichgacocha, cordillera huayhuash',
      'Bosque de piedras Huayllay',
      'Parque nacional de tingo maria',
    ],
    'San Martín': [
      'Aguas sulfurosas de Oromina',
      'Quebrada de Churo',
      'Cascada Salto de la Bruja',
    ],
    Ancash: [
      'Complejo Arqueológico Cerro Sechín',
      'Monumento Arqueológico Chavín de Huántar',
      'Laguna 69',
    ],
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setDestinations(regionDestinations[region] || []);
    setShowRegionDropdown(false);
  };

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const currentDate = new Date();
  const currentMonth = generateCalendar(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const nextMonth = generateCalendar(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">NUNA</div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-900">
                About
              </a>
              <a href="#blog" className="text-gray-900">
                Blog
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f"
            className="w-full h-full object-cover"
            alt="Peru mountains"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-xl mb-4">Es hora de tu</h2>
          <h1 className="text-6xl font-bold mb-6">próxima aventura</h1>
          <p className="text-xl mb-8">
            Redefinimos la manera en la que experimentas el mundo.
          </p>
          <h1 className="text-8xl font-bold">PERU</h1>

          <div className="absolute bottom-12 flex flex-col items-center">
            <span className="text-sm mb-2">SCROLL</span>
            <div className="w-0.5 h-12 bg-white"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 flex space-x-4">
          <Facebook className="w-6 h-6 text-white" />
          <Instagram className="w-6 h-6 text-white" />
          <Twitter className="w-6 h-6 text-white" />
          <Youtube className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Unlock Places Section */}
      <section className="bg-[#FFF5EB] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-orange-500">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 10v-4a2 2 0 0 1 4 0v4" />
                <path d="M18 8a2 2 0 0 1 4 0v4" />
                <rect x="2" y="8" width="16" height="12" rx="2" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">Desbloque lugares</h2>
            <p className="text-gray-700">
              Las personas no deberían estar limitadas a los destinos turísticos
              más populares, esos donde todo el mundo quiere ir. En lugar de
              ello, nosotros nos enfocamos en brindarles amplias posibilidades
              donde cada rincón del país tiene cualidades únicas que esperan ser
              descubiertas.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
              OFERTAS
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
              className="w-full h-[400px] object-cover rounded-lg"
              alt="Travel adventure"
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[#3C3329] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Promoción de ofertas
          </h2>
          <div className="relative">
            <div className="bg-white rounded-full p-2 flex items-center max-w-4xl mx-auto">
              {/* Region Selector */}
              <div className="relative flex-1 px-4">
                <button
                  onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className={selectedRegion ? 'text-black' : 'text-gray-400'}
                  >
                    {selectedRegion || 'Región'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showRegionDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-50 py-2">
                    {regions.map((region) => (
                      <button
                        key={region}
                        onClick={() => handleRegionSelect(region)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Destination Selector */}
              <div className="relative flex-1 px-4 border-l">
                <button
                  onClick={() => setShowDestinations(!showDestinations)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-gray-400">Explora destinos</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showDestinations && destinationsList.length > 0 && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-50 py-2"
                    style={{
                      width: '300%',
                      transform: 'translateX(-100%)',
                    }}
                  >
                    {destinationsList.map((dest) => (
                      <button
                        key={dest}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Picker */}
              <div className="relative flex-1 px-4 border-l">
                <button
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-gray-400">
                    {startDate && endDate
                      ? `${startDate} - ${endDate}`
                      : 'Agrega fechas'}
                  </span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </button>

                {showDatePicker && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-50 p-4">
                    <div className="flex gap-8">
                      {/* Current Month Calendar */}
                      <div className="w-64">
                        <div className="text-center font-semibold mb-2">
                          {new Intl.DateTimeFormat('es-ES', {
                            month: 'long',
                            year: 'numeric',
                          }).format(currentDate)}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {[
                            'Lun',
                            'Mar',
                            'Mié',
                            'Jue',
                            'Vie',
                            'Sáb',
                            'Dom',
                          ].map((day) => (
                            <div
                              key={day}
                              className="text-center text-sm text-gray-500"
                            >
                              {day}
                            </div>
                          ))}
                          {currentMonth.map((date, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                setStartDate(date.toLocaleDateString())
                              }
                              className={`p-2 text-center rounded hover:bg-gray-100 ${
                                startDate === date.toLocaleDateString()
                                  ? 'bg-orange-500 text-white'
                                  : ''
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Next Month Calendar */}
                      <div className="w-64">
                        <div className="text-center font-semibold mb-2">
                          {new Intl.DateTimeFormat('es-ES', {
                            month: 'long',
                            year: 'numeric',
                          }).format(
                            new Date(
                              currentDate.getFullYear(),
                              currentDate.getMonth() + 1
                            )
                          )}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {[
                            'Lun',
                            'Mar',
                            'Mié',
                            'Jue',
                            'Vie',
                            'Sáb',
                            'Dom',
                          ].map((day) => (
                            <div
                              key={day}
                              className="text-center text-sm text-gray-500"
                            >
                              {day}
                            </div>
                          ))}
                          {nextMonth.map((date, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                setEndDate(date.toLocaleDateString())
                              }
                              className={`p-2 text-center rounded hover:bg-gray-100 ${
                                endDate === date.toLocaleDateString()
                                  ? 'bg-orange-500 text-white'
                                  : ''
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* People Counter */}
              <div className="relative flex-1 px-4 border-l">
                <button
                  onClick={() => setShowPeopleCounter(!showPeopleCounter)}
                  className="w-full outline-none text-left"
                >
                  {totalPeople > 0 ? `${totalPeople} personas` : '¿Cuántos?'}
                </button>

                {showPeopleCounter && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-50 p-4 w-64">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>Adultos</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleAdultsChange(-1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="mx-2">{adults}</span>
                          <button
                            onClick={() => handleAdultsChange(1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Edad: 13 años o más
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>Niños</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleChildrenChange(-1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="mx-2">{children}</span>
                          <button
                            onClick={() => handleChildrenChange(1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Edades 2 – 12</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Bebés</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleInfantsChange(-1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="mx-2">{infants}</span>
                          <button
                            onClick={() => handleInfantsChange(1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Menos de 2 años
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button className="bg-pink-500 p-3 rounded-full">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-[#3C3329] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(dest)}
            >
              <img
                src={dest.mainImage}
                className="w-full h-48 object-cover"
                alt={dest.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">
                  Comienza en S/. {dest.pricePerPerson}
                </p>
                <ul className="space-y-2 mb-6">
                  {dest.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      • {feature.description}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-orange-500 text-white py-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(dest);
                  }}
                >
                  RESERVA AHORA
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full">
            MOSTRAR MÁS
          </button>
        </div>
      </section>

      {/* Con Nuna desbloquearás Section */}
      <section className="bg-[#FFF5EB] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Con Nuna desbloquearás
          </h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt="Airplane at sunset"
                />
                <h3 className="text-xl font-bold mb-2">
                  Más allá de lo típico
                </h3>
                <p className="text-gray-700">
                  No más destinos populares, explora nuevas posibilidades y crea
                  experiencias diferentes.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt="Local travel guides"
                />
                <h3 className="text-xl font-bold mb-2">
                  El miedo no es el límite
                </h3>
                <p className="text-gray-700">
                  Guías turísticos y agencias locales te llevaran a y regresarán
                  a salvo de cada aventura
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt="Vintage car adventure"
                />
                <h3 className="text-xl font-bold mb-2">
                  Redefiniendo la proximidad
                </h3>
                <p className="text-gray-700">
                  No más tours masivos, conoce cada historia y expresión
                  cultural, en grupos reducidos.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt="Taking photos at sunset"
                />
                <h3 className="text-xl font-bold mb-2">
                  No eres un turista más
                </h3>
                <p className="text-gray-700">
                  Crea una experiencia que te vuelve parte de una comunidad y
                  cambia la forma en que ves el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos lugares disponibles Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
            className="w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Próximos lugares disponibles
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1"
                className="w-full h-full object-cover"
                alt="Cañon del Colca"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Cañon del Colca</h3>
                <p>Arequipa</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f"
                className="w-full h-full object-cover"
                alt="Huancaya"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Huancaya</h3>
                <p>Lima</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="w-full h-full object-cover"
                alt="Aguas Turquesa Millpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Aguas Turquesa Millpu</h3>
                <p>Ayacucho</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full">
              CUENTANOS QUÉ OTROS DESTINOS TE GUSTARÍA CONOCER
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3C3329] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517346665566-17b938c7f3ad"
              className="w-full h-80 object-cover rounded-lg"
              alt="Relaxing in hammock"
            />
            <div className="mt-4">
              <h2 className="text-4xl font-bold mb-2">nuna</h2>
              <p>Desbloqueemos tu próxima experiencia</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Dirección</h3>
              <p>NUNA SAC</p>
              <p>Lima - Perú</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contacto</h3>
              <p>Celular: +51 914 299 708</p>
              <p>nuna.pe.01@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Horario de oficina</h3>
              <p>Lunes a Sábados:</p>
              <p>9:00 a.m. - 7:00 p.m.</p>
              <p>Domingos y Festivos</p>
              <p>8:00 a.m. - 5:00 p.m.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;