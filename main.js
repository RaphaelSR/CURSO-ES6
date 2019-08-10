const soma = (a = 3, b = 6) => a + b

console.log(soma(1));
console.log(soma());


//Quinta aula
// const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(item => item * 2);  

// console.log(newArr);

// const teste = () => ({nome: 'Diego'});
// console.log(teste());

//Quarta aula 
// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index){
// return item + index;
// // map percore o vetor passando por todas as posições
// });
// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     return total + next;
// // percorre o vetor e retorna apenas uma variavel
// // nesse caso soma o total de cada item e passa para o proximo
// });
// console.log(sum)

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);

// const find = arr.find(function(item){
// return item === 4;
// })

// console.log(find)

//Terceiro video
// class Matematica{
//     static soma(a, b){
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1,6));



// Terceiro video
// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor(){
//         super(); //serve para chamar o costructor da classe pai
//         this.usuario = 'Diego';
//     }
//     mostraUsuario(){
//         console.log(this.usuario)
//     }
// }

// const MinhaLista = new TodoList()

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo')
// }

// MinhaLista.mostraUsuario();