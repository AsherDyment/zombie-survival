namespace sprites {
    /**
     * Sets get the sprite's tile X position. Assuming 16x16 tile
     */
    export function getTileX(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.x / 16;
    }

    /**
     * Sets get the sprite's tile Y position. Assuming 16x16 tile
     */
    export function getTileY(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.y / 16;
    }
}


controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let oldLadyTileX = sprites.getTileX(oldLady);
    if(oldLady.image == oldLadyImgClone){
        oldLadyTileX--
    } else {
        oldLadyTileX++
    }

    let l = tiles.getTileLocation(oldLadyTileX, sprites.getTileY(oldLady))
    tiles.setTileAt(l, myTiles.tile2)
    tiles.setWallAt(l, true)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImgClone)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImg)
})

let oldLadyImg = img`
    . . . . . . f f f f f f . . . .
    . . . . f f e e e e f 2 f . . .
    . . . f f e e e e f 2 2 2 f . .
    . . . f e e e f f e e e e f . .
    . . . f f f f e e 2 2 2 2 e f .
    . . . f e 2 2 2 f f f f e 2 f .
    . . f f f f f f f e e e f f f .
    . . f f e 4 4 e b f 4 4 e e f .
    . . f e e 4 d 4 1 f d d e f . .
    . . . f e e e 4 d d d d f . . .
    . . . . f f e e 4 4 4 e f . . .
    . . . . . 4 d d e 2 2 2 f . . .
    . . . . . e d d e 2 2 2 f . . .
    . . . . . f e e f 4 5 5 f . . .
    . . . . . . f f f f f f . . . .
    . . . . . . . f f f . . . . . .
`
let oldLadyImgClone = oldLadyImg.clone()
oldLadyImgClone.flipX()
let oldLady = sprites.create(oldLadyImg, SpriteKind.Player)
controller.moveSprite(oldLady)
scene.cameraFollowSprite(oldLady)