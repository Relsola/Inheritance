import { useState } from 'react';
import { Tooltip } from 'antd';
import Icon from '@/components/icon';
import LinkData from '@/data/link.json';

const data = LinkData.map(({ type, title }) => ({ type, title })).reverse();

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleScrollToTop = (type: string) =>
    document
      .getElementById(`link-item-${type}`)!
      .scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="pos-fixed flex-center flex-col-reverse right-5 bottom-30">
      <Icon
        classes="w10 h10 color-active"
        handleClick={() => setOpen(!open)}
        name="rocket"
      />

      {open &&
        data.map(({ type, title }) => (
          <Tooltip key={type} title={title} placement="left" color="magenta">
            <div data-name={type} onClick={() => handleScrollToTop(type)}>
              <Icon classes="w8 h7 color-active" name={type} />
            </div>
          </Tooltip>
        ))}
    </div>
  );
}

export default Sidebar;
