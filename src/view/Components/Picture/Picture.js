import React, { useState } from 'react';
import { DB, storage } from '../../../control/firebase/firebase'

const Picture = (initProps) => {

    const {id} = initProps;
    const [progress, setProgress] = useState(false)
    const [logo, setLogo] = useState('')


    function addPicture() {
        document.getElementById("pictuerToAdd").click();
    }

    // functions

    function getImage(event) {
        try {
            // imageToUpload = image.target.files[0];
            const ref = storage.ref("/groups/" + id);
            const image = event.target.files[0];
            // const name = image.name;
            const metadata = {
                contentType: image.type
            };

            const uploadImg = ref.put(image, metadata)


            console.log(uploadImg)
            uploadImg.on('state_changed', snapshot => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);



            }, e => {
                console.error(e)
                setProgress(false);
                m.redraw();
            }, () => { //when finshed upload

                uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                    setLogo(downloadURL);

                    DB.collection('groups').doc(id).update({ logo: downloadURL })
                        .then(() => {
                            setLogo(downloadURL);
                            setProgress(false);
                            
                        })
                });
            })
        } catch (e) {
            console.error(e);
            setProgress(false);
            
        }
    }

    return (
        <div>
            <div className="addPicturesPanel" onclick={addPicture}>
                <input
                    type="file"
                    className="addPicture"
                    id="pictuerToAdd"
                    onclick={() => { }}
                    onchange={event => {
                        getImage(event, vnode);
                    }}
                ></input>
                {progress ?
                    <div className='uploader'>
                        <div style={`width: ${progress}%`} />
                    </div>
                    :

                    logo ? (
                        <img src={logo} className="imgOption" />
                    ) : ( <span>הוסיפו תמונה</span>)}
            </div>
        </div>
    )
}

export default Picture
