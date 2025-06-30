import berryBowlImg from './assets/images/Berry_Smoothie_Bowl.jpg';
import pizzaImg from './assets/images/Vegetarian_Pizza.jpg';
import chickenStirFryImg from './assets/images/Chicken_Stir_Fry.jpg';

const sampleRecipes = [
  {
    id: 'berry-bowl',
    title: 'Berry Smoothie Bowl',
    description: 'A vibrant, healthy breakfast with fresh fruit and nuts.',
    badges: ['Vegetarian', 'Gluten-Free', 'Healthy'],
    image: berryBowlImg,
    alt: 'Berry Smoothie Bowl'
  },
  {
    id: 'pizza',
    title: 'Vegetarian Pizza',
    description: 'A delicious golden vegetarian pizza for all occasions.',
    badges: ['Vegetarian', 'Family Favorite', 'Pizza'],
    image: pizzaImg,
    alt: 'Vegetarian Pizza'
  },
  {
    id: 'chicken-stirfry',
    title: 'Chicken Stir Fry',
    description: 'Bright and fresh high-protein chicken stir fry in minutes.',
    badges: ['High Protein', 'Asian', 'Quick'],
    image: chickenStirFryImg,
    alt: 'Chicken Stir Fry'
  }
];

export default sampleRecipes;
