"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const WEAPONS_API_URL = 'https://valorant-api.com/v1/weapons/skins?language=pt-BR';

export default function Home() {
  const [weapons, setWeapons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  useEffect(() => {
    async function fetchWeapons() {
      const response = await axios.get(WEAPONS_API_URL);
      setWeapons(response.data.data);
    }

    fetchWeapons();
  }, []);

  const filteredWeapons = weapons.filter(weapon =>
    weapon.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onCopy = (text) => {
    if(!navigator.clipboard) return
    navigator.clipboard.writeText(text)
    toast.success('Arma copiada com sucesso!', {autoClose: 5000, });
  }

  return (
    <div>
      {/* Navbar */}
      <div className="navbar flex items-center py-8 px-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1230847106114261033/1234210919614124164/Inifnity_capa_dc.png?ex=662fe7fd&is=662e967d&hm=84317ffe124a3e3af49ed39c5b8ed0ef2f00dfd00da0fe29dd2469f49b97836f&"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <h1 className="text-2xl font-bold">Skins do valorant</h1>
        </div>

        {/* Centered Input */}
        <input
          type="text"
          className="outline-none font-bold p-2 rounded-lg bg-white/30 backdrop-blur-sm text-center ml-[28%] px-10"
          placeholder="Buscar armas"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>

      {/* Weapon Grid */}
      <div className="grid grid-cols-3 gap-8">
        {filteredWeapons.map((weapon) => (
          <button
            key={weapon.uuid}
            className="flex flex-col items-center p-4 border rounded-md hover:border-green-400"
            onClick={() => onCopy(weapon.displayName)}
          >
            <h2 className="font-bold text-lg">{weapon.displayName}</h2>
            <img src={weapon.displayIcon} alt={weapon.displayName} className="h-20 w-22" />
            <p>{weapon.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
