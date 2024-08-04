import { useState, useRef } from 'react';
import { shuffle } from '@/utils';
import { Button } from '@ui';

function Puzzle() {
  const contentBox = useRef<HTMLDivElement>(null);

  /** 定位坐标 控制定位表现出动画 */
  const content = [
    [0, 0],
    [0, 100],
    [0, 200],
    [100, 0],
    [100, 100],
    [100, 200],
    [200, 0],
    [200, 100],
    [200, 200]
  ];

  /** 移动拼图 */
  function move(num: number) {
    if (num === 8 || !contentBox.current || !contentBox.current.childNodes) {
      return;
    }

    const blankDiv = contentBox.current.childNodes[8] as HTMLDivElement;
    const activeDiv = contentBox.current.childNodes[num] as HTMLDivElement;

    const { top: blankTop, left: blankLeft } = blankDiv.style;
    const { top: activeTop, left: activeLeft } = activeDiv.style;

    const topAbs = Math.abs(parseInt(blankTop) - parseInt(activeTop));
    const leftAbs = Math.abs(parseInt(blankLeft) - parseInt(activeLeft));

    if (topAbs === 100 && leftAbs === 0) {
      blankDiv.style.top = activeTop;
      activeDiv.style.top = blankTop;
    } else if (topAbs === 0 && leftAbs === 100) {
      blankDiv.style.left = activeLeft;
      activeDiv.style.left = blankLeft;
    }
  }

  /** 逆序数为偶数拼图才有解  */
  const isSolvable = (arr: number[]) => {
    const length = arr.length;
    let count = 0;

    for (let i = 0; i < length; i++)
      for (let k = i + 1; k < length; k++) if (arr[i] > arr[k]) count++;

    return count % 2 === 0;
  };

  /** 开始游戏 */
  function start() {
    if (!contentBox.current || !contentBox.current.childNodes) return;

    const base = Array.from({ length: 9 }, (_, i) => i);

    while (true) {
      const shuffled = shuffle(base);
      if (isSolvable(shuffled)) {
        contentBox.current.childNodes.forEach((div, index) => {
          const [top, left] = content[shuffled[index]];
          (div as HTMLDivElement).style.top = `${top}px`;
          (div as HTMLDivElement).style.left = `${left}px`;
        });
        break;
      }
    }
  }

  /** 重置拼图 */
  function reset() {
    if (!contentBox.current || !contentBox.current.childNodes) return;

    contentBox.current.childNodes.forEach((div, index) => {
      const [top, left] = content[index];
      (div as HTMLDivElement).style.top = `${top}px`;
      (div as HTMLDivElement).style.left = `${left}px`;
    });
  }

  /** 拼图求解 */
  function solve() {}

  return (
    <>
      <h1>Puzzle</h1>
      <p>Under construction...</p>

      <div ref={contentBox} className="w75 h75 relative">
        {content.map((pos, index) => (
          <div
            key={index}
            style={{ top: `${pos[0]}px`, left: `${pos[1]}px` }}
            className={`${index === 8 ? '' : 'bg-sky cursor-pointer'}
              w24 h24 text-center leading-25 absolute transition-all`}
            onClick={() => move(index)}
          >
            {index}
          </div>
        ))}
      </div>

      <Button classname="w20 m-2" onClick={start}>
        开始
      </Button>
      <Button classname="w20 mx-4" onClick={reset}>
        重置
      </Button>
      <Button classname="w20" onClick={solve}>
        求解
      </Button>
    </>
  );
}

export default Puzzle;
