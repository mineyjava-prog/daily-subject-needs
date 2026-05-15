input.onPinPressed(TouchPin.P0, function () {
    if (is_selecting) {
        if (Day == "Mon") {
            showEquipment("English")
        } else if (Day == "Tue") {
            showEquipment("Art")
        } else if (Day == "Wed") {
            showEquipment("HPE")
        } else if (Day == "Thu") {
            showEquipment("Math")
        } else if (Day == "Fri") {
            showEquipment("HPE")
        }
    }
})
function showEquipment (subject: string) {
    if (subject == "English") {
        basic.showString("English: Class book, Novel", 70)
    } else if (subject == "Math") {
        basic.showString("Math: Calculator, Ruler, Math book", 70)
    } else if (subject == "HPE") {
        basic.showString("HPE: Uniform, Shoes, Bottle", 70)
    } else if (subject == "Art") {
        basic.showString("Art: Sketchbook, Pencils", 70)
    }
    is_selecting = false
    basic.showString((Day), 60)
}
input.onButtonPressed(Button.A, function () {
    is_selecting = false
    Day_number += 1
    if (Day_number >= Days.length) {
        Day_number = 0
    }
    Day = Days[Day_number]
    basic.showString((Day), 70)
})
input.onPinPressed(TouchPin.P2, function () {
    if (is_selecting) {
        if (Day == "Mon") {
            showEquipment("HPE")
        } else if (Day == "Tue") {
            showEquipment("Math")
        } else if (Day == "Wed") {
            showEquipment("English")
        } else if (Day == "Thu") {
            showEquipment("Art")
        } else if (Day == "Fri") {
            showEquipment("English")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    is_selecting = true
    if (Day == "Mon") {
        basic.showString("Eng Math HPE", 75)
    } else if (Day == "Tue") {
        basic.showString("Art Eng Math", 75)
    } else if (Day == "Wed") {
        basic.showString("HPE Art Eng", 75)
    } else if (Day == "Thu") {
        basic.showString("Math HPE Art", 75)
    } else if (Day == "Fri") {
        basic.showString("HPE Math Eng", 75)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (is_selecting) {
        if (Day == "Mon") {
            showEquipment("Math")
        } else if (Day == "Tue") {
            showEquipment("English")
        } else if (Day == "Wed") {
            showEquipment("Art")
        } else if (Day == "Thu") {
            showEquipment("HPE")
        } else if (Day == "Fri") {
            showEquipment("Math")
        }
    }
})
let Day = ""
let Days: string[] = []
let Day_number = 0
let is_selecting = false
is_selecting = false
Day_number = 0
Days = [
"Mon",
"Tue",
"Wed",
"Thu",
"Fri"
]
Day = Days[Day_number]
basic.showString((Day), 60)
