import sprite from 'img/sprite.svg';

export default function Language() {
  return (
    <div className="option">
      <h3 className="option__title">Владение языками</h3>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#en'}></use>
          </svg>
          Английский
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="en" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="en">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#ru'}></use>
          </svg>
          Русский
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="ru" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="ru">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#ua'}></use>
          </svg>
          Украинский
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="ua" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="ua">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#de'}></use>
          </svg>
          Немецкий
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="de" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="de">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#pl'}></use>
          </svg>
          Польский
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="pl" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="pl">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
      <div className="option__item">
        <label className="option__caption">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <svg>
            <use href={sprite + '#es'}></use>
          </svg>
          Испанский
        </label>
        <span className="option__result">603</span>
        <input type="checkbox" id="es" />
        <label className="dropdown-toggle" aria-hidden="true" htmlFor="es">
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </label>
        <div className="dropdown-menu">
          <label>
            <input type="radio" name="level-en" />
            (А1) – начальный
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (А2) – ниже среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В1) – средний
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (В2) – выше среднего
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C1) – продвинутый
            <span className="option__result">73</span>
          </label>
          <label>
            <input type="radio" name="level-en" />
            (C2) – профессиональный уровень владения
            <span className="option__result">73</span>
          </label>
        </div>
      </div>
    </div>
  );
}
