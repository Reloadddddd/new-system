import { DiscordServer } from '../types';

export const discordServers: DiscordServer[] = [
  {
    id: '2',
    name: 'Reload Ta Pub',
    description: 'Serveur du fondateur AyviTV & Wayzen!',
    category: 'advertising',
    inviteLink: 'https://discord.gg/JQnhxUGxqr',
    iconUrl: 'https://media.discordapp.net/attachments/1372686113826934855/1375909100017160402/ReloadFrance.png?ex=683366b4&is=68321534&hm=d7ada5e5d94e8ccd693d3eff30d21c4e0e9a7e71f8be12b85f1b47865727b594&=&format=webp&quality=lossless',
    memberCount: 41,
    boostLevel: 2,
    promoted: true,
    promotionLevel: 'premium'
  },
    {
    id: '1',
    name: 'Le Repère des graphistes',
    description: '🎨 Tu crées, testes et explores, mais tu as parfois l’impression de tourner en rond ? Tu n’es pas seul(e) : beaucoup de graphistes passionné(e)s se posent les mêmes questions, et c’est tout à fait normal. 🌟 C’est pourquoi on a lancé Le Repère des Graphistes, un serveur Discord pensé pour toi. Tu y trouveras des retours bienveillants, des ressources utiles, des défis stimulants et une vraie communauté de créatif(ve)s. Ici, pas de pression : juste du partage, de l’entraide et de la motivation pour avancer ensemble.',
    category: 'graphiste',
    inviteLink: 'https://discord.gg/EjKBs4kf6k',
    iconUrl: 'https://media.discordapp.net/attachments/1376254397952299139/1376271382979154141/Sans_titre_89_20250306070915.png?ex=6834b81b&is=6833669b&hm=826d935d716686044299cf85455cfc66ed16e1a728e83b50feda92b2591c7c62&=&format=webp&quality=lossless&width=856&height=856',
    memberCount: 341,
    boostLevel: 22,
    promoted: true,
    promotionLevel: 'premium'
  },
      {
    id: '1',
    name: 'Le Repère des graphistes',
    description: '💼 NOS SERVICES : Développement de bots Discord sur mesure (RP, modération, économie…), Création de serveurs clés en main (RP, boutique, communautaire), Graphismes professionnels : logos, bannières, identités visuelles, Accompagnement sur vos projets Discord',
    category: 'Developper',
    inviteLink: 'https://discord.gg/jXBUwUeXmx',
    iconUrl: 'https://images-ext-1.discordapp.net/external/Mot4hkgT29bkInCppOtpp2bp2vIadMfkziuusgQeoQM/%3Fsize%3D256/https/cdn.discordapp.com/icons/1374611561154613328/1652265c810e2f79ddcc64dec2da0fb0.png?format=webp&quality=lossless',
    memberCount: 15,
    boostLevel: 1,
    promoted: true,
    promotionLevel: 'premium'
  },
];

// Sort and rank servers based on member count and boost level
export const getRankedServers = () => {
  return discordServers
    .sort((a, b) => {
      // Calculate score based on member count and boost level
      const scoreA = a.memberCount + (a.boostLevel * 10);
      const scoreB = b.memberCount + (b.boostLevel * 10);
      return scoreB - scoreA;
    })
    .map((server, index) => ({
      ...server,
      ranking: index + 1
    }));
};
