let button = document.querySelector('#button');
let output = document.querySelector('#output');


//--------  XMLHttpRequest  ----------
// let click = Rx.Observable.fromEvent(button,"click");

// function load(url){
//     return Rx.Observable.create(observer=>{
//             let xhr = new XMLHttpRequest();

//             xhr.addEventListener('load', ()=>{
//                 if(xhr.status==200){
//                 let data = JSON.parse(xhr.responseText);
//                 observer.next(data);
//                 observer.complete();
//                 }else{
//                     observer.error(xhr.statusText);
//                 }
//             });
//             xhr.open('GET', url);
//             xhr.send();
//     }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
// }
// function retryStrategy({attempts = 4, delay = 1000}){
//     return function(error){
//         return error
//             .scan((acc, value)=>{
//                 console.log(acc, value);
//                 return acc+1;
//             }, 0)
//             .takeWhile(acc=> acc<attempts)
//             .delay(delay);
//     }
// }

// function renderMovie(movie){
//     movie.forEach(m=>{
//     let div = document.createElement('div');
//     div.innerText= m.title;
//     console.log(m.title);
//     output.appendChild(div)
//     })
// }


// click.flatMap(e=>load('data/movie.json'))//flatMap дозволяє працювати із observable який мфє в собі інший observable
// .subscribe(
//     renderMovie,
//     err=> console.log(`Error: ${err}`),
//     ()=> console.log(`Complete`)
// );
//--------  XMLHttpRequest  ----------



// --------louding from promise--------
// let click = Rx.Observable.fromEvent(button,"click");

// function load(url){
//     return Rx.Observable.create(observer=>{
//             let xhr = new XMLHttpRequest();

//             xhr.addEventListener('load', ()=>{
//                 if(xhr.status==200){
//                 let data = JSON.parse(xhr.responseText);
//                 observer.next(data);
//                 observer.complete();
//                 }else{
//                     observer.error(xhr.statusText);
//                 }
//             });
//             xhr.open('GET', url);
//             xhr.send();
//     }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
// }
// function retryStrategy({attempts = 4, delay = 1000}){
//     return function(error){
//         return error
//             .scan((acc, value)=>{
//                 console.log(acc, value);
//                 return acc+1;
//             }, 0)
//             .takeWhile(acc=> acc<attempts)
//             .delay(delay);
//     }
// }

// function loadWhithFetch(url){
//     return Rx.Observable.fromPromise(fetch(url).then(r=>
//     { 
//         if(r.status==200){
//             return r.json();
//         }else{
//             return Promise.reject(r)
//         }}));
// }

// function renderMovie(movie){
//     movie.forEach(m=>{
//     let div = document.createElement('div');
//     div.innerText= m.title;
//     console.log(m.title);
//     output.appendChild(div)
//     })
// }

// click.flatMap(e=>loadWhithFetch('data/movie.json'))
// .subscribe(
//     renderMovie,
//     err=> console.log(`Error: ${err.statusText}`),
//     ()=> console.log(`Complete`)
// );
// --------louding from promise--------


// -------------- handle error ---------------
// let sours = Rx.Observable.merge(
//     Rx.Observable.of(1),
//     Rx.Observable.of(2),
//     Rx.Observable.of(3),
//     Rx.Observable.from([5,6,7]),
//     Rx.Observable.throw(new Error('Stop!')),
//     Rx.Observable.of(8)    
// ).catch(
//     e=>{
//         console.log("catch err:"+ e);
//         return Rx.Observable.of(9);
//     }
// )

// sours.subscribe(
//     value=> console.log(`value: ${value}`),
//     error=> console.log(`error: ${error}`),
//     ()=> console.log(`complete!`)
// );
// -------------- handle error ---------------