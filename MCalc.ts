import inquirer from "inquirer"

async function startCalu (){
    console.log(`Mini Calculatir \n`)
    const userInput = await inquirer.prompt ([      
     
{
        type:"number",
        name: "num1",
        message: "Enter your First Number"   
    },
    {
        type:"number",
        name: "num2",
        message: "Enter your Second Number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Multiply", "Divide"] 
    }
    ])
        const userOp = userInput.operator;
        const firstNum = userInput.num1;
        const secondNum = userInput.num2;

        if (userOp == "Add"){
        console.log(`\n The Answer of ${firstNum} + {secondNum} = ${firstNum + secondNum}`);
        }
        else if (userOp == "Sub"){
            console.log(`\n The Answer of ${firstNum} - {secondNum} = ${firstNum - secondNum}`);
    }
    else if (userOp == "Multiply"){
        console.log(`\n The Answer of ${firstNum} * {secondNum} = ${firstNum * secondNum}`);
    }
    else if (userOp == "Divide"){
        console.log(`\n The Answer of ${firstNum} / {secondNum} = ${firstNum / secondNum}`);
    }
}
    startCalu()