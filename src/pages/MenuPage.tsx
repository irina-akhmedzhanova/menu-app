import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import classes from './MenuPage.module.scss';

const arr = [1, 2, 3, 4, 5];


const MenuPage = () => {
  const tableHead = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
  ];

  return (
    <main> 
      <div className={classes.container}>
      <Row className={classes.headRow}>
        <Col span={4}></Col>
        {tableHead.map((item, index) => (
          <Col key={item + index} span={4}>{item}</Col>
          ))}
      </Row>
      <Row className={classes.row}>
        <Col span={4}>Завтрак</Col>
        {arr.map((item) => (
          <Col span={4}>{item}</Col>
          ))}
      </Row>
      <Row className={classes.row}>
        <Col span={4}>Обед</Col>
        {arr.map((item) => (
          <Col span={4}>{item}</Col>
          ))}
      </Row>
      <Row className={classes.row}>
        <Col span={4}>Ужин</Col>
        {arr.map((item) => (
          <Col span={4}>{item}</Col>
          ))}
      </Row>
          </div>
    </main>
  )
};

export { MenuPage };
