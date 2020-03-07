import {IAttract} from "../../../Interfaces/Options/Particles/IAttract";
import {ICoordinates} from "../../../Interfaces/ICoordinates";

export class Attract implements IAttract {
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     */
    public get rotateX(): number {
        return this.rotate.x;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     * @param value
     */
    public set rotateX(value: number) {
        this.rotate.x = value;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     */
    public get rotateY(): number {
        return this.rotate.y;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     * @param value
     */
    public set rotateY(value: number) {
        this.rotate.y = value;
    }

    public enable: boolean;
    public rotate: ICoordinates;

    constructor() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
}
