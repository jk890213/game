init()
getCoinToCollector()
fromCollectorToDiamondOutputer()
fromOutputerToPedal()

while (true) {   
    getCoinToDiamondOutputer()
    fromOutputerToGetDiamond()
    GetDiamondToCollector()
    fromCollectorToPedal()
}


function init() {
    goStraight(4)
    turnLeft()
    goStraight(1)
    turnBack()
}

function getCoinToCollector() {
    goStraight(4)
    turnRight()
    goStraight(5)
    turnLeft()
    goStraight(1)
    turnRight()
    goStraight(5)
    turnLeft()
    goStraight(2)
    turnBack()
    goStraight(7)
    turnRight()
    goStraight(4)
    turnLeft()
}

function getCoinToDiamondOutputer() {
    goStraight(4)
    turnRight()
    goStraight(5)
    turnLeft()
    goStraight(1)
    turnRight()
    goStraight(5)
    turnLeft()
    goStraight(2)
    turnBack()
    goStraight(7)
    turnRight()
    goStraight(2)
    turnLeft()
    goStraight(5)
    turnRight()
    goStraight(7)
    turnRight()
    goStraight(1)
    turnLeft()
    goStraight(1)
    stop(5)
}

function fromCollectorToDiamondOutputer() {
    goStraight(3)
    turnLeft()
    goStraight(2)
    turnRight()
    goStraight(2)
    turnRight()
    goStraight(7)
    turnRight()
    goStraight(1)
    turnLeft()
    goStraight(1)
    stop(4)
    turnRight()
}

function fromOutputerToPedal() {
    goStraight(4)
}

function fromOutputerToGetDiamond() {
    goStraight(1)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(1)
}

function GetDiamondToCollector() {
    goStraight(1)
    turnLeft()
    goStraight(7)
    turnRight()
    goStraight(5)
    turnBack()
}

function fromCollectorToPedal() {
    goStraight(6)
    turnRight()
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

// Command in this game:
// MoveForward()
// TurnRight()
// TurnLeft()
// DoNothing()
