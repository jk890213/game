let totalRound = 0

init()
fromLeftTopPedalToLeftBottomPedal()
fromLeftBottomPedalToReadyGetCoins()
getLeftCoinsToTopOutputer()
fromTopOutputerToBottomPedal()
fromBottomPedalToTopPedal()
fromTopPedalToGetCoins()
fromLeftCoinsAreaToMiddleOutputer()
fromMiddleOutputerToLeftBottomPedal()
fromBottomPedalToTopPedal()
getBorderCoinsToTopOupter()
fromTopOutputerToBottomPedal()
stop(11)

while (true) {
    fromBottomPedalToTopPedal()
    fromTopPedalToGetCoins()
    fromLeftCoinsAreaToMiddleOutputer()
    fromMiddleOutputerToLeftBottomPedal()
    fromBottomPedalToTopPedal()
    getBorderCoinsToTopOupter()
    fromTopOutputerToBottomPedal()
    stop(11)
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

function getLeftCoinsToTopOutputer() {
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
}

function fromLeftCoinsAreaToMiddleOutputer() {
    turnRight()
    goStraight(2)
    stop(4)
}

function fromCoinsAreaToTopOutputer() {
    goStraight(1)
    turnRight()
    goStraight(2)
    stop(4)
}

function fromMiddleOutputerToLeftBottomPedal() {
    turnRight()
    goStraight(4)
    turnRight()
    goStraight(3)
}

function getBorderCoinsToTopOupter() {
    goStraight(11)
    turnRight()
    goStraight(6)
    turnRight()
    goStraight(1)
    turnRight()
    goStraight(1)
    turnLeft()
    goStraight(4)
    turnLeft()
    goStraight(1)
    stop(5)
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
// ThrowItem(int itemIndex): ???????????????????????????????????????
// SyncWorkers(): ?????????????????????????????? true????????? false