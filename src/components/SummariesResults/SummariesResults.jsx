import { useSelector, useDispatch } from 'react-redux';
import { summariesOperations, summariesSelectors } from 'redux/summaries';
import { useEffect } from 'react';
import SummariesHeader from './SummariesHeader';
import SummarieCard from './SummarieCard';
import Pagination from './Pagination';
import Filter from '../Filter';
import s from './SummariesResults.module.scss';

export default function SummariesResults() {
  const dispatch = useDispatch();
  const summaries = useSelector(summariesSelectors.getSummaries);
  useEffect(() => {
    dispatch(summariesOperations.fetchSummaries());
  }, [dispatch]);
  return (
    <div className="container">
      <SummariesHeader summaries={summaries} />
      <div className={s.content}>
        <div className={s.results}>
          {summaries.length !== 0 && (
            <ul className={s.list}>
              {summaries.results.map(item => (
                <SummarieCard summaries={item} key={item.id} />
              ))}
            </ul>
          )}
          <Pagination />
        </div>
        <Filter />
      </div>
    </div>
  );
}
