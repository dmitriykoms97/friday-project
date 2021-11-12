import React from 'react';
import s from './test.module.css'
import SuperInput from "../super-components/input/SuperInput";
import SuperButton from "../super-components/button/SuperButton";
import SuperCheckbox from "../super-components/checkbox/SuperCheckbox";

const Test = () => {
    return (
        <div className={s.container}>
            <SuperInput placeholder='Test'/>
            <SuperButton>
                Test
            </SuperButton>
            <SuperCheckbox>
                Test
            </SuperCheckbox>
        </div>
    );
};

export default Test;