function countingSheep(numOfSheep) {
	if (numOfSheep === 0) return console.log('All sheep jumped over the fence');
	console.log(`${numOfSheep}: Another sheep jumps over the fence`);
	countingSheep(numOfSheep - 1);
}

countingSheep(3);

function powerCalculator(base, exp) {
	if (exp < 0) return 'exponent should be >= 0';
	if (exp === 1) return base;

	return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(4, 4)); // 256
console.log(powerCalculator(4, -1)); // 'exponent should be >= 0'

/**
 * o + hell
 * ol + hel
 * oll + he
 * olle + h
 * olleh
 */
function reverseString(str) {
	if (str === '') return '';

	return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('hello'));
console.log(reverseString('momma dance'));

/**
 * nth Triangular
 * if n = 1; return 1
 *     *
 *    * *
 *   * * *
 *  * * * *
 */
function nthTriangle(int) {
	if (int === 1) {
		return 1;
	}
	return int + nthTriangle(int - 1);
}

console.log(nthTriangle(5)); // 15
console.log(nthTriangle(3)); // 6

/**
 * string splitter
 * (string, limiter)
 *
 */

function stringSeperator(string, limiter) {
	const newArr = [];
	function traverse(string, perm = '') {
		if (!string) newArr.push(perm);
		for (let i = 0; i < string.length; i++) {
			const limiterIndex = string.indexOf(limiter);
			if (string[i] !== limiter)
				traverse(
					string.substring(0, limiterIndex - 1),
					perm + string.substring(0, limiterIndex - 1)
				);
		}
	}

	traverse(string);
	return newArr;
}
console.log(JSON.stringify(stringSeperator('20/12/2000', '/')));

/**
 *
 */

function fib(num) {
	if (num < 2) {
		return num;
	} // F(n) = F(n - 1)+ F(n - 2)
	else {
		return fib(num - 1) + fib(num - 2);
	}
}

console.log(fib(3));

/**
 * Factorial
 * n! = n * (n - 1) * (n - 2) * ... * 1
 */

function fact(num) {
	if (num === 1) return num;

	return num * fact(num - 1);
}

console.log(1); // 1
console.log(fact(3)); // 6
console.log(fact(4)); // 24
console.log(fact(5)); // 120

/**
 * Maze
 * let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
    ];

    maze[0]
      maze[0][0]
      maze[0][1]
      maze[0][2]
    maze[1]
      maze[1][0]
      maze[1][1]
      maze[1][2]
    maze[2]
      maze[2][0]
      maze[2][1]
      maze[2][2]

    
    maze[0] and maze[1]
    if maze[0][0] === ' '
      return 'D'
    if maze[0][0] && maze[1][0]
    
    for (item in maze[0])
      if(maze[1][item] === ' ') 
        return  'D'
      if (maze[1][item] === 'e')
        return
 */

/**
 * Annagram
 *
 */

function anagram(string) {
	const output = [];
	function traverse(string, perm = '') {
		const seen = new Set();
		if (!string) output.push(perm);
		for (let i = 0; i < string.length; i++) {
			if (!seen.has(string[i])) {
				seen.add(string[i]);
				traverse(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
			}
		}
	}
	traverse(string);
	return output;
}

console.log(anagram('eat'));

/**
 * Organization Chart
 */

/**
 * Binary Representation
 */

function bin(num) {
	if (num === 0 || num === 1) return num.toString();

	const lsb = (num % 2).toString();
	const remaining = Math.floor(num / 2);
	const inBinary = bin(remaining);
	return inBinary + lsb;
}

console.log(bin(10)); // 1010
console.log(bin(2)); // 10
console.log(bin(255)); // 11111111
