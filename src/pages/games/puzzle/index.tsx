import { useState } from 'react';

function Puzzle() {
  const baseArray = Array.from({ length: 9 }, (_, i) => i + 1);

  const [divS, setDivS] = useState<number[]>(baseArray);

  const shuffle = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const isSolvable = (array: any[]) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          count++;
        }
      }
    }
    return count % 2 === 0;
  };

  const moveDiv = (num: number) => {
    const index = divS.indexOf(num);
    const blankIndex = divS.indexOf(9);
    const diff = Math.abs(index - blankIndex);
    if (diff === 1 || diff === 3) {
      const newDivS = [...divS];
      newDivS[blankIndex] = num;
      newDivS[index] = 9;
      setDivS(newDivS);
    }
  };

  return (
    <>
      <h1>Puzzle</h1>
      <p>Under construction...</p>

      <div className="w75 h75 grid grid-cols-3 grid-rows-3">
        {divS.map(div => (
          <div
            key={div}
            className={`${div === 9 ? '' : 'bg-sky'} text-center leading-25`}
            onClick={() => moveDiv(div)}
          >
            {div}
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          while (true) {
            const shuffled = shuffle(divS);
            if (isSolvable(shuffled)) {
              setDivS(shuffled);
              break;
            }
          }
        }}
      >
        开始
      </button>
      <button onClick={() => setDivS(baseArray)}>重置</button>
      <button>求解</button>
    </>
  );
}

export default Puzzle;
