import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface CommandMenuProps {
  pages: { name: string; path: string }[];
}

const CommandMenu: React.FC<CommandMenuProps> = ({ pages }) => {
  //const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && event.metaKey) {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlePageClick = (path: string) => {
    //router.push(path);
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
