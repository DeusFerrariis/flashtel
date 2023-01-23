import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

export const gun = Gun();

export const user = gun
	.user()
	.recall({sessionStorage: true});

export const username = writable('');

user.get('alias').on(v => username.set(v));

export const signIn = (_username, password) => {
	user.auth(_username, password, ({err}) => {
		if (err) {
			alert(err);
		}
		else {
			username.set(_username);
		}
	})
}

export const signUp = (username, password) => {
	user.create(username, password, ({err}) => {
		if (err) {
			alert(err);
		} else {
			signIn(username, password);
		}
	})
}

export const signOut = () => {
	user.leave();
	username.set('');
}

export const regexMatchCount = (text: string, regex) => {
	return Array.from(text.matchAll(regex)).length
}

const SPECIAL_CHARACTER_REGEX = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g;
const NUMBER_REGEX = /\d+/g;
const ALPHABETIC_REGEX = /^[A-Za-z]+/g;

export const validatePassword = (password) => {
	let messages = [];
	
	if (password.length == 0) return messages;

	if (password.length < 8) {
		messages.push("Password must be at least 8 characters");
	}
	
	if (regexMatchCount(password, SPECIAL_CHARACTER_REGEX) == 0) {
		messages.push("Password must contain at least 1 special character");
	}
	
	if (regexMatchCount(password, NUMBER_REGEX) == 0) {
		messages.push("Password must contain at least 1 number");
	}
	
	return messages;
}

export const validateUsername = (username) => {
	let messages = [];
	
	if (username.length == 0) return messages;

	if (username.length < 8) {
		messages.push("Username must be at least 8 characaters");
	}

	if (regexMatchCount(username[0], NUMBER_REGEX) != 0 || username[0] == "_") {
		messages.push('Username must start with a letter');
	}
	
	if (regexMatchCount(username, ALPHABETIC_REGEX) == 0) {
		messages.push('Username must contain at least 1 alphabetic character');
	}
	
	if (regexMatchCount(username, SPECIAL_CHARACTER_REGEX) != 0) {
		messages.push("Username can not contain special characters");
	}
	
	return messages;
}
