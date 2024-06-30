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
    <section className="search">
      <div className="search-input">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="搜索"
        />
        <img src="src/assets/link/search.svg" />
        <div className="search-result">
          {result.map(({ title, desc, link }) => (
            <a key={title} className="search-link" href={link} target="_blank">
              <span className="link-title">{title}</span>
              <span className="link-desc">{desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
