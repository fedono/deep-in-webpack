import React from 'react';
import ReactDOM from "react-dom";
import styles from './index.less';

function App() {
    return (
        <div className={styles.app}>
          <div className={styles.container}>This Application is using TypeScript</div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)