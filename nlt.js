'use strict';

const start = (say, sendButton) => {
	// use list to store conversation, easier to tell the difference
	say(['Hello, welcome to Nemoji Language Center ! 😊 ',
	'For your information as starting, our learning sections will be seperated ' +
	'into the vocabulary section and a short quiz to test what you learned. 🈶 📝  ',
	'Nemoji will teach you the most common words in six of the world\'s' +
	' most popular languages using emojis!']).then(() => {
		 sendButton('Are you ready for Nemoji? ▶️❓ ', [{title: 'Yes', payload: '0'}, 'No']);
		});
};

const state = (payload, say, sendButton) => {
	
	// help user navigate back
	function backtrack(category, language) {
		sendButton('What\'s next?', [{title: 'Continue learning vocabulary', payload: 'a'},
		{title: 'Return to Category', payload: category},
		{title: 'Learn the Word in Another 🗣️', payload: language},
		{title: 'Return to menu', payload: '0'}, {title: 'Exit', payload: 'no'}]);
	}

	// help user choose a language to learn the chosen word in
	function chooseLanguage(wordID) {
		sendButton('What language would you like to learn the expression in?',
			[{title: 'A. 🇦🇪', payload: 'AR' + wordID}, {title: 'B. 🇨🇳', payload: 'CN' + wordID},
			{title: 'C. 🇫🇷', payload: 'FR' + wordID}, {title: 'D. 🇮🇹', payload: 'IT' + wordID},
			{title: 'E. 🇯🇵', payload: 'JP' + wordID}, {title: 'F. 🇪🇸', payload: 'ES' + wordID}]
			);
	}


    // choose activity: vocabulary or quiz?
	if (payload === '0') {
		say('First, please choose the learning section that you most preferred.').then( () => {
			// message
			sendButton('Learn Vocabulary or Take a Quiz?',
			// buttons
			[{title: 'Vocabulary 📖', payload: 'a'}, {title: 'Quiz 🖊️', payload: 'qz'}]);
		 });
		}

		// choose vocabulary category here
		if (payload === 'a') {
			sendButton('Here is the Vocabulary section. What category would you like to learn?',
			[{title: 'Expression 😀', payload: 'a1'}, {title: 'Animal 🐵', payload: 'a2'},
			{title: 'Food 🍑', payload: 'a3'}, {title: 'Transportation 🚘', payload: 'a4'},
			{title: 'Location ⛰️', payload: 'a5'}]
			);
		}
		
		
		
		//***********************************************************************************/
		// ************************* Category 1: Expression (a1) ******************************//
		//*********************************************************************************/
		// all expressions payload starts with b
		if (payload === 'a1') {
			sendButton('What expression would you like to learn?',
			[{title: 'A. 🙄', payload: 'b1'}, {title: 'B. 😀', payload: 'b2'},
			{title: 'C. 😢', payload: 'b3'}, {title: 'D. 😡', payload: 'b4'},
			{title: 'E. 😳', payload: 'b5'}, {title: 'F. 😱', payload: 'b6'}, 
			{title: 'G. 😰', payload: 'b7'}, {title: 'H. 😞', payload: 'b8'}, 
			{title: 'I. 😪', payload: 'b9'}, {title: 'J. 😌', payload: 'b10'}, 
			{title: 'K. 😲', payload: 'b11'}, {title: 'L. 😍', payload: 'b12'}]
			);
		}

		// ************************ Different Languages for Annoyed (b1)*********************//
		if (payload === 'b1') {
			chooseLanguage('b1')
		}
		// Arabic for annoyed
		if(payload === 'ARb1') {
			say(["🙄", "Annoyed", "منزعج", {attachment: 'audio',url: "https://bit.ly/2VLaYgn"}]).then(()=>{
				backtrack('a1')
			});
		}
		// Chinese for annoyed
		if(payload === 'CNb1') {
			say(["🙄", "Annoyed", "烦人", {attachment: 'audio',url: "https://bit.ly/2ZwbLDc"}]).then(()=>{
				backtrack('a1', 'b1')
			});
		}
		// French for annoyed
		if(payload === 'FRb1') {
			say(["🙄", "Annoyed", "Agacé", {attachment: 'audio',url: "https://bit.ly/2O6F1uJ"}]).then(()=>{
				backtrack('a1', 'b1')
			});
		}
		// Italian for annoyed
		if(payload === 'ITb1') {
			say(["🙄", "Annoyed", 'Infastidito/a', {attachment: 'audio',url: "https://bit.ly/3f2LBOL"}]).then(()=>{
				backtrack('a1', 'b1')
			});
		}
		// Japanese for annoyed
		if(payload === 'JPb1') {
			say(["🙄", "Annoyed", 'イライラする', {attachment: 'audio',url: "https://bit.ly/38tk3jn"}]).then(()=>{
				backtrack('a1', 'b1')
			});
		}
		// Spanish for annoyed
		if(payload === 'ESb1') {
			say(["🙄", "Annoyed", 'Molesto/a', {attachment: 'audio',url: "https://bit.ly/3iBwm1t"}]).then(()=>{
				backtrack('a1', 'b1')
			});
		}

		// ************************ Different Languages for happy (b2)**************************************//
		if (payload === 'b2') {
			chooseLanguage('b2')
		}
		// Arabic for happy
		if(payload === 'ARb2') {
			say(["😀", "Happy", "سعيدة", {attachment: 'audio',url: "https://bit.ly/2Z2hfGU"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}
		// Chinese for happy
		if(payload === 'CNb2') {
			say(["😀", "Happy", "高兴", {attachment: 'audio',url: "https://bit.ly/2AqulnD"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}
		// French for happy
		if(payload === 'FRb2') {
			say(["😀", "Happy", "Content", {attachment: 'audio',url: "https://bit.ly/2Z8G2sV"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}
		// Italian for happy
		if(payload === 'ITb2') {
			say(["😀", "Happy", 'Felice', {attachment: 'audio',url: "https://bit.ly/38vH44U"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}
		// Japanese for happy
		if(payload === 'JPb2') {
			say(["😀", "Happy", 'ハッピー', {attachment: 'audio',url: "https://bit.ly/2AAE7Uo"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}
		// Spanish for happy
		if(payload === 'ESb2') {
			say(["😀", "Happy", 'Contento', {attachment: 'audio',url: "https://bit.ly/31Inz86"}]).then(()=>{
				backtrack('a1', 'b2')
			});
		}






} // final bracket for state




module.exports = {
	filename: 'helloworld',
	title: 'Nemoji Language Tutor',
	introduction: [
		'Welcome to Nemoji Language Center!! 🎉  \n\nHello, I am your Nemoji Tutor.' +
		'👋🏻 🤖\nFor your information, this is an application for learning foreign ' +
		 'language using cute emojis. 🔤 🌏 \n If you are interested to learn ' +
		 'many languages, here is the best place to start! 🏮📚'
	],
	start: start,
	state: state
};
