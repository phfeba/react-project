import { useRef, useState } from 'react';
import './App.css';
import TempCardP from './components/temp-card-princ';

function App() {
  const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const diasAMostrar = [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6];
  const [tempState, setTempState] = useState();
  const [cityState, setCityState] = useState();
  const [city, setCity] = useState('');
  const [descricao, setDescricao] = useState('');
  const iValue = useRef('');

  const callApi = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&lang=pt_br&units=metric&appid=109f862a42ad10e6005a6fc30750eca5`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((dadoTemp) => {
        console.log(dadoTemp);
        setDescricao(dadoTemp.weather[0].description);
        setTempState(dadoTemp.main.temp);
        setCity(dadoTemp.name);
      });
    iValue.current.value = '';
    let urlDois = `https://api.openweathermap.org/data/2.5/forecast?q=${cityState}&lang=pt_br&units=metric&appid=109f862a42ad10e6005a6fc30750eca5`;
    fetch(urlDois)
      .then((res) => {
        return res.json();
      })
      .then((dadoTemp) => {
        console.log(dadoTemp);
        // diasSemana.map((dia) => {});
        for (let i = hoje; i < hoje + 6; i++) {
          console.log(diasSemana[diasAMostrar[i + 1]]);
        }
      });
  };

  let today = new Date();
  let hoje = today.getUTCDay();

  return (
    <div className='App'>
      <input
        type='text'
        ref={iValue}
        onChange={(e) => setCityState(e.target.value)}
      ></input>
      <button onClick={callApi}>buscar</button>

      <TempCardP
        diaDaSemana={city ? diasSemana[today.getUTCDay()] : ''}
        cityName={city ? city : ''}
        temp={tempState}
        description={descricao}
      />

      {}

      {/* {diasSemana.map((dia) => {
        return (
          <div>
            <p>{dia}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
