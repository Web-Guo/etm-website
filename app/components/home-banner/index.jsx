import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import CanvasStar from '../canvas-star';

import './style/index.less';

import RawLogo from './image/logo.png';

import intl from 'react-intl-universal';
import { Link } from 'react-router';


class Banner extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            renderSize: { width: '100%', height: '100%' }
        }
    }

    componentDidMount() {
        let flushRenderSize = () => {
            const clsName = this.props.className + '-banner';
            const container = ReactDOM.findDOMNode(this.refs[clsName]);

            this.setState({
                renderSize: {
                    width: container.clientWidth,
                    height: container.clientHeight,
                }
            });
        }

        window.addEventListener('resize', () => {
            flushRenderSize();
        });
        flushRenderSize();
        
    }
    render() {
        const clsName = this.props.className+'-banner';
        return (
            <div ref={clsName} className={clsName}>
                <div className={`${clsName}-bg`}></div>
                <CanvasStar width={this.state.renderSize.width} height={this.state.renderSize.height} />
                <div className='container'>
                    <div className='content flex-vertical'>
                        <img className='img-responsive' src={RawLogo} alt=""/>
                        <p className={`${clsName}-text1`}>{intl.get('VALUE_SHARE')}</p>
                        <div className='link-btn'>
                            <Button size='large' onClick={this.onClickBtn}>{intl.get('DOWNLOAD')}</Button>
                            <Button className='link-activity' size='large'  >
                                <Link style={{color:'rgba(255, 255, 255, 0.8)'}} to='/activity'> {intl.get('ACTIVITY')}</Link>                           
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onClickBtn() {
        var pdfTemp = ((lang)=>{return '../../docs/ETM Science_'+lang+'.pdf'})(global.select);
        window.open(pdfTemp);
    }
}

Banner.defaultProps = {
    className: 'home',
}

export default Banner;