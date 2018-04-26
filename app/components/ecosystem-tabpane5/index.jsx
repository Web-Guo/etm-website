import React from 'react';

import './style/index.less';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const clsName = this.props.className + '-tabpane5';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                    <div className='content'>
                        <p className='normal-title'><br />{intl.get('MILL_MALL')}</p>
                        <p className='text-light'><br />
                        {intl.get('MILL_MALL_CON1')}<br />
                        {intl.get('MILL_MALL_CON2')}<br />
                        {intl.get('MILL_MALL_CON3')}<br />
                        {intl.get('MILL_MALL_CON4')}<br />
                        {intl.get('MILL_MALL_CON5')}<br />
                        {intl.get('MILL_MALL_CON6')}<br />
                        {intl.get('MILL_MALL_CON7')}</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'ecosystem'
}

export default TabPane;