
import PropTypes from 'prop-types';
import s from 'components/Statistics/Statistics.module.css';

function Statistics({title,stats}) {
  return (
    <section className={s.statistics}>

    <h2 className="title">{title}</h2>

    <ul className={s.statList}>
        {stats.map(stat =>
        <li className={s.item} key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
        </li> )}
    </ul>

    </section>
  );
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};


export default Statistics;
