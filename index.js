//Время выполнения функции
function performanceTime(){
    const start = performance.now();

    //нагрузка

    const end = performance.now();

    console.log(end - start);
}

//Удалить дубли из массива
function deleteDuplicate(){
    const array = [3,4,6, null, 'f', 'gte', 6, 3];
    return [...new Set(array)];     //[4,null,'f','gte']
}

//Сопоставление массива вместо .map()
function alternativeMap(){
    let test = [
        {id:'1', val:11},
        {id:'2', val:22},
        {id:'3', val:33}
    ]
    return Array.from(test, ({id}) => id);  //['1', '2', '3']
}

//условное создание объектов
function conditionalObjextCreating(){
    const getTest = (isTest) => {
        return {
            id: 1,
            ...isTest && {name: 'test'}
        };
    }

    const test1 = getTest(true);    //{id: 1, name: 'test'}
    const test2 = getTest(false);   //{id: 1}
}

//краткое условное выражение
function shortCondition(isTest, callback){
    if (isTest){
        callback();
    }
    //change to
    isTest && callback();
}

//сохранение состояния в URL
function saveConditionInUrl(){
    //состояние страницы, компонента, приложения
    const state = {
        state1: "1",
        state2: "2"
    };

    const stateString = JSON.stringify(state);
    const compressed = compressed(stateString);
    const encoded = Base64.encode(compressed);
    //далее пушим в URL

    //при загрузке читаем URL
    const decoded = Base64.decode(encoded);
    const uncompressed = uncompressed(decoded);
    const newState = JSON.parse(uncompressed);
}

//преобразование в строку
function toString(val){
    return val+"";
}

//преобразование в число
function toNumber(str){
    return +str;
}

//обрезать массив
function truncateArray(arr, newLength){
    arr.length = newLength;     //усечь массив

    arr.length = 0;             //очистить массив
}

//объединение многомерных массивов
function concatArray(){
    const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
    return [].concat(...arr);       //[1, 2, 3, 4, 5, 6, 7, 8]
}

//итерирование по массиву
function arrayIterating(){
    const arr = [1, 2, 3,4,5, 6, 7];

    let i = 0;
    while(i < arr.length){
        console.log(arr[i]);
        i++
    }

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }

    for (const el of arr){
        console.log(el);
    }

    arr.forEach(function(currentValue, index) {
        console.log(`Index ${index} - value ${currentValue}`);
    });

    const squares = arr.map(x => Math.pow(x, 2));
    console.log(squares);

    const arraySum = arr.reduce((x, y) => x + y, 0);

    const evenArray = arr.filter(x => x % 2 === 0);

    const everyLessThanSeven = arr.every(x => x < 7);

    const someLessThanSeven = arr.some(x => x < 7);
}