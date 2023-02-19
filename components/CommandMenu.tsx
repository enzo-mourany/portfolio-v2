import { useEffect, useState } from 'react';

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
  }, [isOpen]);

  const handlePageClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='w-fit h-auto fixed z-10 top-1/2 left-1/2 bg-zinc-800 border-zinc-500 border-2 rounded-lg'>
          <input
            type='text'
            placeholder='Search pages'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <ul>
            {filteredPages.map((page) => (
              <li key={page.path} onClick={() => handlePageClick()}>
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
