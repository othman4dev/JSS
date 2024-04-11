#id1 {
    height = 100px;
    width = 150px;
    backgroundColor = yellow;
}
#id2 {
    height = 100px;
    width = 150px;
    backgroundColor = green;
}
#id3 {
    height = 100px;
    width = 150px;
    backgroundColor = red;
}
#id5 {
    borderRadius = 500px;
    height = 200px;
    width = 200px;
    backgroundColor = blue;
}
#id6 {
    borderColor = black;
    borderWidth = 5px;
    borderStyle = solid;
    height = 250px;
    width = 200px;
    backgroundColor = pink;
    display = flex;
    transition = 2s;
}
#id7 {
    borderColor = (#id6)->borderColor;
    borderWidth = (#id6)->borderWidth;
    borderStyle = (#id6)->borderStyle;
    height = 200px;
    width = (#id6)->height;
    backgroundColor = purple;
    marginTop = 10px;
}
#id6:hover {
    backgroundColor = orange;
    cursor = pointer;
}
#id7:click {
    backgroundColor = white;
    transition = 1s;
}
#id6:click {
    backgroundColor = red;
    width = 100px;
}
function event((#id6):click) {
    #id7 {
        backgroundColor = (#id5)->backgroundColor;
        borderRadius = 200px;
        transition = 1s;
    }
}
#id8 {
    position = absolute;
    backgroundColor = grey;
    zIndex = 2;
    top = 50%;
    left = 50%;
    transform = translate(-50%, -50%);
    display = none;
    height = 500px;
    width = 500px;
}
#id9 {
    backgroundColor = black;
    width = 120px;
    height = 40px;
}
function event((#id9):hover) {
    #id8 {
        display = block;
    }
}
#id8:::#id6 {
    width(2);
}
#id11 {
    backgroundColor = orange;
    width = 100px;
    height = 100px;
    borderColor = black;
    borderWidth = 5px;
    borderStyle = solid;
    opacity = 0.5;
}
#id12 {
    backgroundColor = green;
    width = 100px;
    height = 100px;
    margin = 10px;
}
#id11:hover {
    backgroundColor = brown;
    width = 200px;
    opacity = 0.5;
}
#id11:::#id12 {
    width(2);
    backgroundColor(1);
    opacity(2);
}