status = "";
objects= [];
results = [];

function preload()
{
    img = loadImage('bed.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded()
{
    console.log("Model loaded");
    status = true;
    objectDetecter.detect(img , gotResults);
}
function gotResults()
{
    if (error) 
    {
        console.error(error);
    }
    console.log(gotResults);
    objects = results;
}

function back() {
    window.location.href = 'hi!.html';
}

function draw()
    {
        if(status != "")
        {
           for(i=0;i<objects.length;i++)
           {
            percent = floor(objects[i].confidence * 100);
            text(objects[i] + "" + percent + "%", objects[i].x + 15,  objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);    
               }
        }
    }
