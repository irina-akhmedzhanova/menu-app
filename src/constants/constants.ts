type Mealtime = {
  title: string,
  value: string
};

type Mealtimes = Mealtime[];

export const MEALTIMES: Mealtimes = [
  { title: 'Завтрак', value: 'breakfast' },
  { title: 'Обед', value: 'lunch' },
  { title: 'Ужин', value: 'supper' },
];

