let g;
let a;
let res = 2;
let pad = res;
let i = 0;

let sep_slider1;
let seek_slider2;
let des_sep_slider3;

let agents = [];
let n_agents = 800;

function setup() {
  createCanvas(400, 400);
  g = new Grid(res, width, height, pad);

  sep_slider1 = createSlider(0.1, 8, 5);
  seek_slider2 = createSlider(0.01, 5, 3);
  des_sep_slider3 = createSlider(0.01, 80, 15);

  for (let i = 0; i < n_agents; i++) {
    agents.push(
      new Agent(
          random(width), 
          random(height),
          g
        )
      );
  }
}

function draw() {
  background(15);
  
  let mx = mouseX;
  let my = mouseY;
  // if (mx < width - res && mx > res && my < height - res && my > res) {
  //   g.display_cell_from_coords(
  //     mouseX, mouseY, "red", 4.
  //   );
  // }
  

  for (let a of agents) {
    a.applyBehaviors(agents);
    a.update();
    // a.borders();
    // a.borders_within();
    a.convert_coords_to_grid_cells();
    a.display();
  }

}
