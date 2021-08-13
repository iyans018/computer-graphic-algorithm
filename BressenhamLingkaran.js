function bressenhamCircle(Xc, Yc, R) {
    console.log(`Diketahui :`);
    console.log(`Titik pusat : (${Xc}, ${Yc})`);
    console.log(`Jari-jari : ${R}`);
    console.log('Maka titik-titik dijital yang membentuk suatu lingkaran adalah sebagai berikut.');

    let X = 0, Y = R;
    let P = 3-2*R;
    do {
        if(P < 0) {
            P = P + (4*X) + 6;
        } else {
            P = P + 4*(X-Y) + 10;
            Y = Y - 1;
        }
        X = X + 1;
        console.log(`Iterasi ke-${X}`);
        console.log(`Titik selanjutnya: (${X},${Y})`);
        console.log("Dengan algoritma simetris delapan titik, maka diperoleh titik-titik berikut:");
        console.log(`(${X},${Y}),(${X-(X+X)},${Y}),(${X},${Y-(Y+Y)}),(${X-(X+X)},${Y-(Y+Y)}),(${Y},${X}),(${Y-(Y+Y)},${X}),(${Y},${X-(X+X)}),(${Y-(Y+Y)},${X-(X+X)})`);
        console.log(`Gerakan setiap posisi piksel (x,y) pada garis lingkaran dengan titik pusat (${Xc},${Yc}) diperoleh titik-titik berikut:`);
        console.log(`(${Xc+X},${Yc+Y}), (${Xc-X}, ${Yc+Y}), (${X+Xc}, ${Yc-Y}), (${Xc-X}, ${Yc-Y}), (${Xc+Y}, ${Yc+X}), (${Xc-Y}, ${Yc+X}), (${Xc+Y}, ${Yc-X}), (${Xc-Y}, ${Yc-X})`);
        console.log("----------------------------------------------------------------------------------------------------------------");
    } while(X < Y);
}

bressenhamCircle(0, 0, 6);