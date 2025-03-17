const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 400;

let tailAngle = 0;
let direction = 1;

function drawKitty() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Body 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(250, 250, 50, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // White Chest Patch
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(250, 280, 20, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Head 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(250, 170, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // White Face Patch
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(250, 180, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Ears 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(220, 140);
    ctx.lineTo(240, 120);
    ctx.lineTo(245, 150);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(280, 140);
    ctx.lineTo(260, 120);
    ctx.lineTo(255, 150);
    ctx.fill();
    
    // Eyes 
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(240, 170, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(260, 170, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(240, 170, 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(260, 170, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose (Pink)
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(250, 180, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Mouth
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250, 183);
    ctx.lineTo(245, 190);
    ctx.moveTo(250, 183);
    ctx.lineTo(255, 190);
    ctx.stroke();
    
    // Legs (Black)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(230, 280);
    ctx.lineTo(230, 320);
    ctx.moveTo(270, 280);
    ctx.lineTo(270, 320);
    ctx.stroke();
    
    // White Paws
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(230, 310);
    ctx.lineTo(230, 320);
    ctx.moveTo(270, 310);
    ctx.lineTo(270, 320);
    ctx.stroke();
    
    // Tail
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(290, 250);
    let tailX = 290;
    let tailY = 310 - tailAngle;
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
    
    //  tSail movement
    tailAngle += 1 * direction;
    if (tailAngle > 5 || tailAngle < -5) {
        direction *= -1;
    }
    
    requestAnimationFrame(drawKitty);
}

drawKitty();
