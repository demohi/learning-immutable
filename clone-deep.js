/**
 * learning-immutable - clone-deep.js
 * Created by mds on 15/6/6.
 */

'use strict';
var cloneDeep = require('lodash.clonedeep');

var data = {
    id: 'data',
    author: {
        name: 'mdemo',
        github: 'https://github.com/demohi'
    }
};

var data1 = cloneDeep(data);

console.log('equal:', data1===data); //false

data1.id = 'data1';
data1.author.name = 'demohi';

console.log(data.id);// data
console.log(data1.id);// data1

console.log(data.author.name);//mdemo
console.log(data1.author.name);//demohi