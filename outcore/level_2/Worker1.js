goStraight(6)
turnRight()
goStraight(6)
turnRight()
goStraight(4)

function goStraight(step) {
    for (let i = 0; i < step; i++) {
        MoveForward()
    }
}

function turnRight() {
    TurnRight()
}

// Command in this game:
// MoveForward()
// TurnRight()