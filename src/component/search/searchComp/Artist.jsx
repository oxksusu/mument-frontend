import styles from "./searchComp.module.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setArtist} from "../../store/search";

const Artist = () => {

    const dispatch = useDispatch();
    const artist = useSelector(state => state.search.artist);

    const setInfo = e => {
        const { value } = e.target;
        dispatch(setArtist(value));
        console.log(artist);
    }

    return(
        <div className={styles.center}>
            <input type={"text"} id="artist" onChange={setInfo} placeholder={"아티스트 이름을 입력하세요."}/>
            <button type={"submit"}>GO</button>
        </div>
    )
}

export default Artist;