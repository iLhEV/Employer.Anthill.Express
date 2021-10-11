exports.area = (width) => width * width;

exports = 5;
console.log('exports', exports);

setTimeout(function() {
    console.log('First');
    }, 3000);
 console.log('Second');