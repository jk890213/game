let n = 0

TurnLeft()
TurnLeft()

while (n < 6) {
    for (let i = 0; i < 8; i++) {
        MoveForward()
    }
    TurnLeft()
    for (let i = 0; i < 3; i++) {
        MoveForward()
    }
    TurnLeft()
    for (let i = 0; i < 11; i++) {
        MoveForward()
    }
    TurnLeft()
    for (let i = 0; i < 4; i++) {
        TurnLeft()
    }
    for (let i = 0; i < 3; i++) {
        MoveForward()
    }

    TurnLeft()
    n++
}

function goStraight(step) {
    for (let i = 0; i < step; i++) {
        MoveForward()
    }
}

function stop() {
    for (let i = 0; i < 4; i++) {
        TurnLeft()
    }
}
