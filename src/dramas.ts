export type Drama = {
  id: string;
  title: string;
  tagline: string;
  genre: string;
  episodes: number;
  rating: string;
  image: string;
  imagePosition?: string;
  accent: string;
  description: string;
  tags: string[];
};

const unsplash = (id: string, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const dramas: Drama[] = [
  {
    id: 'heiress-returns',
    title: 'The Heiress Returns',
    tagline: 'She came back for everything they took.',
    genre: 'Revenge',
    episodes: 48,
    rating: '9.8',
    image: unsplash('photo-1534528741775-53994a69daeb', 900),
    imagePosition: 'center 32%',
    accent: '#d64e3d',
    description: 'After five years away, an heiress returns under a new name to reclaim her family empire and settle the score with the man who betrayed her.',
    tags: ['Revenge', 'Family secrets', 'Strong lead'],
  },
  {
    id: 'under-protection',
    title: 'Under His Protection',
    tagline: 'The one man she should not trust.',
    genre: 'Romance',
    episodes: 36,
    rating: '9.5',
    image: unsplash('photo-1500648767791-00dcc994a43e', 700),
    imagePosition: 'center 27%',
    accent: '#9f552f',
    description: 'A guarded bodyguard and a runaway bride are forced into close quarters as a family feud follows them across the city.',
    tags: ['Romance', 'Bodyguard', 'Slow burn'],
  },
  {
    id: 'second-chance',
    title: 'Second Chance at Dawn',
    tagline: 'A new life. One old promise.',
    genre: 'Romance',
    episodes: 42,
    rating: '9.7',
    image: unsplash('photo-1531123897727-8f129e1688ce', 700),
    imagePosition: 'center 28%',
    accent: '#94604c',
    description: 'A woman wakes up on the morning her marriage fell apart. This time, she chooses her own future and the friend who never left.',
    tags: ['Romance', 'Second chance', 'Rebirth'],
  },
  {
    id: 'crown-in-ashes',
    title: 'A Crown in Ashes',
    tagline: 'The throne was never his to take.',
    genre: 'Fantasy',
    episodes: 50,
    rating: '9.6',
    image: unsplash('photo-1506794778202-cad84cf45f1d', 700),
    imagePosition: 'center 25%',
    accent: '#57453c',
    description: 'The exiled heir returns to a kingdom on the brink, carrying the secret that could save the crown or destroy it for good.',
    tags: ['Fantasy', 'Royalty', 'Adventure'],
  },
  {
    id: 'rival-hearts',
    title: 'Falling for the Rival',
    tagline: 'The boardroom is only the beginning.',
    genre: 'Billionaire',
    episodes: 40,
    rating: '9.4',
    image: unsplash('photo-1529139574466-a303027c1d8b', 700),
    imagePosition: 'center 28%',
    accent: '#a04439',
    description: 'Two ambitious heirs enter a ruthless takeover battle and discover the most dangerous thing they could lose is each other.',
    tags: ['Billionaire', 'Workplace', 'Enemies to lovers'],
  },
  {
    id: 'midnight-alibi',
    title: 'The Midnight Alibi',
    tagline: 'Every witness has something to hide.',
    genre: 'Mystery',
    episodes: 32,
    rating: '9.3',
    image: unsplash('photo-1507003211169-0a1dd7228f2d', 700),
    imagePosition: 'center 24%',
    accent: '#464a48',
    description: 'A sharp-eyed journalist reopens a closed case and finds herself caught between a suspect who knows her past and a truth no one wants printed.',
    tags: ['Mystery', 'Crime', 'Suspense'],
  },
  {
    id: 'secret-heiress',
    title: 'My Secret Billionaire',
    tagline: 'He signed a contract. She changed the rules.',
    genre: 'Billionaire',
    episodes: 44,
    rating: '9.6',
    image: unsplash('photo-1494790108377-be9c29b29330', 700),
    imagePosition: 'center 27%',
    accent: '#996a47',
    description: 'A practical agreement brings a humble artist into the orbit of a reclusive billionaire. Their carefully drawn lines do not last long.',
    tags: ['Billionaire', 'Contract marriage', 'Romance'],
  },
  {
    id: 'moonbound-promise',
    title: 'A Moonbound Promise',
    tagline: 'Her fate was written in the stars.',
    genre: 'Werewolf',
    episodes: 38,
    rating: '9.5',
    image: unsplash('photo-1517841905240-472988babdf9', 700),
    imagePosition: 'center 25%',
    accent: '#84715e',
    description: 'An outsider discovers the bond that links her to the leader of a hidden pack and the prophecy that puts both their worlds at risk.',
    tags: ['Werewolf', 'Fantasy', 'Fated mates'],
  },
  {
    id: 'storm-bride',
    title: 'Bride of the Storm',
    tagline: 'One wedding. Two families at war.',
    genre: 'Romance',
    episodes: 30,
    rating: '9.2',
    image: unsplash('photo-1524504388940-b1c1722653e1', 700),
    imagePosition: 'center 30%',
    accent: '#98685b',
    description: 'A last-minute wedding joins the children of rival families. Their vow is meant to bring peace, but the secrets around it threaten to do the opposite.',
    tags: ['Romance', 'Marriage', 'Family drama'],
  },
  {
    id: 'after-midnight',
    title: 'Love After Midnight',
    tagline: 'Some stories start after everyone leaves.',
    genre: 'Office',
    episodes: 34,
    rating: '9.1',
    image: unsplash('photo-1534751516642-a1af1ef26a56', 700),
    imagePosition: 'center 24%',
    accent: '#b47755',
    description: 'A night-shift producer and a demanding creative director keep crossing paths after hours, where the rules feel a little less certain.',
    tags: ['Office', 'Romance', 'After hours'],
  },
];

export const genres = ['For you', 'Romance', 'Revenge', 'Billionaire', 'Fantasy', 'Mystery', 'Werewolf', 'Office'];
