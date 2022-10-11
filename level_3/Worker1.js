turnLeft()
goStraight(2)
turnLeft()
goStraight(4)
turnLeft()
goStraight(4)
turnRight()
goStraight(2)
turnRight()
goStraight(9)




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

// Command in this game:
// MoveForward()
// TurnRight()
// TurnLeft()
