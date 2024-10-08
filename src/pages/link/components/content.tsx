import { Tooltip } from 'antd';
import { useAppSelector } from '@/app/hooks';
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
  const device = useAppSelector(state => state.config.device);

  return device === 'desktop' ? (
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
          <span
            title={desc}
            className="w28 text-one-none color-[#6c757d] text-xs py0.5"
          >
            {desc}
          </span>
        </div>
      </section>
    </a>
  ) : (
    <Tooltip title={desc} color="magenta">
      <a
        className="inline-flex justify-start items-center w40 h12 m5 px1 bg-white rounded-xl transition-all hover:shadow-md hover:translate-y--1 hover:scale-105 hover:color-active"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <img className="w6 h6 mx1" src={base + src} />

        <span className="font-bold text-sm">{title}</span>
      </a>
    </Tooltip>
  );
}

function Content() {
  return (
    <div className="pt5">
      {LinkData.map(item => (
        <Tag key={item.type} {...item} />
      ))}
    </div>
  );
}

export default Content;
