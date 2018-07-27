function myFirstApp(name, age) {

	alert('Привет, меня зовут ' + name + ' и это моя первая программа!');

	function showSkills() {
		let skills = [],
		answers = [
		'html',
		'css',
		'GitHub',
		'photoshop'
		];

		for (let i = 0; i < answers.length; i++) {
		 skills[i] = document.write('Я владею ' + answers[i] + '<br>');

		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert('Добро пожаловать!');
		} else {
			alert('Вход закрыт!')
		}
	}

	checkAge();


	function calcPow(num) {
		document.write(Math.pow(num, 2));
	}

	calcPow(4)
}

myFirstApp('Violetta', 25);