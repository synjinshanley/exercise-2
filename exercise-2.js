/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary auto insureance company || created: 11/30/19
 *  @todo
 */
 
"use strict";
const PROMPT = require('readline-sync');

let policy, lastName, firstName, birthDate, premiumDue, accidents, age, total;
const YEAR = 2019;
const AGE_15 = 15;
const AGE_30 = 30;
const AGE_45 = 45;
const AGE_46 = 46;
const AGE_59 = 59;
const AGE_60 = 60;
const BASE = 100;
const ADD_ONE = 20;
const ADD_TWO = 10;
const ADD_THREE = 30;
const ADD_FAULT = 50;

function main(){
	setPolicy();
	setLastName();
	setFirstName();
	setBirthDate();
	setPremiumDue();
	setAccidents();
	setAge();
	setTotal();
	return main
}

main();

function setPolicy(){
	policy = Math.round(Math.random() * 20);
}

function setLastName(){
	lastName = PROMPT.question(`\nWhat is your Last Name?:`);
}

function setFirstName(){
	firstName = PROMPT.question(`\nWhat is your First Name?:`);
}

function setBirthDate(){
	console.log(`Thank you for choosing us ${firstName} ${lastName}, your policy number is ${policy}`)
	birthDate = PROMPT.question(`\nWhat year were you born?:`)
}

function setPremiumDue(){
	premiumDue = PROMPT.question(`\nWhen is your premium due date? mm/dd/yyyy:`)
}

function setAccidents(){
	accidents = PROMPT.question(`\nHow many at fault accidents have you had in the last 3 years?:`)
}

function setAge(){
	age = YEAR - birthDate;
}

function setTotal(){
	if(age > AGE_15 && age < AGE_30){
		total = BASE + ADD_ONE + (ADD_FAULT * accidents)
	console.log(`the payment is due by ${premiumDue}, you must pay $${total}`)
	}else if(age >= AGE_30 && age < AGE_45){
		total = BASE + ADD_TWO + (ADD_FAULT * accidents)
	console.log(`the payment is due by ${premiumDue}, you must pay $${total}`)
	}else if(age >= AGE_46 && age < AGE_59){
		total = BASE + (ADD_FAULT * accidents)
	console.log(`the payment is due by ${premiumDue}, you must pay $${total}`)
	}else if(age >= AGE_60){
		total = BASE + ADD_THREE + (ADD_FAULT * accidents)
	console.log(`the payment is due by ${premiumDue}, you must pay $${total}`)
	}else{
		console.log(`Sorry ${firstName}, you seem to be too young to have insurance`)
	}
}