import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Heart, Calendar, ChevronDown } from 'lucide-react';
import { destinations } from '../data/destinations';
import Header from '../components/Header';

export default function DestinationPage() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const defaultDates = {
    start: '27/11/2025',
    end: '1/2/2025',
  };

  const calculateTotal = (basePrice: number, persons: number) => {
    const subtotal = basePrice * persons;
    const tax = subtotal * 0.18; // 18% IGV
    return {
      subtotal,
      total: subtotal + tax,
    };
  };

  const totals = calculateTotal(destination.pricePerPerson, destination.maxVisitors);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{destination.name}</h1>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
                <span>Compartir</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <Heart className="h-5 w-5" />
                <span>Guardar</span>
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src={destination.mainImage}
                alt={destination.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            {destination.galleryImages.slice(1, 5).map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-48 w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="col-span-2">
              {/* Title and Basic Info */}
              <div className="border-b pb-6">
                <h2 className="text-2xl font-bold">
                  Excursión: {destination.name}
                </h2>
                <p className="text-gray-600">
                  {destination.maxVisitors} visitantes máximo • {destination.duration}
                </p>
              </div>

              {/* Popularity Badge */}
              {destination.popularityBadge && (
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">{destination.popularityBadge}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{destination.rating}</span>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(destination.rating))}
                    </div>
                    <span className="text-gray-600">
                      {destination.reviews} Reseñas
                    </span>
                  </div>
                </div>
              )}

              {/* Tour Operator */}
              <div className="mt-6 flex items-center space-x-4">
                <img
                  src={destination.tourOperator.avatar}
                  alt={destination.tourOperator.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">
                    Operador Turístico: {destination.tourOperator.name}
                  </h4>
                  <p className="text-gray-600">
                    {destination.tourOperator.experience}
                  </p>
                </div>
              </div>

              {/* Activities */}
              <div className="mt-8">
                <h3 className="text-xl font-bold">Actividades</h3>
                <div className="mt-4 space-y-4">
                  {destination.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <h4 className="font-bold">
                          {activity.id}. {activity.title}
                        </h4>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                      <button className="rounded-lg bg-[#3C3329] px-4 py-2 text-white">
                        Reservar
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="text-gray-700">{destination.description}</p>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 gap-6">
                {destination.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="rounded-full bg-gray-100 p-3">
                      <span className="text-2xl">🏔️</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="sticky top-24">
              <div className="rounded-lg border p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-2xl font-bold">
                    S/{destination.pricePerPerson} por persona
                  </span>
                </div>

                {/* Date Picker */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        IDA
                      </label>
                      <input
                        type="text"
                        value={defaultDates.start}
                        readOnly
                        className="mt-1 block w-full rounded-md border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        REGRESO
                      </label>
                      <input
                        type="text"
                        value={defaultDates.end}
                        readOnly
                        className="mt-1 block w-full rounded-md border p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Activities Dropdown */}
                <div className="mb-4">
                  <button className="flex w-full items-center justify-between rounded-md border p-2">
                    <span>ACTIVIDADES</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </div>

                {/* Reserve Button */}
                <button className="mb-4 w-full rounded-lg bg-[#E91E63] py-3 text-white">
                  Reserva
                </button>

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>S/{destination.pricePerPerson} x {destination.maxVisitors} personas</span>
                    <span>S/{totals.subtotal}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Total sin incluir impuestos</span>
                    <span className="font-bold">S/{totals.total}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Invita a un amigo y completa el grupo</p>
                  <p>No se hará ningún cargo por el momento</p>
                </div>

                {/* Report Link */}
                <div className="mt-4 text-center">
                  <button className="text-sm text-gray-600 underline">
                    Denuncie este anuncio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}