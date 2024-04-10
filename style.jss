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
    height = 200px;
    width = 200px;
    backgroundColor = pink;
    display = flex;
}
#id7 {
    borderColor = (#id6)->borderColor;
    borderWidth = (#id6)->borderWidth;
    borderStyle = (#id6)->borderStyle;
    height = 200px;
    width = (#id6)->width;
    backgroundColor = purple;
    marginTop = 10px;
}