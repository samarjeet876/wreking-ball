const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var ball,rope ;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);

    
    box7= new Box(900,320,70,70);
    box8 = new Box(900,320,70,70);
    box9 = new Box(900,320,70,70);
    box10 = new Box(900,320,70,70);
    box11= new Box(900,320,70,70);
    box12= new Box(900,320,70,70);
    box13= new Box(900,320,70,70);
    box23= new Box(900,320,70,70);

    box14 = new Box(800,340,70,40)
    box15= new Box(800,340,70,40)
    box16= new Box(800,340,70,40)
    box17= new Box(800,340,70,40)
    box28= new Box(800,340,70,40)
    box19= new Box(800,340,70,40)
    box20= new Box(800,340,70,40)
    box21 = new Box(800,340,70,40)
    box22 = new Box(800,340,70,40)

    ball = new Ball(200,200,80,80);
    
   rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    ball.display();
    box1.display();
    box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box28.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
    rope.display();
    ground.display();
    
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}