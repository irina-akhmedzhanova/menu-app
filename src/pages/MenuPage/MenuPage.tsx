import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Divider, Space, Button } from 'antd';
import { ShoppingTwoTone, BookTwoTone } from '@ant-design/icons';
import { ActionCreators } from '../../store/index';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import 'antd/dist/antd.css';
import classes from './MenuPage.module.scss';
import cn from 'classnames';

const MenuPage = () => {
  const tableHead: string[] = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
  ];

  const mealtimes = [
    { title: 'Завтрак', value: 'breakfast' },
    { title: 'Обед', value: 'lunch' },
    { title: 'Ужин', value: 'supper' },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.fetchWeek());
    console.log(dispatch(ActionCreators.fetchWeek))
  }, [dispatch]);

  const { data, loading } = useTypeSelector((state) => state.menuPage)

  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <Divider style={{ fontWeight: 600, paddingBottom: '30px' }}>Текущая неделя</Divider>
        {loading
          ? (
            <span>Упс</span>
          )
          : (<div>
            <Row className={cn(classes.row, classes.headRow)}>
              <Col span={4}></Col>
              {tableHead.map((item, index) => (
                <Col key={index} span={4}>{item}</Col>
              ))}
            </Row>
            {mealtimes.map((mealtime, index) => (
              <Row key={index} className={classes.row}>
                <Col span={4}>{mealtime.title}</Col>
                {data.map((day, index) => {
                  const result = day.recipes.filter((recipe) => recipe.mealtime === mealtime.value)
                  return (
                    <Col key={index} span={4}>{result.map((recipe, index) => (
                      <span key={index}>{recipe.title}</span>
                    ))}</Col>
                  )
                })}
              </Row>
            ))} </div>)}
      </div>
      <div className={classes.buttons}>
        <Space size="large">
          <Button shape="round" icon={<BookTwoTone />}>Перейти к списку рецептов</Button>
          <Button shape="round" icon={<ShoppingTwoTone />}>Перейти к списку покупок</Button>
        </Space>
      </div>
    </div>
  )
};

export { MenuPage };
