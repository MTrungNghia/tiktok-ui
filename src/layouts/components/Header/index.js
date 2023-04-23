import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faPersonRifle, faSeedling, faSignOut, faUpload } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import config from '~/config'

import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images';
// import { useEffect, useState } from 'react';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
// import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children:{
            title:'Language',
            data: [
                {
                    type:'languge',
                    code: 'en',
                    title: 'English'
                },
                {
                    type:'languge',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]    
            
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    },
]

function Header() {
    const currenUser = true;

    // Hanle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'Language':
                console.log(menuItem)
                break;
            default:
                console.log(menuItem)
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faPersonRifle}/>,
            title: 'View profile',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Settings',
            to: '/feedback'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate:true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home}  className={cx('logo')}>
                <img src={images.logo.default} alt="Tiktok" />
            </Link>
            {/* Search */}
            <Search>

            </Search>

            <div className={cx('actions')}>
                {currenUser ? (
                    <>
                        <Tippy delay={[0,200]} content="Upload video" placement='bottom'>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faUpload} />
                                {/* <UploadIcon className={cx('actions-icon')} /> Error */}
                            </button> 
                        </Tippy>
                        <Tippy delay={[0,200]} content="Send " placement='bottom'>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faSeedling} />
                                {/* <UploadIcon className={cx('actions-icon')} /> Error */}
                            </button> 
                        </Tippy>
                        <Tippy delay={[0,200]} content="Notification" placement='bottom'>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faBell} />
                                {/* <UploadIcon className={cx('actions-icon')} /> Error */}
                            </button> 
                        </Tippy>
                    </>
                ):(
                    <>
                        <Button text>
                            Register
                        </Button>
                        <Button outline rounded>
                            Login
                        </Button>
                    </>
                )}
                <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currenUser ? (
                        <Image 
                            className={cx('user_avater')} 
                            src='https://i.9mobi.vn/cf/imagaaes/2015/03/nkk/hinh-dep-1.jpg' 
                            alt='Avatar'
                            fallBack="https://lh3.googleusercontent.com/ogw/AOLn63HzPtSnXAHb4M_M9W1AefSVwe0GRFqCZij33SvK=s32-c-mo"/>
                    ):(
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;