import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlarAktarim } = props;
  console.log("yorumlarAktarim", yorumlarAktarim);

  return (
    <div>
      {yorumlarAktarim.map((y, i) => (
        <div key={i} >
          <Yorum yorumAktarim={y} /></div>
      ))}
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
    </div>
  );
};

export default Yorumlar;
