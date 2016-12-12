import {GameScene} from "../framework/GameScene";
import {RectangularGameObject, GameObject} from "../framework/GameObject";
import {Vector2D} from "../framework/Vector2D";
import {RectangleDrawing, TextDrawing} from "../framework/Drawing";
import {KEYCODE} from "../framework/KeyCode";

const BACKGROUND    = "#000000";
const TITLE_SIZE    = 50;
const TITLE_FONT    = "impact";
const TITLE_COLOR   = '#FFFFFF';
const TEXT_SIZE     = 20;
const TEXT_FONT     = "impact";
const TEXT_SPACE    = 4;
const TEXT_COLOR    = '#FFFFFF';

class PauseScene extends GameScene {
    public constructor(private game) {
        super("about");
        let canvas_context = game.canvas.getContext("2d");
        let width = game.canvas.width;
        let height = game.canvas.height;
        let bg_rect = new RectangularGameObject(new Vector2D(0,0), width, height);
        let bg = new RectangleDrawing(bg_rect, BACKGROUND, true, canvas_context);
        let title = new TextDrawing(new Vector2D(width / 2, TITLE_SIZE + 5), TITLE_SIZE, TITLE_FONT, TITLE_COLOR, "SIMPLE SNAKE", true, true, canvas_context);
        this.objects.push(new GameObject(bg));
        this.objects.push(new GameObject(title));
        let text_items = this.context_text.length;
        let x = width / 2;
        let y = height / 2 - (TEXT_SIZE / 2 * (text_items / 2) + (TEXT_SPACE * (text_items / 2)));
        for (let string of this.context_text) {
            this.objects.push(new GameObject(new TextDrawing(new Vector2D(x, y), TEXT_SIZE, TEXT_FONT, TEXT_COLOR, string, true, true, canvas_context)));
            y += TEXT_SPACE + TEXT_SIZE;
        }
    }

    public onKeyDown(key: KEYCODE): void {
        super.onKeyDown(key); //it does nothing but just in case :)
        if (key == KEYCODE.KEY_P) {
            this.game.popScene();
        }
    }

    private context_text = [
        "GAME PAUSED!"
    ];
}

export {PauseScene};
