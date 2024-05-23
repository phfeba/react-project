import { useRef, useState } from 'react';
import './App.css';

function App() {
  // const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  // let [contadorState, setContadorState] = useState(0);
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
        setDescricao(dadoTemp.weather[0].description);
        setTempState(dadoTemp.main.temp);
        setCity(dadoTemp.name);
      });
    iValue.current.value = '';
  };

  return (
    <div className='App'>
      <input
        type='text'
        ref={iValue}
        onChange={(e) => setCityState(e.target.value)}
      ></input>
      <button onClick={callApi}>buscar</button>

      <p>
        {city ? `${city}: ` : ''} {tempState}
      </p>
      <p>{descricao}</p>
      {/* <button
        onClick={() => {
          setContadorState((contadorState += 1));
        }}
      >
        Clique aqui 1
      </button>
      <h1>{contadorState}</h1> */}
      {/* {diasSemana.map((dia) => {
        return <TempCard diaDaSemana={dia} />;
      })} */}
    </div>
  );
}

export default App;
