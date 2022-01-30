import { useContext, useState, useEffect } from 'react';
import authContext from 'context/common/common-context';
import Age from './Age';
import Sex from './Sex';
import Salary from './Salary';
import Experience from './Experience';
import Language from './Language';
import Type from './Type';
import Education from './Education';
import OptionToggle from './OptionToggle';
import './Filter.scss';
import { useMediaQuery } from 'react-responsive';
import sprite from 'img/sprite.svg';
import { summariesOperations } from 'redux/summaries';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const [param, setParam] = useState(false);
  const { isActive, toggleFilter } = useContext(authContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(summariesOperations.fetchSummariesWithPhoto(param));
  }, [dispatch, param]);

  const fetchWithParams = () => {
    setParam(!param);
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  return (
    <div className={isActive ? `filter filter_active` : 'filter'}>
      {isMobile && (
        <button type="button" aria-label="close" className="filter__close-btn" onClick={toggleFilter}>
          <svg>
            <use href={sprite + '#cross'}></use>
          </svg>
        </button>
      )}
      <h2 className="filter__title">Фильтры</h2>
      <div className="option">
        <OptionToggle icon={'#photo'} text="Только с фотографией" onClick={fetchWithParams} />
      </div>
      <Age />
      <Sex />
      <Salary />
      <Experience />
      <Language />
      <Type />
      <Education />
    </div>
  );
}
