const infoUser = require('./information');
const cowsay = require("cowsay");
function reponse() {
console.log(cowsay.say({
    text : `Hello I'm ${infoUser.myName} from ${infoUser.myCampus}`,
    e : "oO",
    T : "U ",
}))};
reponse()