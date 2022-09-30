//Gets an array of cards, where an element is an array of a string and a number
//Checks if the hand is a Straight Flush or Royal Flush
//Returns an array of two numbers:
//  Straight Flush: [9, <value of high card>]
//  Royal Flush: [10, <value of high card>]
//  Else: [0, 0]
function CheckStraightFlush(Cards){
    var Colors = {}
    Cards.forEach(e => {
        var key = e[0].slice(-1)
        Colors[key] = Colors[key] ? Colors[key] + 1 : 1 //Counting occurences of each house
    });
    //Getting the key of the highest value from Colors{}
    var ColorOfFlush = Object.keys(Colors).reduce((a, b) => Colors[a] > Colors[b] ? a : b)
    var Flush = []
    Cards.forEach(e => {
        if(e[0].includes(ColorOfFlush)){
            Flush.push(e)
        }
    });
    //If there is no five of the same house, return
    if(Flush.length < 5) return [0, 0]
    //If Royal Flush
    if(Flush[0][1] == 14 && Flush[1][1] == 13 && Flush[2][1] == 12 && Flush[3][1] == 11 && Flush[4][1] == 10) return [10,14]
    if(Flush[0][1] == 14) Flush[0][1] = 1
    Flush.sort((a,b) => a[1] - b[1]).reverse()
    var Sequence = 1
    var SequenceStart = 0
    for (let i = 0; i < Flush.length-1; i++) {
        if(Flush[i][1] - Flush[i+1][1] == 1){
            if(Sequence == 1) SequenceStart = i
            Sequence++
        } else if(Sequence < 5) Sequence = 1
    }
    Flush = Flush.slice(SequenceStart, SequenceStart + 5)
    if(Sequence < 5) return [0,0]
    return [9, Flush[0][1]]
}


//Tests
var t = [
    ["1s", 14],
    ["7h", 7],
    ["5s", 5],
    ["5h", 5],
    ["4s", 4],
    ["3s", 3],
    ["2s", 2]
]

var t2 = [
    ["kh", 13],
    ["qh", 12],
    ["jc", 11],
    ["jh", 11],
    ["10h",10],
    ["9h", 9],
    ["9d", 9]
]

var t3 = [
    ["ah",14],
    ["kh", 13],
    ["qh", 12],
    ["jh", 11],
    ["10h", 10],
    ["9h", 9],
    ["9d", 9]
]

var t4 = [
    ["ah", 14],
    ["kh", 13],
    ["7h", 7],
    ["5h", 5],
    ["4h", 4],
    ["3h", 3],
    ["2h", 2]
]
var t5 = [
    ["ah", 14],
    ["kh", 13],
    ["7h", 7],
    ["5h", 5],
    ["4h", 4],
    ["3h", 3],
    ["2h", 2]
]
var t6 = [
    ["ah", 14],
    ["kh", 13],
    ["jh", 11],
    ["7h", 7],
    ["5h", 5],
    ["3h", 3],
    ["2h", 2]
]
var t7 = [
    ["kh", 13],
    ["12h", 12],
    ["11h", 11],
    ["10h", 10],
    ["9h", 9],
    ["4h", 4],
    ["3h", 3]
]
console.log(CheckStraightFlush(t));