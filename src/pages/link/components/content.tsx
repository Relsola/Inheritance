import Icon from '@/components/icon';
import LinkData from '@/data/link.json';

export interface LinkCardProps {
  title: string;
  desc: string;
  link: string;
  src: string;
}

interface LinkTagProps {
  type: string;
  title: string;
  content: LinkCardProps[];
}

const base = import.meta.env.VITE_BASE_URL;

function Tag({ type, title, content }: LinkTagProps) {
  return (
    <div>
      <div
        className="flex justify-start items-center text-lg"
        id={`link-item-${type}`}
      >
        <Icon classes="w7 h7 ml5 mr1" name={type} />
        <span>{title}</span>
      </div>
      {content.map(item => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}

function Card({ title, desc, link, src }: LinkCardProps) {
  return (
    <a
      className="inline-flex justify-around items-center w55 h18 m5 bg-white rounded-xl transition-all hover:shadow-md hover:translate-y--1 hover:scale-105 hover:color-active"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <section className="flex justify-start items-center">
        <img className="w10 h10 mr2.5" src={base + src} />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-sm">{title}</span>
          <span className="color-[#6c757d] text-xs py0.5">{desc}</span>
        </div>
      </section>
      <Icon classes="w5 h5 fill-[#bfbfbf] hover:fill-[#000000]" name="arrive" />
    </a>
  );
}

function Content() {
  return (
    <div className="w-full h[calc(100%-100px)] overflow-auto">
      {LinkData.map(item => (
        <Tag key={item.type} {...item} />
      ))}
    </div>
  );
}

export default Content;
