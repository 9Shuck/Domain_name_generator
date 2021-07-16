<<<<<<< HEAD
const PRONOUMS = ['the', 'our', 'just'];
const NOUNS = ['doit', 'malcom', 'breathcode'];
const EXTENSIONS = ['com', 'it', 'de'];

window.onload = function(){
    getDomain()
}

function getDomain () {
    let domain = [];
    for(const pronoum of PRONOUMS) {
        for(const noun of NOUNS){
            for(const extension of EXTENSIONS) {
                let addExtension = checkExtension(pronoum.concat(noun), extension);
                let firstPart = pronoum.concat(noun);

                if(addExtension) {
                    let subString = firstPart.split(extension, firstPart.length - extension.length);
                    domain.push(subString[0].concat('.', extension));
                    } else {
                    domain.push(firstPart.concat('.', extension));

                    }
                }
            }   
        }
        console.log(domain);
        document.querySelector('#domain').innerHTML = domain;
}  






function checkExtension(domain, extension) {

    return domain.includes(extension, domain-length - extension.length);
}
=======
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

>>>>>>> 10307de6656cd921e1d6a21af7d5ec385f559fe2
