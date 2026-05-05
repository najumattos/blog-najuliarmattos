import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar
 * - Responsável pela navegação principal
 * - Segue SRP: estado de UI (open/close) encapsulado aqui
 * - Aceita prop `links` (array { to, label }) para permitir configuração externa
 */
export function Navbar({ links }) {
  const defaultLinks = [
    { to: '/artigos', label: 'Artigos' },
    { to: '/contato', label: 'Contato' },
    { to: '/sobre', label: 'Sobre' },
  ];
  const navLinks = Array.isArray(links) && links.length ? links : defaultLinks;

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onOutside(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
    };
  }, [open]);

  const menuId = 'main-navigation';

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="nav-inner">
        <div className="nav-brand">Ana Julia Reis de Mattos</div>

        <button
          ref={buttonRef}
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </button>

        <ul
          id={menuId}
          ref={menuRef}
          className={`nav-menu ${open ? 'open' : ''}`}
          role="menubar"
        >
          {navLinks.map(item => (
            <li key={item.to} role="none">
              <Link role="menuitem" to={item.to} className="nav-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
