import BackButton from '../components/BackButton';
import HeaderCV from '../components/HeaderCV';
import EntreEmContato from '../components/EntreEmContato';
import Mural from '../components/Mural';
import './style.css';

export default function Contato() {
  return (
    <div className="container">
      <div>
     <HeaderCV/>  
     <h3>Entre em contato</h3>
     <EntreEmContato/>
     <h3>Mural</h3>
     <Mural/>      
</div>  
    <BackButton />
    </div>
  );
}
