interface UserInterface {
    email: string;
    password: string;
    age: number;
    gender: string;
    address: UserAddress
}

interface UserAddress{
    city: string;
    country: string;
    zip_code: number;
}

interface WalletInterface {
    id: number
    user_email: string,
    balance: number,
    currency: "usd" | "ngn",
    transactions: WalletTransaction[]
}

interface WalletTransaction {
    amount: number;
    type: "credit" | "debit",
    wallet_id: number,
    narration: string;
    date: Date
}

function create_wallet( wallet: WalletInterface ){
    // insert to your database
}

interface UserInterface {
    email: string;
    password: string;
}

interface PatientInterface extends UserInterface {
    blood_group: string;
    genotype: string;
    gender: "male" | "female" | "others";
    age: number;
}

interface DoctorInterface extends UserInterface {
    area_of_expertise: string;
    availability: string;
}