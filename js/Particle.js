class Particle {
    constructor(x, y, r) {

        var options = {
            restitution: 0.4
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();

        push();
            fill("white");
            text("500", 20, 550);
            text("200", 100, 550);
            text("300", 180, 550);
            text("100", 260, 550);
            text("1500", 340, 550);
            text("10100", 410, 550);
            text("5300", 500, 550);
            text("100", 580, 550);
            text("300", 660, 550);
            text("200", 740, 550);
            pop();
    }

    scores() {


        for (var i = 0; i < particles.length; i++) {
            if (particles[i] !== null) {
                if (particles[i].body.position.y > 760 && particles[i].body.speed < 1) {
                    if (particles[i].body.position.x < 80 && particles[i].body.position.x > 0) {
                        score = score + 500;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 160 && particles[i].body.position.x > 80) {
                        score = score + 200;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 240 && particles[i].body.position.x > 160) {
                        score = score + 300;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 320 && particles[i].body.position.x > 240) {
                        score = score + 100;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 400 && particles[i].body.position.x > 320) {
                        score = score + 1500;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 480 && particles[i].body.position.x > 400) {
                        score = score + 10100;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 560 && particles[i].body.position.x > 480) {
                        score = score + 5300;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 640 && particles[i].body.position.x > 560) {
                        score = score + 100;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 720 && particles[i].body.position.x > 640) {
                        score = score + 300;
                        particles[i] = null;
                    }
                    else if (particles[i].body.position.x < 800 && particles[i].body.position.x > 720) {
                        score = score + 200;
                        particles[i] = null;
                    }
                }
            }
        }
    }
}
