import { Range } from 'rc-slider';
import { useState } from 'react';
import OptionToggle from '../OptionToggle/OptionToggle';
import 'rc-slider/assets/index.css';

export default function Salary() {
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(8000);

  const onChange = value => {
    setMin(value[0]);
    setMax(value[1]);
  };

  return (
    <div className="option option_no-icon">
      <h3 className="option__title">Желаемая зарплата</h3>
      <div className="option__range option__range_mb">
        <Range defaultValue={[min, max]} min={0} max={10000} onChange={onChange} />
        <div className="range__inputs">
          <label>
            от
            <input type="text" pattern="0-9" value={min} onChange={e => setMin(Number(e.target.value))} />
          </label>
          <label>
            до
            <input type="text" pattern="0-9" value={max} onChange={e => setMax(Number(e.target.value))} />
            грн
          </label>
        </div>
      </div>
      <OptionToggle icon={''} text={'Не показывать без зарплаты'} />
    </div>
  );
}
