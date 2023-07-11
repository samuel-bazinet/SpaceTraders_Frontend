export const camelToSpaced = (input: string): string => {
    let output = "";
    for (let i = 0; i < input.length; ++i) {
        if (i === 0) {
            output += input[i].toUpperCase();
        } else if (input[i] === input[i].toUpperCase()) {
            output += " " + input[i];
        } else {
            output += input[i];
        }
    }
    return output;
}

