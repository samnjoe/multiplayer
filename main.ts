namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile.setKind(SpriteKind.Projectile2)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . 2 1 1 1 1 2 2 . . . . . . . 
        . . 1 1 1 1 1 1 3 3 2 2 . . . . 
        . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
        . . 2 1 1 1 1 3 2 2 . . . . . . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, 0)
    projectile2.setVelocity(-50, 0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -20
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Projectile2, function (sprite, otherSprite) {
    statusbar2.value += -20
    otherSprite.destroy()
})
let projectile2: Sprite = null
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("P1: WASD= MOVE Q= SHOOT ")
game.splash("P2: IJKL= MOVE U= SHOOT")
game.splash("WIN THE GAME BY SHOOTING YOUR OPPONENET 5 TIMES")
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.player2)
let P2Left = 1
let P1Left = 0
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
controller.player2.moveSprite(mySprite2)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setColor(8, 2)
statusbar.attachToSprite(mySprite)
statusbar.max = 100
statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.setColor(2, 8)
statusbar2.attachToSprite(mySprite2)
statusbar2.max = 100
mySprite.setStayInScreen(false)
mySprite2.setStayInScreen(false)
scene.centerCameraAt(20, 20)
