'use strict';
const INPUT = 'input';
const SUBMIT = 'submit';
const CLICK = 'click';
const DBLCLICK = 'dblclick';
const BLUR = 'blur';
const CHANGE = 'change';
const KEYDOWN = 'keydown';


class EventSimulator {
    constructor() {
        this.events = {
            [SUBMIT]: EventSimulator.createEvent(SUBMIT),
            [INPUT]: EventSimulator.createEvent(INPUT),
            [CLICK]: EventSimulator.createEvent(CLICK),
            [DBLCLICK]: EventSimulator.createEvent(DBLCLICK),
            [BLUR]: EventSimulator.createEvent(BLUR),
            [CHANGE]: EventSimulator.createEvent(CHANGE),
            [KEYDOWN]: EventSimulator.createEvent(KEYDOWN)
        };
    }

    static createEvent(type, props = {bubbles: true}) {
        return new Event(type, props);
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    submit(el, props) {
        if (!props) {
            let _submit = this.events[SUBMIT];
            el.dispatchEvent(_submit);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    input(el, props) {
        if (!props) {
            let _input = this.events[INPUT];
            el.dispatchEvent(_input);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    click(el, props) {
        if (!props) {
            let _click = this.events[CLICK];
            el.dispatchEvent(_click);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    dblclick(el, props) {
        if (!props) {
            let _dblclick = this.events[DBLCLICK];
            el.dispatchEvent(_dblclick);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    blur(el, props) {
        if (!props) {
            let _blur = this.events[BLUR];
            el.dispatchEvent(_blur);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    change(el, props) {
        if (!props) {
            let _change = this.events[CHANGE];
            el.dispatchEvent(_change);
        }
    }

    /**
     *
     * @param el{EventTarget}
     * @param props{object}
     */
    keydown(el, keyCode) {
        let _keydown = this.events[KEYDOWN];
        _keydown.keyCode = keyCode;
        el.dispatchEvent(_keydown);
    }


}

export default EventSimulator;
