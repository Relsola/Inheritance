import { useState } from 'react';
import LinkData from '@/data/link.json';

function Search() {
  const [value, setValue] = useState('');

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

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();

      const nodes = Array.from(document.querySelectorAll('.search-link'));
      if (nodes.length === 0) return;
      const index = nodes.findIndex(node => node.classList.contains('active'));

      if (index === -1) {
        nodes[0].classList.add('active');
      } else if (index < nodes.length - 1) {
        nodes[index].classList.remove('active');
        nodes[index + 1].classList.add('active');
      } else {
        nodes[index].classList.remove('active');
        nodes[0].classList.add('active');
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();

      const nodes = Array.from(document.querySelectorAll('.search-link'));
      if (nodes.length === 0) return;
      const index = nodes.findIndex(node => node.classList.contains('active'));

      if (index === -1) {
        nodes[0].classList.add('active');
      } else if (index > 0) {
        nodes[index].classList.remove('active');
        nodes[index - 1].classList.add('active');
      } else {
        nodes[index].classList.remove('active');
        nodes[nodes.length - 1].classList.add('active');
      }
    }

    if (e.key === 'Enter') {
      const node = document.querySelector('.search-link.active');
      node && (node as HTMLAnchorElement).click();
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
        <div className="absolute shadow top-10 w-full rounded-b-lg bg-[#fff]">
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
