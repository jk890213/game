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
    }
}

function turnRight() {
    TurnRight()
}

function turnLeft() {
    TurnLeft()
}

function turnBack() {
    for (let i = 0; i < 2; i++) {
        TurnLeft()
    }
}

function stop(round) {
    for (let i = 0; i < round; i++) {
        DoNothing()
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