import { PriorityTools } from '../../src/lib/PriorityTools';
import { Priority } from '../../src/Task/Priority';

describe('priority naming', () => {
    it.each(Object.values(Priority))('should name priority value: "%i"', (priority) => {
        const name = PriorityTools.priorityNameUsingNone(priority);
        expect(name).not.toEqual('ERROR'); // if this fails, code needs to be updated for a new priority
    });

    it('should name default priority correctly', () => {
        const none = Priority.None;
        expect(PriorityTools.priorityNameUsingNone(none)).toEqual('None');
        expect(PriorityTools.priorityNameUsingNormal(none)).toEqual('Normal');
    });

    it.each([
        // Normal cases
        ['highest', Priority.Highest],
        ['high', Priority.High],
        ['none', Priority.None],
        ['normal', Priority.None],
        ['low', Priority.Low],
        ['lowest', Priority.Lowest],

        // Erroneous cases
        ['', Priority.None],
        ['invalid_priority_string!', Priority.None],

        // Priority string has to be in lower case
        ['Highest', Priority.None],
        ['highEst', Priority.None],
    ])('should get priority value "%s"', (str, value) => {
        expect(PriorityTools.priorityValue(str)).toEqual(value);
    });
});
