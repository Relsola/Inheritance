import { useState, useRef } from 'react';
import LinkData from '@/data/link.json';

function Search() {
  const [value, setValue] = useState('');
  const searchLink = useRef<HTMLDivElement>(null);

  const low = value.toLowerCase();
  const result = low
    ? LinkData.map(item => item.content)
        .flat()
        .filter(
          ({ title, desc }) =>
            title.toLowerCase().includes(low) ||
            desc.toLowerCase().includes(low)
        )
    : [];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !searchLink.current ||
      !searchLink.current.childNodes.length ||
      !['ArrowUp', 'ArrowDown', 'Enter'].includes(e.key)
    ) {
      return;
    }

    e.preventDefault();
    const nodes = Array.from(searchLink.current.childNodes) as HTMLElement[];
    let index = nodes.findIndex(v => v.classList.contains('text-active'));

    if (e.key === 'Enter') index !== -1 && nodes[index].click();
    else if (index === -1) nodes[0].classList.add('text-active');
    else {
      nodes[index].classList.remove('text-active');
      const length = nodes.length;
      index = (e.key === 'ArrowUp' ? index - 1 + length : index + 1) % length;
      nodes[index].classList.add('text-active');
    }
  };

  return (
    <section className="w-full h25 flex-center">
      <div className="flex-center relative">
        <input
          value={value}
          className="max-w200 min-w125 h10 border-none rounded p0 px5 bg-[#f2f3f4] outline-none placeholder-[#bfbfbf]"
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="搜索"
        />
        <img
          className="w5 h5 p2.5 cursor-pointer bg-[#f2f3f4]"
          src={import.meta.env.VITE_BASE_URL + 'link/search.svg'}
        />
        <div
          className="absolute shadow top-10 w-full rounded-b-lg bg-[#fff]"
          ref={searchLink}
        >
          {result.map(({ title, desc, link }) => (
            <a
              key={title}
              className="flex justify-start items-center px2.5 py1.25 text-sm color-active hover:rounded hover:bg-[#f2f3f4]"
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              <span className="font-bold mr5">{title}</span>
              <span className="color-[#6c757d]">{desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
