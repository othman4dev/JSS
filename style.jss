html {
    fontFamily = Montserrat;
}
body {
    backgroundColor= whitesmoke;
    color = black;
}
.header {
    backgroundColor = black;
    color = white;
    display = flex;
    alignItems = center;
    justifyContent = space-between;
    padding = 10px;
    height = 60px;
    marginBottom = 10px;
}
* {
    margin = 0;
    padding = 0;
}
.nav__list {
    display = flex;
    listStyle = none;
    padding = 0;
    gap = 15px;
    paddingInline = 15px;
}
.h11 {
    margin = 0;
    fontWeight = 800;
    marginLeft = 30px;
}
main {
    display = flex;
    alignItems = center;
    justifyContent = center;
    flexDirection = column;
    minHeight = 87vh;
}
a {
    textDecoration = none;
    color = #fff;
}
modal {
    width = 350px;
    display = flex;
    alignItems = center;
    justifyContent = center;
}
div {
    position = relative;
    height = 100%;
    width = 450px;
    display = none;
    padding = 15px;
    backgroundColor = white;
    boxShadow = 0 0 15px 1px #00000020;
}
.id {
    color = #555;
    fontSize = 12px;
    position = absolute;
    top = 10px;
    right = 10px;
}
h2 {
    paddingTop = 10px;
    paddingBottom = 10px;
}
p {
    padding = 15px;
}
button {
    backgroundColor = black;
    color = white;
    padding = 5px 10px;
    cursor = pointer;
    fontSize = 15px;
}
#btnStart {
    backgroundColor = black;
    color = white;
    padding = 10px;
    cursor = pointer;
    fontSize = 17px;
    transition = 0.3s;
}
#btnStart:hover {
    boxShadow = 0 2px 0px 2px #fd0;
    transform = translateY(-2px);
}
function event((#btnStart):click) {
    .modal {
        display = block;
    }
    #btnStart {
        display = none;
    }
}
function event((#btn1):click) {
    .modal {
        display = none;
    }
    .modal2 {
        display = block;
    }
}
function event((#btn2):click) {
    .modal2 {
        display = none;
    }
    .modal3 {
        display = block;
    }
}
function event((#btn3):click) {
    .modal3 {
        display = none;
    }
    .modal4 {
        display = block;
    }
}
function event((#btn4):click) {
    .modal4 {
        display = none;
    }
    .modal5 {
        display = block;
    }
}