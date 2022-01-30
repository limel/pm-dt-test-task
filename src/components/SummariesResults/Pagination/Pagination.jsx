import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { summariesOperations, summariesSelectors } from 'redux/summaries';
import s from './Pagination.module.scss';
import sprite from 'img/sprite.svg';

export default function Pagintaion() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const summaries = useSelector(summariesSelectors.getSummaries);

  let pages = [];

  const creatPages = function (pages, pagesCount) {
    if (pagesCount === 1) {
      pages.push(1);
      return pages;
    } else if (pagesCount >= 10) {
      for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
      }
      return pages;
    } else {
      for (let i = 0; i < 10; i++) {
        pages.push(i + 1);
      }
      return pages;
    }
  };

  creatPages(pages, summaries.page_count);

  const onNextClick = () => {
    setPage(state => state + 1);
  };

  const onPrevClick = () => {
    page === 1 ? setPage(1) : setPage(state => state - 1);
  };

  const handleClick = e => {
    const clickedPage = Number(e.target.getAttribute('data-id'));
    if (page !== clickedPage) {
      setPage(clickedPage);
    }
    return;
  };

  useEffect(() => {
    dispatch(summariesOperations.fetchSummariesPage(page));
  }, [dispatch, page]);

  return (
    <ul className={s.list}>
      <li
        onClick={onPrevClick}
        className={
          summaries.current_page === 1 ? `${s.prev} ${s.disabled} ${s.list__button}` : `${s.prev}  ${s.list__button}`
        }>
        <svg>
          <use href={sprite + '#arrow'}></use>
        </svg>
      </li>
      {pages.map(page => {
        return (
          <li
            key={page}
            data-id={page}
            className={summaries.current_page === page ? `${s['list__current-item']} ${s.list__item}` : s.list__item}
            onClick={handleClick}>
            {page}
          </li>
        );
      })}
      <li
        onClick={onNextClick}
        className={
          summaries.current_page === summaries.page_count
            ? `${s.next} ${s.disabled} ${s.list__button}`
            : `${s.next}  ${s.list__button}`
        }>
        <svg>
          <use href={sprite + '#arrow'}></use>
        </svg>
      </li>
    </ul>
  );
}
