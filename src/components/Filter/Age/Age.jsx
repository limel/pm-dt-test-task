import { Range } from 'rc-slider';
import { useState } from 'react';
import 'rc-slider/assets/index.css';

export default function Age() {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(50);

  const onChange = value => {
    setMin(value[0]);
    setMax(value[1]);
  };

  return (
    <div className="option">
      <h3 className="option__title">Возраст</h3>
      <div className="option__range">
        <Range defaultValue={[min, max]} onChange={onChange} />
        <div className="range__inputs">
          <label>
            от
            <input type="text" pattern="0-9" value={min} onChange={e => setMin(Number(e.target.value))} />
          </label>
          <label>
            до
            <input type="text" pattern="0-9" value={max} onChange={e => setMax(Number(e.target.value))} />
            лет
          </label>
        </div>
      </div>
    </div>
  );
}
