import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
import styles from './Search.module.scss'
import { useEffect, useState, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccopuntItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css';
import {useDebounce} from '~/hooks';
// import { UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if(!debouncedValue.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true);
        const fetchApi = async() => {
            setLoading(true);

            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        }
        fetchApi();
        // request.get(`users/search`,{
        //     params:{
        //         q: debouncedValue,
        //         type:'less'
        //     }
        // })
        // // .then(res => res.json())
        // .then(res => {
        //     // console.log(res.data.data);
        //     setSearchResult(res.data);
        //     setLoading(false);
        // })
        // .catch(() => {
        //     setLoading(false);
        // })
    }, [debouncedValue])

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ') && searchValue.trim()){
            setSearchValue(e.target.value);
        }

    }

    const handleSubmit = (e) => {

    }
    
    return ( 
    // ing a wrapper <div> tag around the reference element solves this by creating a new parentNode context. Sp
    <div>
        <HeadlessTippy
            // appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccopuntItem key={result.id} data={result}/>
                        ))}
                        
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef} 
                    value={searchValue} 
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* Loading */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
    
                <button className={cx('search-btn')} onMouseDown={e=> e.preventDefault()} onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy> 
    </div>
    );
}

export default Search;

// https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less
// {
//   "data": [
//     {
//       "id": 4765,
//       "first_name": "nguyen1w",
//       "last_name": "phuc31112",
//       "full_name": "nguyen1w phuc31112",
//       "nickname": "hoangphuc01975",
//       "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg",
//       "bio": "toi la dev",
//       "tick": false,
//       "followings_count": 16,
//       "followers_count": 4,
//       "likes_count": 14,
//       "website_url": "https://fullstack.edu.vn/",
//       "facebook_url": "",
//       "youtube_url": "",
//       "twitter_url": "",
//       "instagram_url": "",
//       "created_at": "2022-12-23 00:12:36",
//       "updated_at": "2023-04-20 15:59:34"
//     },
//     {
//       "id": 4472,
//       "first_name": "Hoàng",
//       "last_name": "Hải",
//       "full_name": "Hoàng Hải",
//       "nickname": "hai77",
//       "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/4472/63ddd5b1bd082.jpg",
//       "bio": "Tiktok của Hải <3",
//       "tick": false,
//       "followings_count": 7,
//       "followers_count": 3,
//       "likes_count": 7,
//       "website_url": "https://fullstack.edu.vn/",
//       "facebook_url": "",
//       "youtube_url": "",
//       "twitter_url": "",
//       "instagram_url": "",
//       "created_at": "2022-12-02 02:11:21",
//       "updated_at": "2023-04-19 16:51:40"
//     },
//     {
//       "id": 192,
//       "first_name": "Huỳnh",
//       "last_name": "Khoa",
//       "full_name": "Huỳnh Khoa",
//       "nickname": "bhuynhcongkhoa",
//       "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/192/631560ee94071.png",
//       "bio": "mày/tao",
//       "tick": false,
//       "followings_count": 9,
//       "followers_count": 1,
//       "likes_count": 5,
//       "website_url": "https://fullstack.edu.vn/huynhkhoa66",
//       "facebook_url": "",
//       "youtube_url": "",
//       "twitter_url": "",
//       "instagram_url": "",
//       "created_at": "2022-09-05 09:27:58",
//       "updated_at": "2023-03-25 18:03:22"
//     },
//     {
//       "id": 4761,
//       "first_name": "Dang",
//       "last_name": "Hoang",
//       "full_name": "Dang Hoang",
//       "nickname": "hoangzc112",
//       "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/4761/63be78365ed1d.jpg",
//       "bio": "Hoang vip po lo :))",
//       "tick": false,
//       "followings_count": 7,
//       "followers_count": 3,
//       "likes_count": 8,
//       "website_url": "https://fullstack.edu.vn/",
//       "facebook_url": "",
//       "youtube_url": "",
//       "twitter_url": "",
//       "instagram_url": "",
//       "created_at": "2022-12-22 00:39:21",
//       "updated_at": "2023-04-05 23:11:33"
//     },
//     {
//       "id": 4142,
//       "first_name": "Hoàng Trung",
//       "last_name": "Nam",
//       "full_name": "Hoàng Trung Nam",
//       "nickname": "hoangnam123",
//       "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/4142/63beb10f54b27.jpg",
//       "bio": "✨ 2001✨\nVietnam 🇻🇳",
//       "tick": false,
//       "followings_count": 11,
//       "followers_count": 2,
//       "likes_count": 6,
//       "website_url": "https://www.facebook.com/duc2cc/",
//       "facebook_url": "https://www.facebook.com/maianh.zeroo",
//       "youtube_url": "https://www.youtube.com/@BeCodey",
//       "twitter_url": "",
//       "instagram_url": "https://www.facebook.com/dangkhanhlinhh",
//       "created_at": "2022-11-04 17:14:19",
//       "updated_at": "2023-04-03 09:00:37"
//     }
//   ]
// }