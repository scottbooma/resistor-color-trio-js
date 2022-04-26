export function decodedResistorValue([color1, color2, color3]) {
    const duoColors = `${colors[color1]}${colors[color2]}`
    const zeros = `${10 ** colors[color3]}`
    return `${duoColors * zeros} ohms`
}

const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
}