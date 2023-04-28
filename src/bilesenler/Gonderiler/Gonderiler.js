import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderlerAktarim } = props;
  console.log("gonderlerAktarim", gonderlerAktarim);

  return (
    <div className='posts-container-wrapper'>
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {gonderlerAktarim.map((g, i) => (
        <Gonderi key={i} gonderiAktarim={g} gonderiyiBegen={gonderiyiBegen} />
      ))}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
