// string ==> String
// number ==> Number
// boolean ==> Boolean

function get_value_class( val: number ): NumberConstructor;
function get_value_class( val: string ): StringConstructor;
function get_value_class( val: boolean ): BooleanConstructor
function get_value_class<T extends (string | number | boolean) >( val: T ){

    if( typeof val === "string" ) return String;

    if( typeof val === "number" ) return Number;

    if( typeof val === "boolean" ) return Boolean;

}

const number_class = get_value_class(1);

const boolean_class = get_value_class(true);



interface UserInterface {
    email: string;
    password: string;
    phone_number: string;
    gender: string;
}


interface AdminInterface {
    privileges: string[];
    access: number;
    level: string;
}

type KeyUser = keyof UserInterface;

const users = [
    {
        email: "john.doe@example.com",
        password: "password123",
        phone_number: "123-456-7890",
        gender: "male"
    },
    {
        email: "jane.smith@example.com",
        password: "password456",
        phone_number: "098-765-4321",
        gender: "female"
    },
    {
        email: "alex.jones@example.com",
        password: "password789",
        phone_number: "555-555-5555",
        gender: "non-binary"
    }
] as UserInterface[];
const admins = [
    {
        privileges: ["read", "write", "execute"],
        access: 1,
        level: "superadmin"
    },
    {
        privileges: ["read", "write"],
        access: 2,
        level: "admin"
    },
    {
        privileges: ["read"],
        access: 3,
        level: "moderator"
    }
] as AdminInterface[];

function map_arr<T>(arr: T[]): T[];
function map_arr<T, K extends keyof T>(arr: T[], attributes?: K[]): (Pick<T, K>)[]
function map_arr<T, K extends keyof T>(arr: T[], attributes?: K[]){

    if( !attributes ) return arr as T[];

    const mapped_result = [] as (Pick<T, K>)[]; 

    for( let item of arr ){

        let mapped_object = attributes.reduce(( acc, attribute )=>{
            acc[attribute] = item[attribute];
            return acc
        }, {} as Pick<T, K>)

        mapped_result.push(mapped_object);

    }

    return mapped_result

}

const mapped_users = map_arr( users, ['email', 'password']);
const mapped_admins = map_arr( admins, ['privileges']);

// const first_mapped_user = mapped_user[0];

console.log({mapped_users, mapped_admins})




