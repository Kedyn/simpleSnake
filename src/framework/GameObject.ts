import { KEYCODE } from './Tools/KeyCode';
import { MOUSE_BUTTON } from "./Tools/constants";


export abstract class GameObject {
    public constructor(public x: number, public y: number, public width: number, public height: number) {

    }

    public abstract update(): void;
    public abstract render(): void;

    public onEnter(): boolean {
        return true;
    }

    public onKeyDown(key: KEYCODE): void {}
    
    public onKeyUp(key: KEYCODE): void {}
    
    public onMouseMove(x: number, y: number): void {}
    
    public onMouseDown(button: MOUSE_BUTTON, x: number, y: number): void {}
    
    public onMouseUp(button: MOUSE_BUTTON, x: number, y: number): void {}

    public onExit(): boolean {
        return true;
    }
}