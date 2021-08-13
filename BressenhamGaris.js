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
  console.log('(Xk+1,Yk+1)');
  while(x < xEnd) {
    x++;
    if (p < 0) {
      p += duaDy;
    } else {
      y++;
      p += duaDyDx;
    }
    console.log(`(${x},${y})`);
  }
}

bressenham(2, 1, 8, 5);