import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './components/Toggle';
import Refrense from './components/Refrense';
import List from './components/List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleInput = () => {
    if (name.trim() !== '') {
      setList((prev) => [...prev, name]);
      setName('');
    }
  };

  return (
    <body className={`${isDarkMode ? 'bg-dark' : 'bg-white'}`} >
      <div className={`container vh-100 `}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card ">
              <div className={`card-body ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
            <h6 className={`${isDarkMode ? 'text-white' : 'text-dark'}`}>Events </h6>
                <div className="input-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="text"
                    value={name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder=" Handle Change"
                  />
                  <button
                    onClick={handleInput}
                    className={`${isDarkMode ? 'btn btn-info' : 'btn btn-primary'}`}
                    type="button"
                  >
                    OnClick
                  </button>
                </div>
                <ul className="list-group">
                  {list.map((item, index) => (
                    <li key={index} className="list-group-item">
                      {item}
                    </li>
                  ))}
                </ul>
                <Toggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
                <Refrense isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)}/>
                <List isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
