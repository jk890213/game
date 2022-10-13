let totalRound = 0

init()
getCoinToCollector()
fromCollectorToPedal()
fromPedalToGetDiamondThenGoBeforeCoin()

while (true) {
    getCoinToCollector()
    fromCollectorThenGetDiamondtoBeforeCoin()
}


function init() {
    goStraight(5)
    turnRight()
    stop(3)
}

function getCoinToCollector() {
    goStraight(3)
    turnRight()
    goStraight(4)
    turnLeft()
    goStraight(3)
    turnRight()
    goStraight(1)
    const ownItems = respondOwnItems()
    stop(ownItems.length - 1)
}

function fromCollectorToPedal() {
    goStraight(5)
    turnRight()
    goStraight(3)
}

function fromPedalToGetDiamondThenGoBeforeCoin() {
    goStraight(5)
    turnRight()
    goStraight(5)
    stop(3)
    goStraight(5)
    turnRight()
    goStraight(2)
}

function fromCollectorThenGetDiamondtoBeforeCoin() {
    goStraight(1)
    turnRight()
    goStraight(8)
    turnRight()
    goStraight(6)
    turnRight()
    goStraight(2)
}

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

// Command in this game:
// MoveForward()
// TurnRight()
// TurnLeft()
// DoNothing()
// ConsoleLog(string)
// GetWorkerInventoryItems()
// ThrowItem(int itemIndex)
// SyncWorkers()