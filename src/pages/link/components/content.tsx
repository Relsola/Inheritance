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

function Tag({ type, title, content }: LinkTagProps) {
  return (
    <div>
      <div className="link-tag" id={`link-item-${type}`}>
        <Icon name={type} />
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
    <a className="link-card" href={link} target="_blank">
      <section>
        <img src={src} />
        <div>
          <span>{title}</span>
          <span>{desc}</span>
        </div>
      </section>
      <Icon name="arrive" />
    </a>
  );
}

function Content() {
  return (
    <div className="link-content">
      {LinkData.map(item => (
        <Tag key={item.type} {...item} />
      ))}
    </div>
  );
}

export default Content;
