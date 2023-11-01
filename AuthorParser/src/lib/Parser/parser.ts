// Logic for parsing text
export function Parse(textToParse: string) {
    let result: string = '';
    if (textToParse.length > 0) {
        result = textToParse.replace(/[\r\n]+/g, '\n');
    } else {
        result = "Error, text is empty!";
        return result;
    }
    return result;
}