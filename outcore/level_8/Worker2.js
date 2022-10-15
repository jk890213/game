let totalRound = 0

init()
produceRedCoinAndEarnCoins()
produceRedCoinToAnotherWorkerAndEarnCoin()

fromCollectorToReadyGetCoins()
getCoinsToPedal()

while (true) {
    stop(10)
}
function init() {
    goStraight(1)
    turnRight()
    goStraight(1)
}

function produceRedCoinAndEarnCoins() {
    getCoinsToPedal()
    fromPedalToBottomOutputer()
    fromBottomOutputerToRightPedal()
    fromRightPedalToGetBorderCoins()
    fromCoinBorderToCollector()
}

function getCoinsToPedal() {
    goStraight(5)
    turnRight()
    goStraight(2)
    turnRight()
    goStraight(4)
    turnLeft()
    goStraight(2)
    turnLeft()
    goStraight(5)
}

function fromPedalToBottomOutputer() {
    goStraight(8)
    turnRight()
    goStraight(2)
    turnBack()
    stop(3)
}

function fromBottomOutputerToRightPedal() {
    goStraight(2)
    turnLeft()
    goStraight(8)
    turnLeft()
}

function fromRightPedalToGetBorderCoins() {
    goStraight(3)
    turnRight()
    goStraight(10)
}

function fromCoinBorderToCollector() {
    goStraight(1)
    turnRight()
    goStraight(6)
    inputAllCoinToCollector()
}


function produceRedCoinToAnotherWorkerAndEarnCoin() {
    fromCollectorToReadyGetCoins()
    getCoinsToPedal()
    fromPedalToBottomOutputer()
    // 126
    fromBottomOutputerToGetRedCoins()
    fromRedCoinsToAnotherWorker()
    fromRedCoinBorderToCollector()
}

function fromCollectorToReadyGetCoins() {
    goStraight(1)
    turnRight()
    goStraight(5)
}

function fromBottomOutputerToGetRedCoins() {
    goStraight(1)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(3)
    turnRight()
}

function fromRedCoinsToAnotherWorker() {
    goStraight(1)
    turnRight()
    goStraight(1)
    turnLeft()
    goStraight(4)
    turnLeft()
    throwRedCoinsToAlongBorder()
}

function throwRedCoinsToAlongBorder() {
    throwItem(1)
    for (let i = 0; i < 2; i++) {
        turnRight()
        goStraight(1)
        turnLeft()
        throwItem(1)
    }
}

function fromRedCoinBorderToCollector(params) {
    turnRight()
    goStraight(9)
    turnRight()
    goStraight(6)
    inputAllCoinToCollector()
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

function inputAllCoinToCollector() {
    const ownItems = respondOwnItems()
    stop(ownItems.length - 1)
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