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