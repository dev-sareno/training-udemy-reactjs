import React from 'react';
import styles from './Home.module.css';

const homeComponent = () => {
    return (
        <div>
            <h1 className={styles.headerOne}>Home</h1>
            <p className={styles.parag}>Est consequat dolore occaecat laborum incididunt adipisicing proident ea sunt.</p>
        </div>
    );
}

export default homeComponent;
