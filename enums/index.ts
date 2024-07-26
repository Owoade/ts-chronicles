let x = 2;

x = 3;

const y = 3;

let z = 5 as const;

z = 5;

interface Something {
    element: number
}

// enums
enum Color {
    red = 'green',
    blue = 'blue',
    yellow = 'red',
    green = "Green"
}

const color = Color.blue;

const green = Color.green;

function say_color( color: Color ){
    console.log( color )
}





