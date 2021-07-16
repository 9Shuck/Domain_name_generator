let pronoun = ['the', 'our', 'his', 'her', 'mine', 'their', 'them'];
let adjective = ['great', 'big', 'small', 'tall' , 'old', 'young', 'beautiful', 'nice'];
let noun = ['dog', 'cat', 'ball', 'bird', 'cow', 'horse', 'sheep', 'racoon', 'bee'];

let result = '';

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            result += pronoun[i] + adjective[j] + noun[k] + '.com' + '\n';
        }
    }
    console.log(result);
}

