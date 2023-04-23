// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import {Wrapper as PopperWrapper} from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper className={cx('menu-popper')}>
                <AccountPreview />
            </PopperWrapper>
        </div>
    )
};

function AccountItem() {
    return ( 
        <div>
            <Tippy 
                interactive
                delay={[500,0]}
                placement='bottom'
                offset={[-20, 0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src="https://genk.mediacdn.vn/2019/5/14/photo-1-15578081452091331833974.jpg" alt='goku'/>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}
AccountItem.propTypes = {
    
}


export default AccountItem;