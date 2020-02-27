console.log('tupo test');

class Test {
    constructor(options) {
        this.text = options.text;
        this.alert = options.alert;
    }

    printMessage() {
        console.log(this.text);
        console.log(this.alert);
    }
}

const testOne = new Test({
    text: 'Тест 1',
    alert: 'аааааааааа!'
});

testOne.printMessage();

const testTwo = new Test({
    text: 'Тест - II',
    alert: 'ээээ!?'
});

testTwo.printMessage();

const arrayForConcat = [2, 54, 2];
console.log(['test', 'spread', ...arrayForConcat]);

const listNodeArray = Array.prototype.slice.call(document.querySelectorAll('li'));
console.log(listNodeArray);

for(let item of listNodeArray) {
    console.log(item);
}

listNodeArray.forEach((item) => {
   console.log(item);
});

$('li').on('click', function(){
   console.log('jQ test');
});