class Grid {
    constructor(res, c_width, c_height, pad) {
        this.res = res;
        this.c_width = c_width;
        this.c_height = c_height;
        this.n_rows = c_width / res - 1;
        this.n_cols = c_height / res - 1;
        this.pad = pad;

        this.grid = new Array(this.n_cols);
            for (let i = 0; i < this.n_cols; i++) {
                this.grid[i] = new Array(this.n_rows);

                for (let j = 0; j < this.n_rows; j++) {
                    let x = i * this.res + this.pad - this.res/2;
                    let y = j * this.res + this.pad - this.res/2;
                    this.grid[i][j] = createVector(x, y);
                }    
            }
        
        console.log("Constructed grid object");
    }

    display_cell_from_coords(coords_x, coords_y, col, scale_f) {

        let x_cell = round(coords_x / this.res);
        let y_cell = round(coords_y / this.res);
        push();
        fill(col);
        noStroke();
        rect(
            this.grid[x_cell][y_cell].x,
            this.grid[x_cell][y_cell].y,
            this.res * scale_f
        );
        pop();
    }

    display_cell(x_cell, y_cell) {
        // console.log(
        //     this.grid[x_cell][y_cell].x,
        //     this.grid[x_cell][y_cell].y,
        // );
        push();
        fill(255,255,255,230);
        noStroke();
        rect(
            this.grid[x_cell][y_cell].x,
            this.grid[x_cell][y_cell].y,
            this.res
        );
        pop();
    }

    display_squares() {
        push();

        let size_f = 1.;
        
        for (let i = 0; i < this.n_cols; i++) {
            for (let j = 0; j < this.n_rows; j++) {
                console.log(i, j);
                // stroke('black');
                // strokeWeight(0.5);
                fill('red');
                rect(
                    this.grid[i][j].x,
                    this.grid[i][j].y,
                    this.res * size_f
                );
            }
        }

        pop();
    }

    display_centers() {
        push();
        
        for (let i = 0; i < this.n_cols; i++) {
            for (let j = 0; j < this.n_rows; j++) {
                console.log(i, j);
                noStroke();
                fill('white');
                ellipse(
                    this.grid[i][j].x,
                    this.grid[i][j].y,
                    5
                );
            }
        }

        pop();
    }

}