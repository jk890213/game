let totalRound = 0
init()
getLeftAreaCoinToBoder()
faceRightThrowCoinsToAnotherWorkers(4)
getRightAreaToCollector()
toReadyGetLeftCoin()
getLeftAreaCoinToBoder()
faceRightThrowCoinsToAnotherWorkers(4)
getRightAreaToCollector()

while (true) {
    getRedCoinsAndOtherCoin()
    toReadyGetLeftCoin()
    getLeftAreaCoinToBoder()
    faceRightThrowCoinsToAnotherWorkers(4)
    getRightAreaToCollector()
}


function init() {
    turnRight()
    goStraight(11)
    turnRight()
    goStraight(2)
    turnLeft()
    goStraight(8)
    turnLeft()
}

function getLeftAreaCoinToBoder() {
    goStraight(5)
    turnBack()
    goStraight(2)
    turnLeft()
    goStraight(3)
    turnBack()
    goStraight(6)
    turnLeft()
    goStraight(6)
}

function faceRightThrowCoinsToAnotherWorkers(quantity) {
    throwItem(0)
    for (let i = 0; i < quantity - 1; i++) {
        turnRight()
        goStraight(1)
        turnLeft()
        throwItem(0)
    }
}

function getRightAreaToCollector() {
    turnRight()
    goStraight(6)
    turnRight()
    goStraight(7)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(2)
    turnRight()
    goStraight(6)
    turnLeft()
    const ownItems = respondOwnItems()
    stop(ownItems.length - 1)
}

function toReadyGetLeftCoin() {
    goStraight(2)
    turnLeft()
    goStraight(21)
    turnLeft()
}

function getRedCoinsAndOtherCoin() {
    goStraight(5)
    turnLeft()
    goStraight(7)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(7)
    turnRight()
    goStraight(2)
    turnBack()
    const ownItems = respondOwnItems()
    stop(ownItems.length - 1)
}
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