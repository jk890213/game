let totalRound = 0

init()
turnOnLeftPedal()
getCoinToOutputer_1()
getCoinAlongBorderToOutputer_2()
fromOutputerToLeftPedal()

while (true) {
    getCoinToOutputer_1()
    fromOutputer_1ToGetRedCoin()
    fromRedCoin_1ToThrowRedCoinThenGetAndPutToOutputer_2()
    fromOutputer_2ToGetRedCoin()
    fromRedCoinToAnotherWorker()
    fromRightBorderToTurnOnLeftPedal()
}

function init() {
    goStraight(6)
    turnLeft()
    goStraight(1)
    turnLeft()
}

function turnOnLeftPedal() {
    goStraight(1)
    turnLeft()
    goStraight(3)
}

function getCoinToOutputer_1() {
    goStraight(2)
    turnRight()
    goStraight(9)
    turnRight()
    goStraight(8)
    turnRight()
    goStraight(2)
    turnLeft()
    goStraight(4)
    turnRight()
    goStraight(4)
    turnRight()
    goStraight(3)
    turnLeft()
    goStraight(1)
    const ownItems = respondOwnItems()
    stop(ownItems.length - 1)
}

function getCoinAlongBorderToOutputer_2() {
    goStraight(4)
    turnRight()
    goStraight(9)
    turnRight()
    goStraight(1)
    turnRight()
    goStraight(10)
    turnLeft()
    stop(4)
}

function fromOutputerToLeftPedal() {
    goStraight(1)
    turnLeft()
    goStraight(8)
}

function fromOutputer_1ToGetRedCoin() {
    goStraight(1)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(1)
    turnRight()
}

function fromRedCoin_1ToThrowRedCoinThenGetAndPutToOutputer_2() {
    goStraight(2)
    turnRight()
    goStraight(4)
    throwItem(1)
    turnRight()
    goStraight(14)
    turnRight()
    goStraight(1)
    turnRight()
    goStraight(10)
    turnLeft()
    stop(4)
}

function fromOutputer_2ToGetRedCoin() {
    goStraight(1)
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(1)
}

function fromRedCoinToAnotherWorker() {
    goStraight(1)
    throwItem(0)
    turnRight()
    stop(11)
}

function fromRightBorderToTurnOnLeftPedal() {
    goStraight(11)
    turnRight()
    goStraight(2)
    turnLeft()
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