// // src/components/Schedule.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
  { date: '16/01/2025', description: 'Oficinas de programação' },
  { date: '17/01/2025', description: 'Início da Hackathon' },
  { date: '18/01/2025', description: 'Término da Hackathon / Cerimônia de encerramento' },
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
              <p className="text-lg text-muted-foreground">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
