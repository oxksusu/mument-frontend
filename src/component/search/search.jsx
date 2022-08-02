import styles from './search.module.css';
import {useState} from "react";
import Artist from "./searchComp/Artist";
import Music from "./searchComp/Music";
import Date from "./searchComp/Date";

import {setContent} from "../store/search";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {

    const dispatch = useDispatch();
    const content = useSelector(state => state.search.content);

    const btnNameSetting = e => {
        const { name } = e.target;
        dispatch(setContent(name));
        console.log(content);
    }

    const selectComponent = {
        artist: <Artist />,
        music: <Music />,
        date: <Date />,
    }

    const btnData = [
        {
            id: 1,
            name: "artist",
            text: "아티스트",
        },
        {
            id: 2,
            name: "music",
            text: "음악",
        },
        {
            id: 3,
            name: "date",
            text: "날짜",
        }
    ]

    return(
        <>

            <div className={styles.background}>
                <div className={styles.relative}>
                    <div className={styles.filter}>검색 필터</div>
                    {btnData.map(data => {
                        return(
                            <button className={`${content === data.name ? styles.btnIsSelected : styles.btn}`} onClick={btnNameSetting} name={data.name} key={data.id}>
                                {data.text}
                            </button>
                        );
                    })}
                </div>
                {content && <div>{selectComponent[content]}</div>}
            </div>
        </>
    )
}

export default Search;
