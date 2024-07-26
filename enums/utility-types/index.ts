
interface UserInterface {
    id: number,
    email: string;
    password: string;
    age: number;
    gender: string;
    date_joined?: string;
    referrer_code?: string;
}

// const user_1: UserInterface = {
//     email: "owoadeanu@yahoo.com",
//     password: "password",
//     age: 20,
//     gender: 'male'
// }

type UserLogin = Pick<UserInterface, "email" | "password">;

function user_login( payload: UserLogin ){

}

type UserInterfacePartial = Partial<UserInterface>;

type FindUserFilter = Partial<Omit<UserInterface, "password" | "date_joined">>;

const User = {
    find( filter: FindUserFilter ){

    }
}

function find_user( filter: UserInterfacePartial ){

    return User.find( filter );

}

find_user({ email: "owoadeanu@gmail.com" })
find_user({ date_joined: "owoadeanu@gmail.com" })



find_user({ email: "owoadeanu@yahoo.com", password: "1234" });

find_user({ age: 30 });

find_user({ date_joined: "2020-10-02"});





// Omit
// Record

type GenderType = "male" | "female";

type GenderObject = {
    group_name: string;
    group_leader: string;
    responsibilty: string;
}

type GenderRecord = Record<GenderType, GenderObject>






