import { useState } from 'react';
import { shuffle } from '@/utils';
import { Button } from '@ui';

type Time = string | number;

function getNextTime(time: string) {
  let hour: Time, minute: Time, second: Time;
  [hour, minute, second] = time.split(':').map(Number);

  if (second < 59) {
    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = (second + 1).toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  }

  if (minute < 59) {
    hour = hour.toString().padStart(2, '0');
    minute = (minute + 1).toString().padStart(2, '0');
    return `${hour}:${minute}:00`;
  }

  return `${(hour === 23 ? 0 : hour + 1).toString().padStart(2, '0')}:00:00`;
}

function Puzzle() {
  const [level, setLevel] = useState<number>(3);

  const length = level ** 2;
  const size = 300 / level;
  const base = Array.from({ length }, (_, i) => i);

  const [content, setContent] = useState<number[]>([...base]);

  const [step, setStep] = useState<number>(0);
  const [time, setTime] = useState<string>('00:00:00');
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  /** 移动拼图 */
  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (timer === undefined) return alert('请先开始游戏！');

    /** 事件委托获取点击的拼图 */
    const target = e.target as HTMLDivElement;
    const num = Number(target.dataset.value);
    if (isNaN(num) || num === length - 1) return;

    /** 判断是否可交换位置 */
    const index = content[num];
    const blankIndex = content[length - 1];
    const diff = Math.abs(index - blankIndex);
    if (diff !== 1 && diff !== level) return;

    const arr = [...content];
    arr[num] = blankIndex;
    arr[length - 1] = index;
    setContent(arr);
    setStep(step + 1);
  }

  /** 逆序数为偶数拼图才有解  */
  const isSolvable = (arr: number[]) => {
    const length = arr.length;
    let count = 0;

    for (let i = 0; i < length; i++)
      for (let k = i + 1; k < length; k++) if (arr[i] > arr[k]) count++;

    return count % 2 === 0;
  };

  /** 初始化 */
  function initialization() {
    setStep(0);
    setTime('00:00:00');
    clearInterval(timer);
    setTimer(undefined);
  }

  /** 开始 */
  function start() {
    while (true) {
      const shuffled = shuffle(content);
      if (isSolvable(shuffled)) {
        setContent(shuffled);
        break;
      }
    }

    initialization();
    setTimer(setInterval(() => setTime(time => getNextTime(time)), 1000));
  }

  /** 重置 */
  function reset() {
    setContent([...base]);
    initialization();
  }

  /** 改变难度 */
  function changeLevel(e: React.ChangeEvent<HTMLInputElement>) {
    const level = Number(e.target.value);
    setLevel(level);
    setContent(Array.from({ length: level ** 2 }, (_, i) => i));
    initialization();
  }

  /** 拼图求解 */
  function solve() {}

  return (
    <>
      <h1 className="w32 h30 flex-center m-auto">拼图游戏</h1>

      <div className="flex items-center justify-center">
        <section>
          <div className="w75 h75 mr-25 relative" onClick={move}>
            {content.map((val, index) => {
              const loop = Math.floor(val / level);
              const remainder = val % level;

              return (
                <div
                  key={index}
                  style={{
                    width: `${size - 4}px`,
                    height: `${size - 4}px`,
                    top: `${size * loop}px`,
                    left: `${size * remainder}px`
                  }}
                  data-value={index}
                  className={`${
                    index === length - 1 ? '' : 'bg-sky cursor-pointer'
                  } flex-center absolute transition-all`}
                >
                  {index + 1 === length ? '' : index + 1}
                </div>
              );
            })}
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
        </section>

        <div className="h80 flex flex-col justify-around items-start">
          <div>
            <span>难度：</span>
            <input
              type="range"
              min="3"
              max="6"
              value={level}
              onChange={changeLevel}
            />
            <span className="ml2">{level}</span>
          </div>

          <div className="ml2">
            <span>步数：</span>
            <span>{step}</span>
          </div>

          <div className="ml2">
            <span>时间：</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Puzzle;
