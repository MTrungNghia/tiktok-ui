import classNames from "classnames/bind";
import styles from "./AccopuntItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccopuntItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src ="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a43eb1dff53e2df52b1615220ae5c5ac~c5_100x100.jpeg?x-expires=1681099200&x-signature=AApHw6kzKa30PjryRfzbQ0leUA8%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccopuntItem;