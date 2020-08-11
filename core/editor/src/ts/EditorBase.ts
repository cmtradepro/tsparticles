import { EditorGroup } from "object-gui/dist/js";
import { Container } from "tsparticles/dist/Core/Container";

export abstract class EditorBase {
    protected constructor(protected readonly particles: Container) {}

    public abstract addToGroup(parent: EditorGroup, options?: unknown): void;
}