const coins = [5, 2, 1];
const amount = 11;

let amountToMake = 0;
let index = 0;
const coinList = [];

while (amountToMake !== amount) {
  if (amountToMake + coins[index] > amount) {
    index++;
  } else {
    amountToMake += coins[index];
    coinList.push(coins[index]);
  }
}

console.log(coinList);
