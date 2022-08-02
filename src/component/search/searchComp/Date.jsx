import styles from "./searchComp.module.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setArtist, setDate} from "../../store/search";

const Date = () => {

    const dispatch = useDispatch();
    const date = useSelector(state => state.search.date); // useSelector로 state만 불러오고 상태 변경은 dispatch 이용하기

    const setInfo = e => {
        const { value } = e.target;
        dispatch(setDate(value));
    }

    console.log(date); // 확인용

    return(
        <div className={styles.center}>
            <form>
                <input type={"date"} id="searchDate" onChange={setInfo}/>
                <button type={"submit"}>GO</button>
            </form>
        </div>
    )
}

export default Date;