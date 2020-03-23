//multi-dimensional arrays to build a small inventory management system
//sku (number), product (string), quantity (number), cost (floating point number)
function view(inventory) {
    let i;
    for (i = 0; i < inventory.length; i +=1) {
        window.console.log(
            inventory[i].scu + '\t' +
            inventory[i].product + '\t' + '(' +
            inventory[i].quantity + ')' + '\t' + '$' +
            inventory[i].cost);
    }
}
function getinventory() {
    const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory;

tshirt.scu = 1;
tshirt.product = "Tshirt";
tshirt.quantity = 17;
tshirt.cost = 24.99;

jeans.scu = 2;
jeans.product = "Jeans";
jeans.quantity = 25;
jeans.cost = 24.99;

jacket.scu = 3;
jacket.product = "Jacket";
jacket.quantity = 11;
jacket.cost = 24.99;

hat.scu = 4;
hat.product = "Hat";
hat.quantity = 22;
hat.cost = 24.99;

socks.scu = 5;
socks.product = "Socks";
socks.quantity = 17;
socks.cost = 24.99;

inventory = [tshirt, jeans, jacket, hat, socks];
return inventory;
}

function displayMenu() {
    window.console.log('');
    window.console.log('INVENTORY MANAGMENT MENU');
    window.console.log('show - show inventory');
    window.console.log('');
}

window.addEventListener("load", () => {
let inventory, command;

    displayMenu();
    inventory = getinventory;

    while(true) {
        command = window.prompt('Enter command');
        if (command !== null) {
            if (command === 'show') {
                view(inventory);
            } else {
                window.alert('Not a valid command');
            }
        } else {
            break;
        }
    }
});