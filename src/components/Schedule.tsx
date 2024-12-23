// src/components/Schedule.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type Event = {
  date: string;
  description: string | string[];
};

const events: Event[] = [
  { date: '20-01-2025', description: 'Abertura do Evento / Palestra - Carreira acadêmica em T.I.' },
  {
    date: '21-01-2025',
    description: ['Palestra - Trabalho remoto e estrangeiro', 'Palestra sobre Acessibilidade na Web.'],
  },
  { date: '22-01-2025', description: 'Roda de conversa - Mulheres dentro de T.I.' },
  { date: '23-01-2025', description: 'Oficinas'},
  { date: '24-01-2025', description: 'SpeedCode / Encerramento do evento.' },
];

const Schedule: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl text-white font-bold text-center ">Cronograma:</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <Card key={index} className="glass p-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">{event.date}</CardTitle>
            </CardHeader>
            <CardContent>
              {Array.isArray(event.description) ? (
                event.description.map((desc, i) => (
                  <p key={i} className="text-lg text-muted-foreground">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-lg text-muted-foreground">{event.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
