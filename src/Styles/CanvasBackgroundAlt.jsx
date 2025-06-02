import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    class Ship {
      constructor() {
        this.size = 50;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed_x = 0.2;
        this.speed_y = Math.random() * 0.5 - 2;

        this.img = new Image();
        const images = [
          "assets/Background-ships/Nebula.png", 
          "assets/Background-ships/Star destroyer.png", 
          "assets/Background-ships/Venator-Imp.png", 
          "assets/Background-ships/Venator-rp.png"
        ];
        this.img.src = images[Math.floor(Math.random() * images.length)];
      }
      
      update() {
        this.x += this.speed_x;
        this.y += this.speed_y;
        if (this.x > canvas.width + this.size / 2) this.x = -this.size / 2;
        else if (this.x < -this.size / 2) this.x = canvas.width + this.size / 2;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        else if (this.y < -this.size) this.y = canvas.height + this.size;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.drawImage(this.img, -this.size / 2, -this.size, this.size, this.size * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const ships = [];
    const ship_count = 75;

    for (let i = 0; i < ship_count; i++) {
      ships.push(new Ship());
    }

    let animationFrameId;
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0) 100%';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ships.forEach(ship => {
        ship.update();
        ship.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default CanvasBackground;