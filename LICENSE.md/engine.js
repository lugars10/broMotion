class Particle
{
    constructor(color, size, position)
    {
        this.pHeight = window.innerHeight; //y pixels
        this.pWidth = window.innerWidth;    //x pixels
        this.color = color;
        this.position = position;

        this.particle = document.createElement('div');
        this.particle.style.height = size.toString() + "px";
        this.particle.style.width = size.toString() + "px";
        this.particle.style.backgroundColor = this.color;
        this.particle.style.position = "absolute";
        this.particle.style.left = this.position.getX().toString() + "px";
        this.particle.style.top = this.position.getY().toString() + "px";
        
        document.body.appendChild(this.particle);
    }
    setColor(c)
    {
        this.color = c;
        this.particle.style.backgroundColor = this.color;
    }

    moveTo(coords, time)
    {
        let posX = this.position.getX();
        let particle = this.particle;
        let delta_x = coords.getX() - this.position.getX();
        let delta_y = coords.getY() - this.position.getY();
        let pathDistance = Math.sqrt( Math.pow(delta_x,2) + Math.pow(delta_y, 2));
        let velocity = pathDistance/time;
        let counter = 0;
        let interval = window.setInterval(function()
        {
            posX = posX + velocity;
            particle.style.left = posX.toString() + "px";
            if(posX >= coords.getX())
            {
                console.log("xd");
                window.clearInterval(interval);
            }
        }, 1)
        this.position.setX(coords.getX());
        this.particle = particle;
        
    }
    pos()
    {
        console.log(this.position.getX());
    }

}

class Vector2   //Vector 2 CLASS
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    setX(coord)
    {
        this.x = coord;
    }

    setY(coord)
    {
        this.y = coord;
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }
}

//http://rextester.com/GSI1984