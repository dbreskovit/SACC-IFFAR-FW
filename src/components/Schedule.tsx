// src/components/Schedule.tsx
import React from 'react';

type Event = {
  date: string;
  description: string;
};

const events: Event[] = [
  { date: '13/01/2025', description: 'Abertura do Evento / Palestra sobre Acessibilidade na Web' },
  {
    date: '14/01/2025',
    description: 'Palestra - Trabalho para Profissional em T.I. no meio acadêmico',
  },
  { date: '15/01/2025', description: 'Roda de conversa - Mulheres dentro de T.I.' },
  { date: '16/01/2025', description: 'Oficinas' },
  { date: '17/01/2025', description: 'Início da Speedcode' },
  {
    date: '18/01/2025',
    description: 'Término da Speedcode / Cerimônia de encerramento',
  },
];

const Schedule: React.FC = () => {
  return (
    <div className="schedule-container">
      <h2 className="text-2xl font-bold text-center mb-6">Cronograma</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="border-b pb-4">
            <p className="text-xl font-semibold">{event.date}</p>
            <p className="text-lg">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
