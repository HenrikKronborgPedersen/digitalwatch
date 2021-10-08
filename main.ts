let second = 0
let minute = 0
let hour = 0
let seconds = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 . . 1 1 1 1 . . 1 1 1 . 
    1 1 . . . . 1 . . . . 1 . . . 1 
    1 1 . . . . 1 . . . . 1 . . . . 
    . 1 1 1 1 . 1 1 1 . . 1 . . . . 
    . . . . 1 . 1 . . . . 1 . . . . 
    . . . . 1 . 1 . . . . 1 . . . 1 
    . 1 1 1 . . 1 1 1 1 . . 1 1 1 . 
    `, SpriteKind.Food)
seconds.setPosition(99, 56)
seconds.sayText(second)
let minutes = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . 1 . 1 . . 1 . . . 1 . 
    1 1 . . 1 1 . 1 . . 1 1 . . 1 . 
    1 . 1 1 . 1 . 1 . . 1 . 1 . 1 . 
    1 . . . . 1 . 1 . . 1 . 1 . 1 . 
    1 . . . . 1 . 1 . . 1 . 1 . 1 . 
    1 . . . . 1 . 1 . . 1 . . 1 1 . 
    1 . . . . 1 . 1 . . 1 . . . 1 . 
    `, SpriteKind.Food)
minutes.setPosition(73, 56)
minutes.sayText(minute)
let hours = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . 1 . 1 1 1 . . . 1 1 1 . . 
    1 . . 1 . 1 . . 1 . 1 . . . . . 
    1 . . 1 . 1 . . 1 . 1 . . . . . 
    1 1 1 1 . 1 1 1 . . 1 1 1 1 . . 
    1 . . 1 . 1 1 1 . . . . . 1 . . 
    1 . . 1 . 1 . 1 1 . 1 . . 1 . . 
    1 . . 1 . 1 . . 1 . . 1 1 1 . . 
    `, SpriteKind.Food)
hours.setPosition(45, 56)
hours.sayText(hour)
while (true) {
    for (let index = 0; index <= 23; index++) {
        for (let index = 0; index <= 59; index++) {
            for (let index = 0; index <= 59; index++) {
                hours.sayText(hour)
                minutes.sayText(minute)
                seconds.sayText(second)
                pause(1000)
                second += 1
            }
            minute += 1
            second = 0
        }
        hour += 1
        minute = 0
    }
    hour = 0
}
