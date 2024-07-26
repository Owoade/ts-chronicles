function log(x: any){
    console.log(x);
    return x;
}

const logged_boolean = log( true );
const logged_string = log("anu");
const logged_number = log(2);

function generic_log<T>(x:T){
    console.log(x);
    return x;
}

let generic_logged_boolean = generic_log( true );
const generic_logged_string = generic_log("anu");
const generic_logged_number = generic_log(2);

function fund_wallet( amount: number ){

    const old_balance = 300000000;

    const new_balance = old_balance + amount;

    return new_balance;

}

interface Wallet<T extends string> {
    user_id: number;
    balance: number;
    currency: T
}

type NigerianWallet = Wallet<"Naira" | "kobo">;

type DollarWallet = Wallet<"dollar" | "cent">;

// 3 => [3,3,3,3,3]

let x: Array<string> | string[] = ['']

function duplicate<T>( val: T, factor: number ){
    return Array<T>(factor).fill(val)
}

const boolean_duplicates = duplicate(true, 10);

const number_duplicates = duplicate(3, 10);

