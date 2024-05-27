import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
    <p>
      Упс, похоже, мы не можем найти эту страницу! 😕 <br />
      Не волнуйтесь, вы можете вернуться на <Link to="/" style={{ color: 'blue' }}>главную страницу</Link> и начать сначала.
    </p>
  </div>
);

export default NotFoundPage;
