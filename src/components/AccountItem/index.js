import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./AccopuntItem.module.scss";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "~/components/Image";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccopuntItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src ={data.avatar} alt="Hoaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                    
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
     );
}

AccopuntItem.propTypes = {
    data: PropTypes.object.isRequired, 
}

export default AccopuntItem;