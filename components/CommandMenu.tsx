import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface CommandMenuProps {
  pages: { name: string; path: string }[];
}

const CommandMenu: React.FC<CommandMenuProps> = ({ pages }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && event.metaKey) {
        setIsOpen(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'k' && event.metaKey) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handlePageClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div>
          <input
            type='text'
            placeholder='Search pages'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <ul>
            {filteredPages.map((page) => (
              <li key={page.path} onClick={() => handlePageClick(page.path)}>
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CommandMenu;
