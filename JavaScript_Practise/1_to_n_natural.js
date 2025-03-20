// Write a C program to print all natural numbers from 1 to n. - using while loop
function ShowNatural() {
  let n = prompt("Enter a number:");
  let numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  alert("Natural Numbers: " + numbers.join(", "));
}
//Write a C program to print all natural numbers in reverse (from n to 1). - using while loop

function ShowNaturalREv() {
  let n = prompt("Enter a number:");
  let numbers = [];
  let i = n;
  while (i >= 1) {
    numbers.push(i);
    i--;
  }
  alert("Natural Numbers: " + numbers.join(", "));
}
//Write a C program to print all alphabets from a to z. - using while loop

function ShowAlphabets() {
  let alphabets = [];
  let i = 97;
  while (i <= 122) {
    alphabets.push(String.fromCharCode(i));
    i++;
  }
  alert("Alphabets: " + alphabets.join(", "));
}
//Write a C program to print all even numbers between 1 to 100. - using while loop
function AllEven() {
  let prime = [];
  let num = prompt("Enter The Number To Print Upto The All Even:");
  let n=parseInt(num);
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      prime.push(i);
    }
    i++;
  }
  alert("Even Number :" + prime.join(" , "));
}
//Write a C program to print all Odd numbers between 1 to 100. - using while loop
function AllOdd() {
  let prime = [];
  let n = prompt("Enter The Number To Print Upto The All Odd:");
  let i = 0;
  while (i <= n) {
    if (i % 2 != 0) {
      prime.push(i);
    }
    i++;
  }
  alert("Odd Number :" + prime.join(" , "));
}

//Write a C program to find the sum of all natural numbers between 1 to n.
function sumNatural() {
  let sum = 0;
  let n = prompt("Enter The Number To Print All The Numbers Sum.. ");
  let i = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  alert("Sum Of All Number Is.." + sum);
}

//Write a C program to find the sum of all even numbers between 1 to n.

function SumEven() {
  let sum = 0;
  let n = prompt("ENter The Number To PRint All The Even Number Sum...");
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
    i++;
  }
  alert("Sum Of All Even  NUmber.." + sum);
}

//Write a C program to find the sum of all even numbers between 1 to n.

function SumOdd() {
  let sum = 0;
  let n = prompt("ENter The Number To PRint All The Odd Number Sum...");
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
    i++;
  }
  alert("Sum Of All Odd  NUmber.." + sum);
}

//Write a C program to print multiplication table of any number.

function MulTable() {
  let mul = [];
  let n = prompt("Enter The Number To Get The Multiplication table...");
  let i = 1;
  while (i <= 10) {
    let res = i * n;
    mul.push(res);
    i++;
  }

  alert("This Is Ur Multiplication Table.." + mul.join(" , "));
}
//Write a C program to count number of digits in a number.
function DigitCount() {
  let n = prompt("Enter The Number To Count Its Digit..");
  let count = 0;
  while (n != 0) {
    let res = n / 10;
    count++;
  }
  alert("This Is Your Digit Count...." + count);
}

//Write a C program to find first and last digit of a number.
function FirstLast() {
  let n = prompt("Enter The Number To find First And Last...");
  let num = parseInt(n);

  let last = num % 10;

  let temp = num;
  while (temp >= 10) {
    temp = temp / 10;
  }

  let first = temp;

  alert("First number: " + first + "\nLast number: " + last);
}

//Write a C program to find sum of first and last digit of a number.
function FirstLastsum() {
  let n = prompt("Enter The Number To find First And Last sum...");
  let num = parseInt(n);

  let last = num % 10;

  let temp = num;
  while (temp >= 10) {
    temp = temp / 10;
  }

  let first = temp;
  let sum = first + last;
  alert("The Sum Of First And Last Is " + sum);
}

//Swap_First_Last

function FirsLastSwap() {
  let n = prompt("Enter The Number To Swap find First And Last ...");
  let num = parseInt(n);
  let temp = num;
  let i = 0,
    count = 1;
  while (i <= num) {
    num = num / 10;
    count++;
  }
  let x = 1;
  i = 1;
  while (i < count) {
    x = x * 10;
    i++;
  }
  let Last = temp % 10;
  let First = temp / x;
  let mid = (temp % x) / 10;
  let swap = x * Last + mid * 10 + First;
}
//Write a C program to calculate sum of digits of a number.

function DigitCountSum() {
  let n = prompt("Enter The Number To Count its Digit and Sum");
  let num = parseInt(n);
  let sum = 0;
  while (num != 0) {
    let digit = num % 10;
    sum += digit;
    num = num / 10;
  }
  alert("The Sum Of All Digit Is-->" + sum);
}

//Write a C program to calculate product of digits of a number.

function ProductNum() {
  let n = prompt("Enter The Number To get The Product Of Num");
  let num = parseInt(n);
  let sum = 1;
  while (num != 0) {
    let digit = num % 10;
    sum = sum * digit;
    num = (num - (num % 10)) / 10;
  }
  alert("The Product of Digit Is-->"+sum);
}

//Write a C program to enter a number and print its reverse.
function ReverseNum() {
  let n = prompt("Enter The Number To get The Reverse");
  let num = parseInt(n);
  let reverse = 0;
  while (num != 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num - (num % 10)) / 10;
  }
  alert("The Reverse Number is-->" +reverse);
}

//Write a C program to check whether a number is palindrome or not.
function PalindromeCheck() {
  let n = prompt("Enter The Number To get The Reverse");
  let num = parseInt(n);
  let temp = num;
  let reverse = 0;
  while (num != 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num - (num % 10)) / 10;
  }
  if (reverse == temp) {
    alert("The  Number is Palindrome-->" + reverse);
  } else {
    alert("The  Number is Not Palindrome-->" + reverse);
  }
}
//Write a C program to find frequency of each digit in a given integer.
function Frequency() {
  let n = prompt("Enter The Number To get The Frequency");
  let num = parseInt(n);
  let count = {};
  while (num != 0) {
    let digit = num % 10;
    if (count[digit]) {
      count[digit]++;
    } else {
      count[digit] = 1;
    }
    num = num / 10;
  }
  let output = "";
  for (let i = 0; i <= 9; i++) {
    if (count[i]) {
      output += "Digit " + i + " appears " + count[i] + " times\n";
    }
  }
  alert(output);
}
//Write a C program to enter a number and print it in words.
function PrintInWords() {
  let n = prompt("Enter The Number To get The Words");
  let num = parseInt(n);
}

//Write a C program to print all ASCII character with their values.
function PrintAscii() {
  let asciiValues = [];

  for (let i = 0; i <= 127; i++) {
      asciiValues.push(`ASCII Value of ${String.fromCharCode(i)} is ${i}`);
  }

  alert(asciiValues.join("\n")); 
}

 //  Write a C program to find power of a number using for loop.
 function Power(){
  let n = prompt("Enter The Number To get The Power");
  let num = parseInt(n);
  let power = prompt("Enter The Power");
  let pow = parseInt(power);
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result = result * num;
    }
    alert(result);
 }
// Write a C program to find all factors of a number.
function Factors(){
  let n = prompt("Enter The Number To get The Factors");
  let num = parseInt(n);
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
      }
      }
      alert(factors.join("\n"));
    }

   // Write a C program to calculate factorial of a number.
   function Factorial(){
    let n = prompt("Enter The Number To get The Factorial");
    let num = parseInt(n);
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
      }
      alert(result);
    }
    //Write a C program to find HCF (GCD) of two numbers.
    function HCF(){
      let n = prompt("Enter The First Number To get The HCF");
      let m = prompt("Enter The Second Number To get The HCF");
      let num = parseInt(n);
      let num2 = parseInt(m);
      let hcf = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i == 0 && num2 % i == 0) {
          hcf = i;
          }
          }
          alert(hcf);
        }

   //Write a C program to find LCM of two numbers.
   function LCM(){
    let n = prompt("Enter The First Number To get The LCM");
    let m = prompt("Enter The Second Number To get The LCM");
    let num = parseInt(n);
    let num2 = parseInt(m);
    
    let lcm = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0 && num2 % i == 0) {
        lcm = i;
        }
        }
        alert(lcm);
      }
  //Write a C program to check whether a number is Prime number or not.
function PrimeCheck(){
  let n=prompt("Enter The Number to check is It Prime Or Not....");
  let num=parseInt(n);
   let flag=0;
  for(let i=0;i<=num;i++)
  { 
    if(num%i==0)
    {
      flag++;
    }

  }
   if(flag== 2)
   {
    alert("The Number is Prime..."+num);
   }else{
    alert("The Number is Not Prime..."+num);
   }

}
//Write a C program to print all Prime numbers between 1 to n.    
function PrimeCheckN(){
  let n=prompt("Enter The Number to to Get the Up To The Prime Numbers....");
  let num=parseInt(n);
   let flag=0;
   let alllist=[];
  for(let i=0;i<=num;i++)
  {
    flag=0
      for(let j=0;j<=i;j++)
        {
          if(num%i==0)
            {
              flag++;
            }
         }
  
   if(flag== 2)
    {
      alllist.push(i);
     }  
      
  }
  alert("These Are The All Prime Number.."+alllist.join(" , "));
}
//Write a C program to find sum of all prime numbers between 1 to n

function PrimeCheck(){
  let n=prompt("Enter The Number to to Get the Up To The Prime Numbers....");
  let num=parseInt(n);
   let flag=0;
   let sum=0;
  for(let i=0;i<=num;i++)
  {
    flag=0
      for(let j=0;j<=i;j++)
        {
          if(num%i==0)
            {
              flag++;
            }
         }
  
   if(flag== 2)
    {
      sum=sum+i;
     }  
      
  }
  alert("The Sum Of All Prime.."+sum);
}

//Write a C program to find all prime factors of a number.
function PrimeFactor()
{
  let n=prompt("Enter The Number To Check Its Prime Factor");
  let num=parseInt(n);
  let allList=[];
   for(let i=0;i<=num;i++)
   { flag=0;
    if(num%i==0)
    {
      for(let j=0;j<=i;j++)
      {
        if(j%i==0)
        {
          flag++;
        }
      }
      if(flag==2)
      {
       allList.push(i); 
      }
    }
   }
   alert("These Are The All Prime Factor.."+allList.join(" , "));
}

//Write a C program to check whether a number is Armstrong number or not.
function CheckArmStrong()
{
  let n=prompt("Enter The Number To Check Is It  Armstrong..Or Not..");
  let num=parseInt(n);
  let temp=num;
  let count=0;
  let mul=1
  while(temp!=0)
  {
    temp=temp/10;
    count++;
  }
   temp=num;
   let res=0;
  while(num!=0)
  {
    let rem=num%10;
    for(let i=1;i<=count;i++)
    {
      mul=mul*rem;
    }
    res=res+mul;
    num=num/10;
  }
  if(res==temp)
  {
    alert("The Number Is ArmStrong.."+res);
  }else
  {
    alert("The Number Is Not ArmStrong..."+res);
  }
}

//Write a C program to print all Armstrong numbers between 1 to n

function CheckArmStronggg()
{
  let n=prompt("Enter The Number To Check Up To The Armstrong..");
  let num=parseInt(n);
  
  let count=0;
  let res=0;
  let mul=1;
  let arm=[];
  for(let i=0;i<=num;i++)
  {
     count=0;
     res=0
      let temp=i;
  
         while(i!=0)
           {
              i=i/10;
              count++;
           }
              i=temp;

            while(temp!=0)
                {
                    let rem=temp%10;
                   mul=1;
                    for(let j=1;j<=count;j++)
                      {
                            mul=mul*rem;
                      }
                        res=res+mul;
                        temp=temp/10;
     }
     if(i==res)
     {
       arm.push(i)

     }


  }
  alert("These Are The All "+arm.join(" , "));
}

//Write a C program to check whether a number is Perfect number or not.

function PerfectNumber() {
  let n = prompt("Enter the number to check if it's a Perfect Number:");
  let num = parseInt(n);
  let sum = 0;

  for (let i = 1; i < num; i++) {
      if (num % i == 0) {
          sum =sum+i;
      }
  }

  if (sum === num) {
      alert(num + " is a Perfect Number.");
  } else {
      alert(num + " is NOT a Perfect Number.");
  }
}

//Write a C program to print all Perfect numbers between 1 to n.
function PerfectNumberN()
{
  let n=prompt("ENter A Number To Print Up t The all Perfect NUmber...");
  let num=parseInt(n);
  let listt=[];
  let sum=0;
  for(let i=0;i<=num;i++)
  {
     sum=0;
     for(let j=1;j<i;j++)
      {
        if(i%j==0)
        {
          sum=sum+j;
        }
      } 
      if(sum==i)
        {
          listt.push(i);
        } 
  }
  alert("These Are The All Perfect Numbers.."+listt.join(" , "));
}

//Write a C program to check whether a number is Strong number or not.

function StrongNumberCheck()
{
    let n=prompt("Enter The Number To Check Is It Strong Or Not..");
    let num=parseInt(n);
    let temp=num;
    let mul=1;
    let nu;
    while(temp!=0)
    {
      let rem=temp%10;
       mul=1;
       for(let i=1;i<=rem;i++)
       {
        mul=mul*i;
       }
       nu=nu+mul;
       temp=temp/10;
    }

    if(nu==num)
    {
      alert("This Is The Strong NUmber..."+nu);
    }else
    { 
     alert("This Is Not A Strong Nmber..."+nu);

    }
}

//Write a C program to print all Strong numbers between 1 to n.

function StrongNumberCheck()
{
    let n=prompt("Enter The Number To Check Up To The All Strong Number...");
    let num=parseInt(n);
  
    let allist=[];
    let mul=1;
    let nu=0;
   for(let j=1;j<=num;j++)
    { let temp=j;
      nu=0;
    while(temp!=0)
    {
      let rem=temp%10;
       mul=1;
       for(let i=1;i<=rem;i++)
       {
        mul=mul*i;
       }
       nu=nu+mul;
       temp=temp/10;
    }
    if(nu==j)
    {
      allist.push(j);
    }
   
  }
  alert("These Are The All Strong Number..."+allist.join(" , "))
}

//Write a C program to print Fibonacci series up to n terms.


