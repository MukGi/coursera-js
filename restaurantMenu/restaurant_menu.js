const breakfastMenu = ['Pancakes-$12', 'Eggs Benedict-$12', 'Oatmeal-$12', 'Frittata-$12'];
const mainCourseMenu = ['Steak-$90.99', 'Pasta-$90.99', 'Burger-$90.99', 'Salmon-$90.99'];
const dessertMenu = ['Cake-$14.99', 'Ice Cream-$14.99', 'Pudding-$14.99', 'Fruit Salad-$14.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;