// Algoritma Dasar
function algoritmaDasar(x1, y1, x2, y2) {
    console.log('Algoritma Dasar');
    let dy = y2-y1;
    let dx = x2-x1;
    m = dy/dx;
    c = y1-(m*x1);
    for(let x = x1; x <= x2; x++) {
        y = (m*x) + c;
        console.log(Math.round(x),Math.round(y));
    }
}

// Algorithma DDA
function digitalDifrential(x1, y1, x2, y2) {
    console.log('Algoritma DDA');
    let dx = x2-x1;
    let dy = y2-y1;
    let x = x1;
    let y = y1;
    let step = 0;
    if (dx > dy) {
        step = dx
    } else {
        step = dy
    }
    let x_inc = dx / step;
    let y_inc = dy / step;
    console.log(Math.round(x), Math.round(y));
    for(let i = 0; i < step; i++) {
        x += x_inc;
        y += y_inc;
        console.log(Math.round(x), Math.round(y));
    }
}

// Algoritma Bressenham
function bressenham(x1, y1, x2, y2) {
    console.log('Algoritma Bressenham');
    console.log('titik koordinat : ', x1, y1, x2, y2);
    let dx = Math.abs(x2-x1);
    let dy = Math.abs(y2-y1);
    let duaDy = 2 * dy;
    let duaDyDx = 2 * (dy-dx);
    let p = duaDy - dx;

    if (x1 > x2) {
        x = x2;
        y = y2;
        xEnd = x1;
    } else {
        x = x1;
        y = y1;
        xEnd = x2;
    }
    console.log(x, y);
    while(x < xEnd) {
        x++;
        if (p < 0) {
            p += duaDy;
        } else {
            y++;
            p += duaDyDx;
        }
        console.log(x, y)
    }
}

bressenham(2,1,8,5);


// console.log('a. (-5,5) dan (1,2)');
// algoritmaDasar(-5,5,1,2);
// digitalDifrential(-5,5,1,2);
// bressenham(-5,5,1,2);
// console.log();
// console.log('b. (4,3) dan (8,-2)');
// algoritmaDasar(4,3,8,-2);
// digitalDifrential(4,3,8,-2);
// bressenham(4,3,8,-2);
// console.log();
// console.log('c. (2,3) dan (5,3)');
// algoritmaDasar(2,3,5,3);
// digitalDifrential(2,3,5,3);
// bressenham(2,3,5,3);
// console.log();
// console.log('d. (2,3) dan (2,5)');
// algoritmaDasar(2,3,2,5);
// digitalDifrential(2,3,2,5);
// bressenham(2,3,2,5);
// console.log();
// console.log('e. (6,4) dan (2,1)');
// algoritmaDasar(6,4,2,1);
// digitalDifrential(6,4,2,1);
// bressenham(6,4,2,1);