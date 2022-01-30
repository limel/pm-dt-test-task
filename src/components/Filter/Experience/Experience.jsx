import OptionToggle from '../OptionToggle';

export default function Experience() {
  return (
    <div className="option">
      <h3 className="option__title">Опыт работы</h3>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        Без опыта
        <span className="option__result">603</span>
      </label>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        До 1 года
        <span className="option__result">603</span>
      </label>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        От 1 до 2 лет
        <span className="option__result">603</span>
      </label>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        От 2 до 5 лет
        <span className="option__result">603</span>
      </label>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        От 5 до 10 лет
        <span className="option__result">603</span>
      </label>
      <label className="option__item">
        <input type="checkbox" />
        <span className="checkmark" aria-hidden="true"></span>
        Более 10 лет
        <span className="option__result">603</span>
      </label>
      <OptionToggle icon={'#hat'} text={'Только студенты'} />
    </div>
  );
}
