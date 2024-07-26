
function say_name( first_name, last_name ){

    if( !last_name ) return console.log( `Hello your name is ${first_name}`);

    console.log( `Hello your name is ${first_name} ${last_name}`);
    
}

say_name('Owoade');

say_name('Owoade', 'Anuoluwapo');