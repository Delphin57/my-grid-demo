import Layout from './Components/Layout.jsx';
import Header from './Components/Header.jsx';
import Sidebar from './Components/SideBar.jsx';
import MainContent from './Components/MainContent.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  const siteTitle = 'Мой React-сайт';
  const userName = 'Студент';

  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />
      {/* Порядок изменён: сначала MainContent, затем Sidebar */}
      <MainContent>
        <h1>Добро пожаловать!</h1>
        <p>Это пример макета на CSS Grid с React-компонентами (JS версия).</p>
        <p>Ниже приведён список ключевых особенностей:</p>
        <ul>
          <li>Grid-области задаются через <code>grid-template-areas</code>.</li>
          <li>Контент передаётся через <code>children</code> (аналог слотов).</li>
          <li>Данные передаются через <code>props</code>.</li>
          <li>Макет адаптируется под мобильные устройства.</li>
        </ul>
        <p>Попробуйте изменить размер окна, чтобы увидеть адаптивность.</p>
      </MainContent>
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
      <Footer year={new Date().getFullYear()} />
    </Layout>
  );
}

export default App;