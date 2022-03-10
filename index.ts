// define contract to create an instance of IPayment
interface IPayment {
    customer: string;
    paymentMode: string;
    myMoney: number;
    payCustomer(billValue: number): void;
    receivePayment(value: number): void;
}

interface ICorporations extends IPayment {
    groupName: string;
    partnersList: string[];
    addPartner(name: string): void;
}

const fintech: ICorporations = {
    customer: 'industries',
    paymentMode: 'cash',
    myMoney: 10000,
    groupName: 'Zitz SA',
    partnersList: ['Zitz company'],
    addPartner: (name) => {
        fintech.partnersList.push(name);
        console.log(fintech.partnersList);
    },
    payCustomer: (billValue) => {
        banco.myMoney -= billValue;
        console.log(`The bill cost an amount of U$$ ${billValue}. Your new balance is ${banco.myMoney}`);

    },
    receivePayment: (value) => {
        banco.myMoney += value;
        console.log(`You received ${value}. Your new balance is ${banco.myMoney}`);
    }
}


const banco: IPayment = {
    customer: 'Igor',
    paymentMode: 'credit card',
    myMoney: 15,
    payCustomer: (billValue) => {
        banco.myMoney -= billValue;
        console.log(`The bill cost an amount of U$$ ${billValue}. Your new balance is ${banco.myMoney}`);

    },
    receivePayment: (value) => {
        banco.myMoney += value;
        console.log(`You received ${value}. Your new balance is ${banco.myMoney}`);
    }

}

// basic operations
banco.payCustomer(8)
banco.receivePayment(50);
fintech.addPartner('Money fintech');
fintech.addPartner('Nice bank');
fintech.addPartner('Bank and bank');
