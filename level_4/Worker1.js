init()

while (true) {
    goStraight(7)
    turnRight()
    goStraight(2)
    turnBack()
    goStraight(5)
    turnLeft()
    goStraight(8)
    stop(6)
    turnLeft()
    goStraight(3)
    turnLeft()
    goStraight(1)
}


function init() {
    turnBack()
    goStraight(3)
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
