let center = document.createElement('center');
let curr_pos = null;

const clear_board = () => {
    if (curr_pos) {
        document.getElementById(curr_pos).style["background-color"] = "";
        let row = (curr_pos - curr_pos % 8) / 8;
        let col = curr_pos % 8;
        if (row + 1 < 8 && col + 2 < 8) document.getElementById(8 * (row + 1) + col + 2).style["background-color"] = "";
        if (row - 1 >= 0 && col + 2 < 8) document.getElementById(8 * (row - 1) + col + 2).style["background-color"] = "";
        if (row - 2 >= 0 && col + 1 < 8) document.getElementById(8 * (row - 2) + col + 1).style["background-color"] = "";
        if (row - 2 >= 0 && col - 1 >= 0) document.getElementById(8 * (row - 2) + col - 1).style["background-color"] = "";

        if (row + 2 < 8 && col + 1 < 8) document.getElementById(8 * (row + 2) + col + 1).style["background-color"] = "";
        if (row + 2 < 8 && col - 1 >= 0) document.getElementById(8 * (row + 2) + col - 1).style["background-color"] = "";
        if (row + 1 < 8 && col - 2 >= 0) document.getElementById(8 * (row + 1) + col - 2).style["background-color"] = "";
        if (row - 1 >= 0 && col - 2 >= 0) document.getElementById(8 * (row - 1) + col - 2).style["background-color"] = "";
    }
};
const set_board = (blockid) => {

    let row = (blockid - blockid % 8) / 8;
    let col = blockid % 8;
    curr_pos = blockid;
    if (row + 1 < 8 && col + 2 < 8) document.getElementById(8 * (row + 1) + col + 2).style["background-color"] = "blue";
    if (row - 1 >= 0 && col + 2 < 8) document.getElementById(8 * (row - 1) + col + 2).style["background-color"] = "blue";
    if (row - 2 >= 0 && col + 1 < 8) document.getElementById(8 * (row - 2) + col + 1).style["background-color"] = "blue";
    if (row - 2 >= 0 && col - 1 >= 0) document.getElementById(8 * (row - 2) + col - 1).style["background-color"] = "blue";

    if (row + 2 < 8 && col + 1 < 8) document.getElementById(8 * (row + 2) + col + 1).style["background-color"] = "blue";
    if (row + 2 < 8 && col - 1 >= 0) document.getElementById(8 * (row + 2) + col - 1).style["background-color"] = "blue";
    if (row + 1 < 8 && col - 2 >= 0) document.getElementById(8 * (row + 1) + col - 2).style["background-color"] = "blue";
    if (row - 1 >= 0 && col - 2 >= 0) document.getElementById(8 * (row - 1) + col - 2).style["background-color"] = "blue";
};

let clicked = (ele) => {
    ele.srcElement.style["background-color"] = "red";
    let blockid = Number(ele.srcElement.id);
    clear_board();
    set_board(blockid);
};

let ChessTable = document.createElement('table');
let x = 0;
for (let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        let td = document.createElement('td');
        td.onclick = clicked;
        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'cell whitecell');
            td.setAttribute('id', x++);
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'cell blackcell');
            td.setAttribute('id', x++);
            tr.appendChild(td);
        }
    }

    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '270px');
document.body.appendChild(center);