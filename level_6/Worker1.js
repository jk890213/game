let totalRound = 0

init()
getCoinToDiamondOutputer()
fromOutputerToGetCoinThenToOutputer()

while (true) {
    fromOutputerToPedal()
    getCoinToDiamondOutputer()
}


function init() {
    turnRight()
    goStraight(3)
    turnRight()
    goStraight(5)
    turnBack()
}

function getCoinToDiamondOutputer() {
    goStraight(7)
    turnBack()
    goStraight(2)
    turnRight()
    goStraight(5)
    stop(4)
    turnBack()
}

function fromOutputerToGetCoinThenToOutputer() {
    goStraight(5)
    turnRight()
    goStraight(2)
    turnBack()
    goStraight(4)
    turnBack()
    goStraight(2)
    turnRight()
    goStraight(5)
    stop(3)
    turnBack()
}

function fromOutputerToPedal() {
    goStraight(5)
    turnRight()
    goStraight(5)
    turnBack()
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
        totalRound = 0
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