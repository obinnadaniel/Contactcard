import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return(
    <div className="contacts">
     <ContactCard 
       name="Mr Flokky" 
       imgUrl="img/brew.jpg" 
       phone="(+44) 2355678990"
       email="flokky@outlook.com"
      />
     <ContactCard 
       name="Chi-chi" 
       imgUrl="img/choudbar.jpg" 
       phone="(+63) 895435345" 
       email="choud@gmail.com"
     />
     <ContactCard
       name="Daniel" 
       imgUrl="img/dose.jpg" 
       phone="(+67) 645365298" 
       email="dose@yahooo.com" 
     />
     <ContactCard 
       name="Mrs Gold" 
       imgUrl="img/goldsstien.jpg" 
       phone="(+234) 387560466 " 
       email="goldstien@gmail.com"
     />
     <ContactCard
       name="Hitachi" 
       imgUrl="img/hitesh.jpg" 
       phone="(+67) 53635377" 
       email="hitesh@gmail.com" 
     />
     <ContactCard
       name="Kobi" 
       imgUrl="img/kobu.jpg" 
       phone="(+1) 2856474378" 
       email="Kobi@yahoo.com" 
     />
     <ContactCard
       name="Mark" 
       imgUrl="img/markus.jpg" 
       phone="(+86) 354735638326" 
       email="markus@yahoo.com" 
     />
     <ContactCard
       name="Mr Mike" 
       imgUrl="img/mika.jpg" 
       phone="(+27) 834736528" 
       email="mika@gmail.com" 
     />
     <ContactCard
       name="Minzx" 
       imgUrl="img/mnz.jpg" 
       phone="(+32) 648463837" 
       email="mnz@support.com" 
     />
     <ContactCard
       name="Oscar" 
       imgUrl="img/oskar.jpg" 
       phone="(+65) 839457490437" 
       email="oskar@yahoo.com" 
     />
    </div>
  );
}
export default App;