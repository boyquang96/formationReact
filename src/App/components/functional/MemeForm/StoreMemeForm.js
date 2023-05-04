import { propTypes } from "react-bootstrap/esm/Image";
import MemeForm from "./MemeForm";
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { changeMemeValue } from "../../store/memeSlice";



function StoreMemeForm(props) {
    const images = useSelector(storeState => storeState.ressources.images);
    const meme = useSelector(storeState => storeState.meme);
    const storeDispatch = useDispatch();
    return (
        <MemeForm {...props} images={images} meme={meme} onMemeChange={(memeFromChild) => { storeDispatch(changeMemeValue(memeFromChild)) }} />
    )
}

StoreMemeForm.propTypes={
    //meme:PropTypes.object.isRequired,
    //onMemeChange: PropTypes.func.isRequired
}

export default StoreMemeForm;