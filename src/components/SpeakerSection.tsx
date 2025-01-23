import React from 'react';

type Speaker = {
  name: string;
  title?: string;
  photo: string;
};

const speakers: Speaker[] = [
  {
    name: 'Uianes Luiz Rockenbach Biondo',
    photo: 'https://avatars.githubusercontent.com/u/53319823?v=4'
  },
  {
    name: 'Vinicius Bisognin Immich',
    photo: 'https://avatars.githubusercontent.com/u/1559421?v=4'
  },
  {
    name: 'Patricia Ribeiro',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQG-PoX7NSnLUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730129426159?e=1742428800&v=beta&t=W0QZWEpzkpmh4CzR5ShCsvafXQa-V_-PqKrb7ikG0w0'
  },
];

const SpeakerSection: React.FC = () => {
  return (
    <section className="bg-background text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Palestrantes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group rounded-lg shadow-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="relative w-40 h-40 bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{speaker.name}</h3>
              <p className="text-sm text-gray-400">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;