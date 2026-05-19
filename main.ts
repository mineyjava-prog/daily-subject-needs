input.onPinPressed(TouchPin.P0, function () {
    selected_subject = timetable[Day_number][0]
    showEquipment(selected_subject)
})

//This is a line of text... Do you like it?

function List_da_subjects () {
    if (Day == "Mon") {
        basic.showString("1:Eng 2:Math 3:HPE 4:Eng", 75)
    } else if (Day == "Tue") {
        basic.showString("1:Art 2:Eng 3:Math 4:HPE", 75)
    } else if (Day == "Wed") {
        basic.showString("1:HPE 2:Art 3:Eng 4:Math", 75)
    } else if (Day == "Thu") {
        basic.showString("1:Math 2:HPE 3:Art 4:Eng", 75)
    } else if (Day == "Fri") {
        basic.showString("1:HPE 2:Math 3:Eng 4:Art", 75)
    }
}
function Begin () {
    timetable = [
    [
    "English",
    "Math",
    "HPE",
    "English"
    ],
    [
    "Art",
    "English",
    "Math",
    "HPE"
    ],
    [
    "HPE",
    "Art",
    "English",
    "Math"
    ],
    [
    "Math",
    "HPE",
    "Art",
    "English"
    ],
    [
    "HPE",
    "Math",
    "English",
    "Art"
    ]
    ]
    Days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"
    ]
    Day = Days[Day_number]
    basic.showString(Day, 60)
}
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
    basic.showString(Day, 60)
}
input.onButtonPressed(Button.A, function () {
    Move_forward_in_time()
})
input.onPinPressed(TouchPin.P2, function () {
    selected_subject3 = timetable[Day_number][2]
    showEquipment(selected_subject3)
})
input.onButtonPressed(Button.AB, function () {
    selected_subject4 = timetable[Day_number][3]
    showEquipment(selected_subject4)
})
input.onButtonPressed(Button.B, function () {
    List_da_subjects()
})
input.onPinPressed(TouchPin.P1, function () {
    selected_subject2 = timetable[Day_number][1]
    showEquipment(selected_subject2)
})
function Move_forward_in_time () {
    Day_number += 1
    if (Day_number >= Days.length) {
        Day_number = 0
    }
    Day = Days[Day_number]
    basic.showString(Day, 70)
}
let selected_subject2 = ""
let selected_subject4 = ""
let selected_subject3 = ""
let Days: string[] = []
let Day_number = 0
let timetable: string[][] = []
let selected_subject = ""
let Day = ""
Begin()
control.inBackground(function () {
    music.play(music.stringPlayable("C5 C C5 C B A B D ", 400), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C D C5 D C D C5 D ", 200), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 2000), music.PlaybackMode.InBackground)
})
