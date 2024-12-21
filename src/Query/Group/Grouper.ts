import type { Task } from '../../Task/Task';
import type { SearchInfo } from '../SearchInfo';
import { Statement } from '../Statement';

/**
 * A group-naming function, that takes a Task object and returns zero or more
 * corresponding group property names.
 *
 * For example, if a {@link GrouperFunction} implemented grouping by tag,
 * passing in a task that has two tags, #tag1 and #tag2 to this tag-grouper function
 * would return ['tag1', 'tag2']
 *
 * The {@link SearchInfo} parameter allows implementations to inspect selected information
 * about the {@link Query} containing the search being run.
 */
export type GrouperFunction = (task: Task, searchInfo: SearchInfo) => string[];

/**
 * A named function that is used to determine the group heading name(s) to use for a {@link Task} object.
 *
 * The name is represented in {@link property}.
 *
 * Note: {@link Grouper} objects are typically created by {@link Field.grouper} using the many
 * classes derived from {@link Field}.
 *
 * @see {@link TaskGroups} for how to use {@link Grouper} objects to group tasks together.
 */
export class Grouper {
    /** _statement may be updated later with {@link setStatement} */
    private _statement: Statement;

    /**
     * The type of grouper, for example 'tags' or 'due'.
     *
     * For example, a 'group by tags' line would be expected to generate a
     * {@link Grouper.property} called 'tags'.
     */
    public readonly property: string;

    /**
     * The {@link GrouperFunction} that will be used to group tasks together.
     */
    public readonly grouper: GrouperFunction;

    /**
     * Whether the headings for this group should be reversed.
     */
    public readonly reverse: boolean;

    constructor(instruction: string, property: string, grouper: GrouperFunction, reverse: boolean) {
        this._statement = new Statement(instruction, instruction);
        this.property = property;
        this.grouper = grouper;
        this.reverse = reverse;
    }

    /**
     * Optionally record more detail about the source statement.
     *
     * In tests, we only care about the actual instruction being parsed and executed.
     * However, in {@link Query}, we want the ability to show user more information.
     */
    public setStatement(statement: Statement) {
        this._statement = statement;
    }

    public get statement(): Statement {
        return this._statement;
    }

    public get instruction(): string {
        return this._statement.anyPlaceholdersExpanded;
    }
}
