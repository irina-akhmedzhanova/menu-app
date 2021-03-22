import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Layout, Menu } from 'antd';
import { Routes } from './routes/Routes';
import classes from './App.module.scss';

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className={classes.layout}>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>Список рецептов</Menu.Item>
              <Menu.Item>Архив</Menu.Item>
              <Menu.Item>Настройки</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '10px 50px' }}>
            <Routes />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Us</Footer>
        </Layout>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
