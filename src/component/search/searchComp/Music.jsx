import styles from "./searchComp.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setArtist, setMusic} from "../../store/search";

const Music = () => {

    const dispatch = useDispatch();
    const music = useSelector(state => state.search.music);

    const setInfo = e => {
        const { value } = e.target;
        dispatch(setMusic(value));
        console.log(music);
    }

    return(
        <div className={styles.center}>
            <form>
                <input type={"text"} onChange={setInfo} placeholder={"곡명을 입력하세요."}/>
                <button type={"submit"}>GO</button>
            </form>
        </div>
    )
}

export default Music;