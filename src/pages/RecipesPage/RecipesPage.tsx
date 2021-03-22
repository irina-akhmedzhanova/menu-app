import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Divider, Spin, List, Typography, Card } from 'antd';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchRecipes } from '../../actions';
import { MEALTIMES } from '../../constants/constants';
import classes from './RecipesPage.module.scss';
import Item from 'antd/lib/list/Item';


const RecipesPage = () => {
  const { Title, Paragraph } = Typography;
  const { Meta } = Card;
  const dispatch = useDispatch();
  const { data, loading } = useTypeSelector((state) => state.recipesPage);

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch]);


  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Title level={2}>Рецепты</Title>
        <Paragraph>
          Вкусные и полезные блюда на каждый день
      </Paragraph>
      </div>
      {loading
        ? (
          <Spin size="large" tip="Loading..." />
        ) : (
          <div>
            {MEALTIMES.map((mealtime, index) => (
              <React.Fragment>
                <Divider key={index} style={{ fontWeight: 600, paddingBottom: 24 }}>{mealtime.title}</Divider>
                <List
                  size="small"
                  itemLayout="vertical"
                  grid={{
                    gutter: 8, 
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4
                  }}
                  dataSource={data.filter((recipe) => recipe.mealtime === mealtime.value)}
                  renderItem={(item) => (
                    <List.Item>
                      <Card
                        hoverable
                        cover={<img alt="example" src={"http://192.168.1.199:1337" + item.photo.url} style={{ height: 200, objectFit: "cover" }} />}
                      >
                        <Meta title={item.title} />
                      </Card>
                    </List.Item>
                  )}
                />
              </React.Fragment>
            ))}
          </div>
        )}
    </div>
  )
};

export { RecipesPage };