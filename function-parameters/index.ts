
// interface FundWallet {
   
// }

export type FundWallet = {
    user_id: number,
    amount: number,
    wallet_id: number
}

function fund_wallet( payload: FundWallet ){

    const prev_balance = 30000000;

    const new_balance = prev_balance + payload.amount;

    return new_balance;

}

fund_wallet({
    user_id: 1,
    wallet_id: 30,
    amount: 20000,
});