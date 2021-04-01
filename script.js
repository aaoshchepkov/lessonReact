'use strict';
let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 
'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
let nameCourse = 'Базовый React';
let command = [];
employers.forEach((item) =>{
	if (item.trim() !== ''){
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);	
	command.push(item);
	}
	});

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = own => {
	own = own || 0;
	let everyCash = [...own];
	let total = 0;
  everyCash.forEach((item) =>{
		total += item;
	});
	return total;
};

let lesson = calcCash (data.cash);

function makeBusiness(director, teacher, allModule, gang, course) {
	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет  ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
