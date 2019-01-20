import {helper} from '@ember/component/helper';

export function inflect([count, singular, middle, plural]) {
    if (count === 1) {
        return `1 ${singular}`;
    } else if (count >= 2 && count < 5) {
        return `${count} ${middle}`;
    } else {
        return `${count} ${plural}`;
    }
}

export default helper(inflect);
