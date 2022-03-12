// define contract to create an instance of a class
interface IAccount {
    holder: string;
    accountType: 'individual' | 'legal';
}

interface IPayment {
    customer: string;
    paymentMode: string;
    myMoney: number;
    payCustomer(billValue: number): void;
    receivePayment(value: number): void;
}

// inheritance
interface ICorporations extends IAccount {
    groupName: string;
    partnersList: string[];
    addPartner(name: string): void;
}

// types in Typescript are used to join different interfaces usually
type ISystem = IAccount | ICorporations

const fintech: ICorporations = {
    holder: 'fulano',
    accountType: 'legal',
    groupName: 'Zitz SA',
    partnersList: ['Zitz company'],
    addPartner: (name) => {
        fintech.partnersList.push(name);
        console.log(fintech.partnersList);
    }
}

const banco: IPayment = {
    customer: '',
    paymentMode: '',
    myMoney: 1000,
    payCustomer: (billValue) => {
        banco.myMoney -= billValue;
        console.log(`The bill cost an amount of U$$ ${billValue}. Your new balance is ${banco.myMoney}`);

    },
    receivePayment: (value) => {
        banco.myMoney += value;
        console.log(`You received ${value}. Your new balance is ${banco.myMoney}`);
    }

}

// basic operations - Payment
banco.payCustomer(8)
banco.receivePayment(50);

// basic operations - corporations
fintech.addPartner('Money fintech');
fintech.addPartner('Nice bank');
fintech.addPartner('Bank and bank');
