//  worker 1
//  指令:
//  1. moveTo: 移動至目標座標

const directionType = {
    t: 3,
    r: 2,
    d: 1,
    l: 0,
}

const obstructions = []

let workerState = {
    currentPoint: {
        x: 0,
        y: 0
    },
    direction: directionType.d
}

// 仿類別 座標點
function Point(x, y) {
    return { x, y }
}

// 移動
function moveTo(destinationPoint) {
    // destinationPoint: { x: number, y: number }
    const xAxisStep = destinationPoint.x - workerState.currentPoint.x
    const yAxisStep = destinationPoint.y - workerState.currentPoint.y
    if (xAxisStep > 0 && workerState.direction !== directionType.l) {
        moveHorizontally(xAxisStep)
        moveVertically(yAxisStep)
    } else {
        moveVertically(yAxisStep)
        moveHorizontally(xAxisStep)
    }
    changeWorkerCurrentPoint(destinationPoint)
}

function changeWorkerCurrentPoint(point) {
    workerState.currentPoint = point
}

function moveHorizontally(xAxisStep) {
    // xAxisStep: number
    if (xAxisStep > 0) {
        toFaceDirection(directionType.r)
    } else {
        toFaceDirection(directionType.l)
    }
    goStraight(xAxisStep)
}

function moveVertically(yAxisStep) {
    // yAxisStep: number
    if (yAxisStep > 0) {
        toFaceDirection(directionType.t)
    } else {
        toFaceDirection(directionType.d)
    }
    goStraight(yAxisStep)
}

function goStraight(step) {
    for (let i = 0; i < step; i++) {
        MoveForward()
    }
}

// 方向
function toFaceDirection(directionTypeValue) {
    const workertoFaceDirection = workerState.direction
    const turnValue = directionTypeValue - workertoFaceDirection

    turn(turnValue)
    changeWorkerDirectionState(directionTypeValue)
}

function turn(turnValue) {
    if (turnValue === 1 || turnValue === -3) {
        TurnLeft()
    } else if (turnValue === 2 || turnValue === -2) {
        turnBack()
    } else if (turnValue === 3 || turnValue === -1) {
        TurnRight()
    }
}

function turnBack() {
    for (let i = 0; i < 2; i++) {
        TurnLeft()
    }
}

function changeWorkerDirectionState(directionTypeValue) {
    workerState.direction = directionTypeValue
}

function stop(round) {
    for (let i = 0; i < round; i++) {
        DoNothing()
    }
}

function getItems() {
    GetWorkerInventoryItems()
}

function log(msg) {
    ConsoleLog(msg)
}

