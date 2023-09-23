class Tile {
    public static readonly SIZE = 20;
    public static readonly SPACING = 1;

    private readonly _x: number;
    private readonly _y: number;

    private _t: number;

    private _detectionRadius: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._t = 0;
        this._detectionRadius = 0;
    }

    public getDistanceFromMouse(): number {
        const { _x: x, _y: y } = this;
        const { SIZE, SPACING } = Tile;

        const mouseTileDistanceX =
            mouseX === null
                ? Number.POSITIVE_INFINITY
                : mouseX < x
                ? Math.ceil((x - mouseX) / (SIZE + SPACING))
                : mouseX > x + SIZE
                ? Math.ceil((mouseX - (x + SIZE)) / (SIZE + SPACING))
                : 0;

        const mouseTileDistanceY =
            mouseY === null
                ? Number.POSITIVE_INFINITY
                : mouseY < y
                ? Math.ceil((y - mouseY) / (SIZE + SPACING))
                : mouseY > y + SIZE
                ? Math.ceil((mouseY - (y + SIZE)) / (SIZE + SPACING))
                : 0;

        return Math.sqrt(mouseTileDistanceX ** 2 + mouseTileDistanceY ** 2);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        const { _x: x, _y: y } = this;
        const { SIZE } = Tile;

        const distance = this.getDistanceFromMouse();
        if (distance < this._detectionRadius) {
            this._t = Math.max(this._t, 1 - distance / this._detectionRadius);
        }

        ctx.fillStyle = `rgba(23, 23, 23, ${0.3 + (0.8 - 0.3) * this._t})`;
        ctx.fillRect(x, y, SIZE, SIZE);
    }

    public update(timeElapsed: number, tick: number): void {
        if (this._t > 0) {
            this._t = Math.max(this._t - 0.001 * timeElapsed, 0);
        }

        this._detectionRadius = 3 + 3 * Math.sin(tick / 2);
    }
}

const canvas = document.createElement('canvas');
canvas.id = 'background-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d')!;

let tiles: Tile[];

function regenerateCanvas(): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const squaresPerRow = Math.ceil((canvas.width - Tile.SPACING) / (Tile.SIZE + Tile.SPACING));
    const squaresPerCol = Math.ceil((canvas.height - Tile.SPACING) / (Tile.SIZE + Tile.SPACING));

    tiles = new Array(squaresPerRow * squaresPerCol).fill(0).map((_, i) => {
        const x = Tile.SPACING + (i % squaresPerRow) * (Tile.SIZE + Tile.SPACING);
        const y = Tile.SPACING + Math.floor(i / squaresPerRow) * (Tile.SIZE + Tile.SPACING);
        return new Tile(x, y);
    });
}

window.addEventListener('resize', regenerateCanvas);

let mouseX: number | null = null;
let mouseY: number | null = null;

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

let lastDraw = Date.now();

let tick = 0;

function draw(): void {
    const timeElapsed = Date.now() - lastDraw;
    lastDraw = Date.now();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    tiles.forEach((tile) => tile.render(ctx));
    tiles.forEach((tile) => tile.update(timeElapsed, tick));

    tick = (tick + 0.005 * timeElapsed) % (Math.PI * 2);

    window.requestAnimationFrame(draw);
}

regenerateCanvas();

window.requestAnimationFrame(draw);
