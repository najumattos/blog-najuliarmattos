import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackButton.css';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      className="back-button"
      onClick={() => navigate('/')}
      title="Voltar"
    >
      <ArrowLeft size={20} />
      Voltar
    </button>
  );
}
