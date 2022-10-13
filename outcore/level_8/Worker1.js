let totalRound = 0

init()
fromPedalToReadyGetCoins()
getCoinsToBottomBorder()
throwItemsAlongBorder(5)
fromBottomBorderToPedal()
fromPedalToReadyGetCoins()
getCoinsToLeftBorder()
throwItemsAlongBorder(5)
log(totalRound)
// 123

while (true) {
    stop(10)
}

function init() {
    goStraight(1)
    turnRight()
    goStraight(5)
    turnRight()
}

function fromPedalToReadyGetCoins() {
    goStraight(4)
    turnRight()
    goStraight(2)
    stop(2)
}

function getCoinsToBottomBorder() {
    getCoins()
    turnRight()
    goStraight(3)
}

function getCoinsToLeftBorder() {
    getCoins()
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(12)    
}

function getCoins() {
    goStraight(8)
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(2)
    turnLeft()
    goStraight(2)
    turnLeft()
    goStraight(2)
}

function throwItemsAlongBorder(quantity) {
    throwItem(0)
    for (let i = 0; i < quantity - 1; i++) {
        turnRight()
        goStraight(1)
        turnLeft()
        throwItem(0)
    }
}

function fromBottomBorderToPedal(quantity) {
    turnRight()
    goStraight(6)
    turnRight()
    goStraight(4)
}



// function fromOutputerToPedal() {
//     goStraight(2)
// }

// function fromOutputerToGetRedCoin() {
//     goStraight(1)
//     turnRight()
//     goStraight(3)
//     turnRight()
//     goStraight(1)
// }

// function throwRedCoinToBorderAndTurnOnPedal() {
//     goStraight(2)
//     throwItem(0)
//     turnRight()
//     goStraight(4)
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