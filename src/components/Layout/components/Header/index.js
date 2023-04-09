import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccopuntItem from '~/components/AccountItem';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    })

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo.default} alt="Tiktok" />
            </div>
            <Tippy
                visible={searchResult.length > 0}
                interactive={true}
                render={attrs => (
                    <div className={cx('search-result')} tabindex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccopuntItem />
                            <AccopuntItem />
                            <AccopuntItem />
                            <AccopuntItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={cx('action')}>
                <Button text>
                    Register
                </Button>
                <Button outline rounded>
                    Login
                </Button>
                
            </div>
        </div>
    </header>
}

export default Header;