import BackButton from '../components/BackButton';
import './style.css';

export default function Sobre() {
  return (
    <div className="container">     
      <h1>Sobre este Blog</h1>
      <div className="content">
        <p>
          Este é um blog pessoal construído com React e Vite, hospedado no GitHub Pages. 
          Todos os posts são armazenados em formato Markdown para fácil manutenção e versionamento.
        </p>
        <p>
          A arquitetura segue um padrão MVC simplificado com hooks customizados para separar 
          a lógica de dados da apresentação. Cada componente é responsável por uma única função, 
          facilitando testes e manutenção.
        </p>
      </div>

       <BackButton />
    </div>
  );
}
