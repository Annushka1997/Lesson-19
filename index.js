"use strict";

// Առաջին հարցի պատասխանը

const checkNumber = new RegExp('^[0-9]$');

const checkString = new RegExp ('[A-Za-z0-9]{1,20}$');

const numberOfFilms = start();

function start (numberOfFilms) {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	
	while (checkNumber.test(numberOfFilms) !== true) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}

	return numberOfFilms;
	}

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (checkString.test(a) === true && checkNumber.test(b) === true) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
	},
	detectUserPersonalLevel () {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},
	yourFavoriteGenres () {
		for (let i = 0; i <= 2; i++) {
			const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
	
			if (checkString.test(genres) === true && genres !== null) {
				personalMovieDB.genres[i] = genres;
			} else {
				i--;
			}
		}
	},
	showMyDB () {
		if (personalMovieDB.privat === true) {
			console.log(personalMovieDB);
		} else {
			console.log("Մեր տվյալների բազան փակ է");
		}
	},
	// Երկրորդ հարցի պատասխանը
	
	isVisibleMyDB () {
		if (this.showMyDB === false) {
			this.privat === true;
		} else {
			this.privat === false;
		 }
	}
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectUserPersonalLevel();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.showMyDB();
personalMovieDB.isVisibleMyDB();

// Երրորդ հարցի պատասխանը 

personalMovieDB.genres.forEach (function (item,index) {
	console.log (`Ձեր սիրելի ժանրը։ ԺԱՆՐ ${index+1}, ${item}`);
});

  
