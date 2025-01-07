
let canvas = document.getElementById('mycanvas');
let Attribute = {
    color: 'black',
    width: 2,
    type: 'pencil',
};
let coordinate = {
    x:0,
    y:0
};

let drawing = false;

ctx = canvas.getContext('2d');
window.onload = ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}



function pencil(X, Y){
    ctx.lineTo(X, Y);
    ctx.stroke();
}

// function line(X, Y){
//     ctx.beginPath();
//     ctx.moveTo(coordinate.x, coordinate.y);   // drawing in multiple lines
//     ctx.lineTo(X, Y);
//     ctx.stroke();
// }

// function Rect(X, Y){
//     ctx.beginPath();
//     ctx.fillStyle = Attribute.color;
//     ctx.rect(coordinate.x, coordinate.y, X-coordinate.x, Y-coordinate.y);  // drawing multiple rectangle
//     ctx.stroke();
// }

const line = function(){
    canvas.addEventListener('mouseup', (event)=>{
        if(Attribute.type === 'line'){
            ctx.beginPath();
            ctx.moveTo(coordinate.x, coordinate.y);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
        else return;
       
    })
}


const Rect = function (){
    canvas.addEventListener('mouseup', (event) =>{
        if(Attribute.type === 'rect'){
            ctx.beginPath();
            ctx.fillRect = Attribute.color;
            ctx.rect(coordinate.x, coordinate.y, event.offsetX - coordinate.x, event.offsetY - coordinate.y);
            // ctx.fill();
            ctx.stroke();
        }
        else return;
        
    });
}







canvas.addEventListener('mousedown', (event)=>{
    drawing = true;
    coordinate.x = event.offsetX;
    coordinate.y = event.offsetY;

    ctx.beginPath();
    ctx.lineWidth = Attribute.width;
    ctx.strokeStyle = Attribute.color

    if(Attribute.type === 'brush'){
        ctx.strokeStyle = 'white';
    }

    if(Attribute.type === 'pencil' || Attribute.type === 'brush'){
        ctx.moveTo(coordinate.x, coordinate.y);
    }
})

canvas.addEventListener('mousemove', (event)=>{
    if(!drawing) return;
    if(Attribute.type === 'pencil' || Attribute.type === 'brush'){
        pencil(event.offsetX, event.offsetY);
    }
    else if(Attribute.type === 'line'){
        line();
    }
    else if(Attribute.type === 'rect'){
        Rect();
    }

})

canvas.addEventListener('mouseup', ()=>{drawing = false});
canvas.addEventListener('mouseout', ()=>{drawing = false});


const inputs = document.querySelectorAll('input');


inputs.forEach((tag) => {
    if(tag.type != 'color'){
        tag.addEventListener('click', (event) => {
            let key = event.target.id;
            Attribute[key] = event.target.value;
        });
    }
    else{
        tag.addEventListener('change', (event)=>{
            let key = event.target.id;
            Attribute[key] = event.target.value;
        })
    }
});


document.getElementById('buttons').addEventListener('click', (event)=>{
    let element = event.target.parentElement;
    Attribute['type'] = element.id;
    console.log(Attribute);
    Attribute.color = 'black';
})

// document.getElementById.addEventListener('click', (event)=>{
//     Attribute.fi
// })

