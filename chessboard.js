var size = 64;
var output = ""
var outputH = ""
var board = ""
while (output.length < size) {
    while(outputH.length < 32) {
        outputH += "# "
        board += outputH
    }
    output += outputH
    board += output
}
console.log(board)
