let greenland = document.getElementById("greenland")
let denmark = document.getElementById("denmark")
let usa = document.getElementById("usa")


let xmlns = "http://www.w3.org/2000/svg";
let svg;
let height;







let width = 300; // Change size of all flags






function aspectRatio(w, h) {
  //(height / width) x new width = new height
  let newHeight = (h / w) * width;
  return newHeight;
}



function createSVG(w, h) {
  svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "width", w);
    svg.setAttributeNS(null, "height", h);
  return svg;
};




function createGL() {

  // AspectRatio
  let glAspectH = 12;
  let glAspectW = 18;

  height = aspectRatio(glAspectW, glAspectH);

  createSVG(width, height)


  let middle = height / 2;

  let dkRectH = 3 / glAspectW * width;
  let glCircle = (width * 1.166666666666667) - width ;

  glCirclePos = 3 / glAspectW * width;

  let glCircleW = 8 / glAspectW * width;

  console.log(glCircle);
  console.log(glCircleW);



  let rect = document.createElementNS(xmlns, "rect");
    rect.setAttributeNS(null, "x", 0);
    rect.setAttributeNS(null, "y", 0);
    rect.setAttributeNS(null, "height", "50%");
    rect.setAttributeNS(null, "width", "100%");
    rect.setAttributeNS(null, "fill", "white");


  let rect2 = document.createElementNS(xmlns, "rect");
    rect2.setAttributeNS(null, "x", 0);
    rect2.setAttributeNS(null, "y", middle);
    rect2.setAttributeNS(null, "height", "50%");
    rect2.setAttributeNS(null, "width", "100%");
    rect2.setAttributeNS(null, "fill", "#d00c33");



  let circle = document.createElementNS(xmlns, "path");
    circle.setAttributeNS(null, "d", `M${glCirclePos},${middle} a1,1 0 0,0 ${glCircleW},0`);
    circle.setAttributeNS(null, "fill", "white");

    let circle2 = document.createElementNS(xmlns, "path");
      circle2.setAttributeNS(null, "d", `M${glCirclePos + glCircleW},${middle} a1,1 0 0,0 ${-glCircleW},0`);
      circle2.setAttributeNS(null, "fill", "#d00c33");


  svg.appendChild(rect)

  svg.appendChild(rect2)

  svg.appendChild(circle)
  svg.appendChild(circle2)
  greenland.appendChild(svg);


}

createGL();





function createDK() {
  // AspectRatio
  let dkAspectH = 28;
  let dkAspectW = 37;

  height = aspectRatio(dkAspectW, dkAspectH);

  createSVG(width, height)



  let dkRectH = 12 / dkAspectW * width;

  let dkRectBigW = 21 / dkAspectW * width;



  console.log(dkRectH)
  console.log(dkRectBigW)


  let rect = document.createElementNS(xmlns, "rect");
    rect.setAttributeNS(null, "x", 0);
    rect.setAttributeNS(null, "y", 0);
    rect.setAttributeNS(null, "height", "100%");
    rect.setAttributeNS(null, "width", "100%");
    rect.setAttributeNS(null, "fill", "white");

  let rect2 = document.createElementNS(xmlns, "rect");
    rect2.setAttributeNS(null, "x", 0);
    rect2.setAttributeNS(null, "y", 0);
    rect2.setAttributeNS(null, "height", dkRectH);
    rect2.setAttributeNS(null, "width", dkRectH);
    rect2.setAttributeNS(null, "fill", "#C60C30");

  let rect3 = document.createElementNS(xmlns, "rect");
    rect3.setAttributeNS(null, "x", 0);
    rect3.setAttributeNS(null, "y", height - dkRectH);
    rect3.setAttributeNS(null, "height", dkRectH);
    rect3.setAttributeNS(null, "width", dkRectH);
    rect3.setAttributeNS(null, "fill", "#C60C30");


  let rect4 = document.createElementNS(xmlns, "rect");
    rect4.setAttributeNS(null, "x", width - dkRectBigW);
    rect4.setAttributeNS(null, "y", 0);
    rect4.setAttributeNS(null, "height", dkRectH);
    rect4.setAttributeNS(null, "width", dkRectBigW);
    rect4.setAttributeNS(null, "fill", "#C60C30");


  let rect5 = document.createElementNS(xmlns, "rect");
    rect5.setAttributeNS(null, "x", width - dkRectBigW);
    rect5.setAttributeNS(null, "y", width - dkRectBigW);
    rect5.setAttributeNS(null, "height", dkRectH);
    rect5.setAttributeNS(null, "width", dkRectBigW);
    rect5.setAttributeNS(null, "fill", "#C60C30");



  svg.appendChild(rect)
  svg.appendChild(rect2)
  svg.appendChild(rect3)
  svg.appendChild(rect4)
  svg.appendChild(rect5)
  denmark.appendChild(svg);

}


createDK();




function createUS() {
  // AspectRatio
  let usAspectH = 10;
  let usAspectW = 19;

  height = aspectRatio(usAspectW, usAspectH);

  createSVG(width, height)

  let rect;
  let usStipes = (height / 13);
  let usBlueRect = 7.6 / usAspectW * width;


  //STRIPES
  for (var i = 0; i < 13; i++) {
    rect = document.createElementNS(xmlns, "rect");
      rect.setAttributeNS(null, "x", 0 );
      rect.setAttributeNS(null, "y", i * usStipes);
      rect.setAttributeNS(null, "height", usStipes);
      rect.setAttributeNS(null, "width", "100%");

      if (i % 2) {
        rect.setAttributeNS(null, "fill", "white");
      } else {
        rect.setAttributeNS(null, "fill", "#B22234");
      }


      svg.appendChild(rect);

  }


  // BLUE RECT
  let rect2 = document.createElementNS(xmlns, "rect");
    rect2.setAttributeNS(null, "x", 0 );
    rect2.setAttributeNS(null, "y", 0);
    rect2.setAttributeNS(null, "height", usStipes * 7);
    rect2.setAttributeNS(null, "width", usBlueRect);
    rect2.setAttributeNS(null, "fill", "#3C3B6E");

  svg.appendChild(rect2);


  // STARS
  let starPoints = [100,10,40,198,190,78,10,78,160,198]
  let newStarWidth = 0.616 / usAspectW * width;

  let star;
  for (var i = 0; i < 1; i++) {
    star = document.createElementNS(xmlns, "polygon");
      star.setAttributeNS(null, "points", `${starPoints[0]},${starPoints[1]} ${starPoints[2]},${starPoints[3]} ${starPoints[4]},${starPoints[5]} ${starPoints[6]},${starPoints[7]} ${starPoints[8]},${starPoints[9]}`);
      star.setAttributeNS(null, "fill", "white")
      star.setAttributeNS(null, "transform", `scale(${newStarWidth / 100})`);



    svg.appendChild(star);
  };



  //svg.appendChild(ci);
  usa.appendChild(svg);
}



createUS();
