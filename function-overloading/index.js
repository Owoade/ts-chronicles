// string ==> String
// number ==> Number
// boolean ==> Boolean
function get_value_class(val) {
    if (typeof val === "string")
        return String;
    if (typeof val === "number")
        return Number;
    if (typeof val === "boolean")
        return Boolean;
}
var number_class = get_value_class(1);
var boolean_class = get_value_class(true);
var users = [
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
];
var admins = [
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
];
function map_arr(arr, attributes) {
    if (!attributes)
        return arr;
    var mapped_result = [];
    var _loop_1 = function (item) {
        var mapped_object = attributes.reduce(function (acc, attribute) {
            acc[attribute] = item[attribute];
            return acc;
        }, {});
        mapped_result.push(mapped_object);
    };
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        _loop_1(item);
    }
    return mapped_result;
}
var mapped_users = map_arr(users, ['email', 'password']);
var mapped_admins = map_arr(admins, ['privileges']);
// const first_mapped_user = mapped_user[0];
console.log({ mapped_users: mapped_users, mapped_admins: JSON.stringify(mapped_admins) });
