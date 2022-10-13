let totalRound = 0

init()
fromLeftTopPedalToLeftBottomPedal()
fromLeftBottomPedalToReadyGetCoins()
getCoinsToTopOutputer()
fromTopOutputerToBottomPedal()
fromBottomPedalToTopPedal()
fromTopPedalToGetCoins()
// 96

while (true) {
    stop(20)
}

function init() {
    goStraight(2)
}

function fromLeftTopPedalToLeftBottomPedal() {
    goStraight(11)
    turnLeft()
    goStraight(3)
}

function fromLeftBottomPedalToReadyGetCoins() {
    goStraight(2)
    turnLeft()
    stop(4)
}

function getCoinsToTopOutputer() {
    goStraight(4)
    turnLeft()
    goStraight(1)
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(1)
    turnRight()
    goStraight(2)
    turnLeft()
    goStraight(1)
    turnRight()
    stop(4)
}

function fromTopOutputerToBottomPedal() {
    goStraight(5)
    turnRight()
    goStraight(3)
}

function fromBottomPedalToTopPedal() {
    goStraight(3)
    turnRight()
    goStraight(11)
    turnRight()
}

function fromTopPedalToGetCoins() {
    goStraight(5)
    turnRight()
    goStraight(10)
    turnRight()
    goStraight(1)
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(2)
}


// function fromTopOutputerToLeftTopPedal() {
//     goStraight(6)
//     turnRight()
//     goStraight(6)
//     turnBack()
// }

// Library
function goStraight(step) {
    for (let i = 0; i < step; i++) {
        MoveForward()
        totalRound++
    }
}

function turnRight() {
    TurnRight()
    totalRound++
}

function turnLeft() {
    TurnLeft()
    totalRound++
}

function turnBack() {
    for (let i = 0; i < 2; i++) {
        TurnLeft()
        totalRound++
    }
}

function stop(round) {
    for (let i = 0; i < round; i++) {
        DoNothing()
        totalRound++
    }
}

function waitAnotherWorker() {
    while (!SyncWorkers()) {
        DoNothing()
    }
}

function log(msg) {
    ConsoleLog(msg.toString())
}

function respondOwnItems() {
    const items = GetWorkerInventoryItems()
    totalRound++
    return items
}

function throwItem(index) {
    ThrowItem(index)
    totalRound++
}

// Command in this game:
// MoveForward()
// TurnRight()
// TurnLeft()
// DoNothing()
// ConsoleLog(string)
// GetWorkerInventoryItems()
// ThrowItem(int itemIndex): 丟出位置已有硬幣時不能執行
// SyncWorkers(): 所有角色同時執行時為 true，否則 false