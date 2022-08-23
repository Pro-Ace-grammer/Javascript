//this is my program to practice while loops in javascript
let a = 123, temp = a, rem=1, rev=0;

while(temp>0)
{
    rem = temp%10;
    rev= rev*10 + rem;
    temp= Math.floor(temp/10);
}
console.log(`reverse of the number ${a} is =`+rev);