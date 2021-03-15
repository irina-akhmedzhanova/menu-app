import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Layout, Menu } from 'antd';
import { MenuPage } from './pages/MenuPage/MenuPage';
import classes from './App.module.scss';

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Provider store={store}>
      <Layout className={classes.layout}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>Список рецептов</Menu.Item>
            <Menu.Item>Архив</Menu.Item>
            <Menu.Item>Настройки</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '10px 50px' }}>
          <MenuPage />
        </Content>
        <Footer style={{textAlign: 'center'}}>Created by Us</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
