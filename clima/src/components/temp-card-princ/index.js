import './styles.css';

export default function TempCardP({ diaDaSemana, cityName, temp, description }) {
  return (
    <div className='diaTemp'>
      <h2>{cityName}</h2>
      <h3>{diaDaSemana}</h3>
      <h1>{temp}</h1>
      <p>{description}</p>
    </div>
  );
}
