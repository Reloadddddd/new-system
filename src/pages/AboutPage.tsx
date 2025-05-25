import React from 'react';
import FounderCard from '../components/FounderCard';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'AyviTV',
      role: 'Propriétaire',
      bio: 'Propriétaire à plein temps !',
      image: 'https://media.discordapp.net/attachments/1372686113826934855/1375934931032604713/Pdpamoiwesh.jpg?ex=68337ec3&is=68322d43&hm=403023d7105a95a0005998beb534bce22ff758e6a5d8611059ce2fe74d6216af&=&format=webp',
    },
    {
      name: 'Wayzen',
      role: 'Propriétaire',
      bio: 'wallah pas de bio',
      image: 'https://images-ext-1.discordapp.net/external/ggsHTiaEBo1Rr2Gu8dOfWQ8FPvtWQdh5f1w0ZNlWLxg/%3Fsize%3D128/https/cdn.discordapp.com/avatars/1113193856683475045/a_08a26816c0613843bb07ffd7ce221acd.gif',
    }
        {
      name: '夜M-KAI牙',
      role: 'Fondateur',
      bio: 'Tu es en recherche du meilleur serveur de graph: https://discord.gg/8yNhnbaGNu 🎨',
      image: 'https://images-ext-1.discordapp.net/external/gW58U9t_doJTRwMtNIFZSHT4Q0Wa3N36N4CykqOy2hs/%3Fsize%3D128/https/cdn.discordapp.com/avatars/1187809182888497243/9a4b5936babcd51abe27bd7e48d6b05b.png?format=webp&quality=lossless',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0518] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About Reload</h1>
          
          {/* Mission Statement */}
          <div className="bg-[#1A0F2E] rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Notre Mission</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Reload est un serveur de publicité Discord de premier plan, dédié à aider les propriétaires de communautés à développer                  leurs serveurs et à se connecter avec des personnes partageant les mêmes idées. Nous offrons une plateforme où des communautés Discord de qualité peuvent présenter leurs serveurs et attirer de nouveaux membres.
            </p>
            <p className="text-gray-300 text-lg">
              Fondé en 2025, Reload est devenu un centre de découverte de serveurs Discord, mettant l'accent sur la qualité plutôt que                 sur la quantité. Nous examinons soigneusement tous les serveurs pour nous assurer qu'ils répondent à nos normes en matière               d'activité, de modération et de contenu.
            </p>
          </div>
          
          {/* Founders Section */}
          <h2 className="text-2xl font-bold text-white mb-6">Rencontrez nos fondateurs</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FounderCard {...founder} />
              </motion.div>
            ))}
          </div>
          
          {/* Community Stats */}
          <h2 className="text-2xl font-bold text-white mb-6">Notre communauté</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#1A0F2E] rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">41</h3>
              <p className="text-gray-300">Discord Members</p>
            </div>
            <div className="bg-[#1A0F2E] rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">0</h3>
              <p className="text-gray-300">Partnered Servers</p>
            </div>
            <div className="bg-[#1A0F2E] rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">0</h3>
              <p className="text-gray-300">Monthly Visitors</p>
            </div>
            <div className="bg-[#1A0F2E] rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">98%</h3>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
          
          {/* Latest News */}
          <h2 className="text-2xl font-bold text-white mb-6">Latest Updates</h2>
          <div className="bg-[#1A0F2E] rounded-lg p-8 mb-5">
            <div className="mb-6 pb-6 border-b border-purple-900">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">Website Launch</h3>
                <span className="text-purple-400 text-sm">25-05-2025</span>
              </div>
              <p className="text-gray-300">
                We're excited to announce the launch of our new website! Now you can browse 
                and join Discord servers directly from our platform.
              </p>
            </div>
            
            <div className="mb-6 pb-6 border-b border-purple-900">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">Server Verification System</h3>
                <span className="text-purple-400 text-sm">25-05-2025</span>
              </div>
              <p className="text-gray-300">
                We've implemented a new verification system to ensure all servers in our network 
                maintain high standards of quality and safety.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
