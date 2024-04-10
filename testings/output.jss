#div {
    height = 100;
    fontFamily = (#body)->fontFamily;
}
.header {
    backgroundColor = (.btn-test)[3]->color;
}
form {
    if ((#div)->width >= 250px) {
        backgroundColor = :dark->color1;
    } else {
        backgroundColor = :global->color2;
    }
}
form {
    (#otherForm)->all +;

}
form {
    (#otherForm)->width ?;
    (#otherForm)->minHeight;
}
form {
    (#otherForm)->all !;
}
form {
    (#otherForm)->all -;
}
