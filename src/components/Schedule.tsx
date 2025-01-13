import React from 'react';

const events = [
  {
    date: '20-01-2025',
    activities: [
      {
        time: '19:00 - 19:30',
        title: 'Abertura do Evento',
        speaker: false,
      },
      {
        time: '19:30 - 22:00',
        title: 'Palestra - Carreira acadêmica em T.I.',
        speaker: 'Uianes Luiz Rockenbach Biondo',
      },
    ],
  },
  {
    date: '21-01-2025',
    activities: [
      {
        time: '19:00 - 20:30',
        title: 'Palestra - Trabalho remoto e estrangeiro',
        speaker: 'Vinicius Bisognin Immich',
      },
      {
        time: '20:30 - 22:00',
        title: 'Palestra sobre Acessibilidade na Web.',
        speaker: 'Patricia Ribeiro',
      },
    ],
  },
  {
    date: '22-01-2025',
    activities: [
      {
        time: '19:00 - 22:00',
        title: 'Roda de conversa - Mulheres dentro de T.I.',
        speaker: false,
      },
    ],
  },
  {
    date: '23-01-2025',
    activities: [
      {
        time: '19:00 - 22:00',
        title: 'Git e Github',
        speaker: 'Alisson G. da Rosa & Marco A. Babinski',
      },
      {
        time: '19:00 - 22:00',
        title: 'Testes automatizados com JUnit',
        speaker: 'Tobias de Vargas',
      },
      {
        time: '19:00 - 22:00',
        title: 'Introdução a Arduino utilizando ThinkerCAD',
        speaker: 'Camila Munzlinger',
      },
      {
        time: '19:00 - 22:00',
        title: 'Elaboração de textos em LaTeX',
        speaker: 'Mateus Dal Forno',
      },
    ],
  },
  {
    date: '24-01-2025',
    activities: [
      {
        time: '19:00 - 20:30',
        title: 'Confraternização com jogos',
        speaker: false,
      },
      {
        time: '20:30 - 22:00',
        title: 'Encerramento do evento',
        speaker: 'Organizador do Evento',
      },
    ],
  },
];


const Schedule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-white p-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h2 className="text-4xl font-bold text-center mb-8">Cronograma</h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="border-l-4  bg-[#111111] p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">{event.date}</h3>
            <ul className="space-y-4">
              {event.activities.map((activity, i) => (
                <li key={i} className="p-3 bg-zinc-900 rounded-md">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                    {activity.speaker && (
                      <p className="text-sm text-gray-500 italic">{activity.speaker}</p>
                    )}
                  </div>
                  <p className="text-lg text-gray-100 font-bold mt-1">{activity.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
