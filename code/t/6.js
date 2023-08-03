var token = [];

function start(char) {
    switch (char) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '0':
            token.push(char);
            return inNumber;
    }
}