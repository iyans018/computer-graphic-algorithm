/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persgaris;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JFrame;
import javax.swing.JPanel;

/**
 *
 * @author iyans018
 */
public class PersGaris extends JPanel {
    
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D gd = (Graphics2D) g;
        
        int x1 = 50, x2 = 200, y1 = 50, y2 = 200, x = x1, y = y1;
        double m = (y2 - y1) / (x2 - x1);
        double b = y1 - (m * x1);
        double h = 0;
        
        while (x <= x2) {
            h = (m * x) + b;
            y = (int) h;
            g.drawLine(x, y, x, y);
            x++;
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        PersGaris g = new PersGaris();
        JFrame jf = new JFrame("Algoritma Dasar Persamaan Garis");
        jf.add(g);
        jf.setSize(600, 600);
        jf.setLocationRelativeTo(null);
        jf.setVisible(true);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
}
