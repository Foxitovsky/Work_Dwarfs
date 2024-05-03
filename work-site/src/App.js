import React, { useEffect, useState } from 'react';
import './App.css'; // Стили можно поместить в файл App.css

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваш код для отправки данных формы на сервер
  };

  useEffect(() => {
    document.title = "WorkDwarfs - Интернет-решения";
  }
  )

  return (
    <div className='background-animation'>
      <div className="container">
        <div className="top-menu">
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <h1>Сайт в разработке</h1>
        <p>Мы работаем над улучшением нашего сайта. Скоро мы вернемся!</p>
        {/* <div className="form-container">
        <h2>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required /><br />
          <input type="email" name="email" placeholder="Ваш Email" value={formData.email} onChange={handleChange} required /><br />
          <textarea name="message" placeholder="Ваше сообщение" value={formData.message} onChange={handleChange} required /><br />
          <button type="submit">Отправить</button>
        </form>
  </div> */}
      </div>

    </div>
  );
}

export default App;