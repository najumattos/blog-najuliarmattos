import { useEffect, useState } from 'react';

export function useMuralMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchMessages() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/data/mural.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar o mural');
        }

        const data = await response.json();
        if (isMounted) {
          setMessages(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Erro desconhecido');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchMessages();

    return () => {
      isMounted = false;
    };
  }, []);

  return { messages, loading, error };
}