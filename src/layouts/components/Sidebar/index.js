import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import config from "~/config";
import {HomeIcon,HomeActiveIcon, UserIcon, UserActiveIcon, LiveIcon, LiveActiveIcon} from '~/components/Icons'
import Menu, {MenuItem} from "./Menu";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
    return (<aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserIcon />}  activeIcon={<UserActiveIcon />}/>
            <MenuItem title="For Your" to={config.routes.live} icon={<LiveIcon />}  activeIcon={<LiveActiveIcon />}/>
        </Menu>
        <SuggestedAccounts label="Suggested accounts"/>
        <SuggestedAccounts label="Following acoounts"/>
    </aside>);
}

export default Sidebar;