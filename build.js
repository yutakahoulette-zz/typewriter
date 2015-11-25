(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/yutakahoulette/type_effect/index.js":[function(require,module,exports){
typeWriter = require('./type_writer')
list = require('./list')

typeWriter(list, 'js-typed', 70)

},{"./list":"/Users/yutakahoulette/type_effect/list.js","./type_writer":"/Users/yutakahoulette/type_effect/type_writer.js"}],"/Users/yutakahoulette/type_effect/list.js":[function(require,module,exports){
module.exports =
[ 'raindrops on roses'
, 'whiskers on kittens'
, 'bright copper kettles'
, 'warm woolen mittens'
, 'brown paper packages tied up with strings'
, 'cream colored ponies'
, 'crisp apple streudels'
, 'doorbells'
, 'sleigh bells'
, 'schnitzel with noodles'
, 'wild geese that fly with the moon on their wings'
, 'girls in white dresses with blue satin sashes'
, 'snowflakes that stay on my nose and eyelashes'
, 'silver white winters that melt into springs'
]

},{}],"/Users/yutakahoulette/type_effect/type_writer.js":[function(require,module,exports){
module.exports = function (arr, id, ms, blink) {
	var j = 0
	var linesLength = arr.length
	var typeArea = document.getElementById(id)

	typeLine(arr[j])

	function typeLine(line) {
		var lineLength = line.length
		var i = 0
		
		addLetter()

		function addLetter(){
			setTimeout(function(){
				typeArea.innerHTML = toNthLetter(line, i)
				if(i <= lineLength) {
					i++
					addLetter()
				} else {
					setTimeout(function(){
						removeLetter()
					}, ms * 6)
				}
			}, ms)
		}

		function removeLetter(){
			setTimeout(function(){
				typeArea.innerHTML = toNthLetter(line, i)
				if(i > 0) {
					i--
					removeLetter()
				} else {
					setTimeout(function(){
						j = (j + 1) % linesLength
						typeLine(arr[j])
					}, ms * 5)
				}
			}, ms * 0.3)
		}
	}

	function toNthLetter(string, n) {
		return string.split('').splice(0, n).join('')
	}
}

},{}]},{},["/Users/yutakahoulette/type_effect/index.js"]);
