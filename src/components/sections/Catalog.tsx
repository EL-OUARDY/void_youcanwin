import { ChevronRightIcon } from 'lucide-react';
import { Container } from '../shared/Container';

const catalog = [
  {
    title: 'Album Digital 2025',
    desc: 'Collection de cartes avec échanges et défis.',
    image: '/assets/img/player.webp',
    badge: 'STAR',
    badgeColor: 'bg-primary',
    link: true,
  },
  {
    title: 'Quiz Football',
    desc: "Questions sur l'actualité et l'histoire du foot.",
    image: '/assets/img/quiz.webp',
    badge: 'BIENTÔT',
    badgeColor: 'bg-muted-foreground',
    link: false,
  },
  {
    title: 'Tombola digitale',
    desc: 'Tirages au sort avec lots sponsorisés.',
    image: '/assets/img/phone.webp',
    link: false,
  },
  {
    title: 'Pronostics',
    desc: 'Prédictions de matchs et classements.',
    image: '/assets/img/two-phones.webp',
    link: false,
  },
];

function Catalog() {
  return (
    <Container className="catalog relative py-24">
      {/* Header Section */}
      <h2 className="mb-4 text-center text-3xl leading-tight font-bold capitalize">
        Catalogue de jeux
      </h2>
      <p className="text-muted-foreground mx-auto mb-7 max-w-lg text-center leading-relaxed">
        Des mécaniques éprouvées pour engager vos audiences
      </p>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {catalog.map((item, idx) => (
          <div
            key={idx}
            className="group border-muted flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.badge && (
                <span
                  className={`absolute top-0 right-0 ${item.badgeColor} rounded-bl-xl px-4 py-1 text-sm! font-bold text-white`}
                >
                  {item.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex grow flex-col p-6 text-left">
              <h3 className="0 mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-muted-foreground mb-4 grow text-sm leading-relaxed">
                {item.desc}
              </p>

              {item.link && (
                <button className="text-primary flex cursor-pointer items-center gap-1 text-sm font-bold transition-all hover:gap-2">
                  Découvrir <ChevronRightIcon className="size-6" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Catalog;
