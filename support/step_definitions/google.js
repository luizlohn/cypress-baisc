(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Given('I open Google page', function () {
  cy.visit('/');
});
Then('I see {string} in the title', function (title) {
  cy.title().should('include', title);
});
Given('I put the {string} text in search', function (search_by) {
  cy.get('#lst-ib').type(search_by).blur();
});
Given('Search it', function () {
  cy.get('#lst-ib').type('{enter}');
});

},{}]},{},[1]);
