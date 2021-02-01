import React, { useState } from 'react';
import './Picture.css';
import { DB, storage } from '../../../control/firebase/firebase'

const Picture = (props) => {

    const { id, image, name } = props;
    const [progress, setProgress] = useState(false)
    const [logo, setLogo] = useState(image)
    const [upadteImage, setUpdateImage] = useState(false)


    function addPicture() {
        // document.getElementById("pictuerToAdd").click();
    }

    // functions

    function getImage(event) {
        try {
            // imageToUpload = image.target.files[0];
            const ref = storage.ref("/courses/" + id);
            const image = event.target.files[0];
            // const name = image.name;
            const metadata = {
                contentType: image.type
            };

            const uploadImg = ref.put(image, metadata)


            console.log(uploadImg)
            uploadImg.on('state_changed', snapshot => {
                console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);



            }, e => {
                console.error(e)
                setProgress(false);

            }, () => { //when finshed upload

                uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                    setLogo(downloadURL);

                    DB.collection('courses').doc(id).update({ image: downloadURL })
                        .then(() => {
                            setLogo(downloadURL);
                            setProgress(false);
                            setUpdateImage(false)
                        })
                });
            })
        } catch (e) {
            console.error(e);
            setProgress(false);
            setUpdateImage(false)
        }
    }

    if (!upadteImage) {
        return (
            <div className='imageHolder'>

                {
                    logo ? (
                        <div style={{backgroundImage: `url(${logo})`}} className="imgOption" alt={`course ${name}`} onClick={()=>{setUpdateImage(true)}}/>
                    ) : (<span onClick={()=>{setUpdateImage(true)}}>הוסיפו תמונה</span>)

                }
            </div>
        )
    } else {
        return (
            <div className='imageHolder'>
                {
                    !progress ?
                        <div className="addPicturesPanel" onClick={addPicture} >
                            <input
                                type="file"
                                className="addPicture"
                                id="pictuerToAdd"
                                onClick={() => { }}
                                onChange={event => {
                                    getImage(event);
                                }}
                            ></input>
                        </div>
                        :
                        <div className='uploader'>
                            <div style={{ width: `${progress}%` }} />
                        </div>
                }
            </div>
        )
    }




}

export default Picture
