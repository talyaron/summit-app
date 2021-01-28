import React from 'react';
import './InstructorCourse.css';
import { DB } from '../../../control/firebase/firebase'
import { useState, useEffect } from 'react';
// import StudentList from '../StudentList/StudentList'
//import instructor course css



export const InstructorCourse = props => {

    const { courseId, user } = props;
    const [openCourseModal, setOpenCourseModal] = useState(false);
    const [openDateModal, setOpenDateModal] = useState(false);
    const [openImageModal, setOpenImageModal]=useState(false);
    const [modalText, setModalText] = useState('');

    // const [updateFunction, setUpdateFunction]=useState(()=>{})
    console.log(user);


    //set useStates 
    const [courseName, setCourseName] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [instructors, setInstructors] = useState([]);
    const [dates, setDates] = useState('');

    //collect DB data of course for useState
    try {
        useEffect(() => {
            const unsubscribe = DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB => {
                console.log(courseDB.data())
                setCourseName(courseDB.data().name);
                setImageSource(courseDB.data().image);
                setInstructors(courseDB.data().instructors);
                console.log(courseDB.data().dates.start)



                setDates(new Date(courseDB.data().dates.start.seconds * 1000).toDateString());

            })
            return () => {
                unsubscribe()
            }
        }, [])





        //How should we get the input?
        function editName() {

            setOpenCourseModal(true);
            setModalText('Edit Course Name');


        }

        function editImageSrc() {
            setOpenImageModal(true);
            setModalText('Edit Course Image Source')
        }

        function editDate() {
            setOpenDateModal(true);
            setModalText('Edit Course Date')


        }







        return (
            <div id="instructorCourse">
                <div id="image">
                    <img src={imageSource}></img>
                    <button className="edit" onClick={editImageSrc}><img src='data:image/png;base64,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'/></button>
                </div>
                <div id="courseName">
                    <p>{courseName}</p>
                    <button className="edit" onClick={editName}><img src="data:image/png;base64,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"/></button>
                </div>
                <div id="instructorAndDate">
                    <div id="date">
                        <p>{dates}</p>
                        <button className="edit" onClick={editDate}><img src="data:image/png;base64,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"/></button>
                    </div>
                    <div id="instructors">
                        {instructors.map((instructor, index) => {
                            return (<p key={index}>{instructor}</p>)
                        })}
                    </div>
                </div>
                {/* <StudentList></StudentList> */}
                {openCourseModal ? <EditCourseNameModal /> : null}
                {openDateModal ? <EditDateModal /> : null}
                {openImageModal ? <EditImageModal/> :null}
            </div>
        )


        function EditCourseNameModal(props) {

            return (
                <div className='modal'>
                    <div className='modal__box'>
                        <p>Edit Course Name</p>
                        <form onSubmit={updateField}>
                            <input type='text' name='newValue' placeholder='Enter new value'></input>
                            <button type='submit'>Update</button>
                            <button onClick={() => { setOpenCourseModal(false) }}>Cancel</button>
                        </form>
                    </div>
                </div>
            )

            function updateField(e) {
                e.preventDefault()
                const newFieldValue = e.target.children.newValue.value;
                updateCourseNameDB(newFieldValue, courseId);
                setOpenCourseModal(false)


            }

            function updateCourseNameDB(newValue, courseId) {
                DB.collection('courses').doc(courseId).update({ name: newValue })
                    .then(() => { console.info('course name was updated') })
                    .catch(e => { console.error(e) })
            }
        }

        function EditDateModal(props) {

            return (
                <div className='modal'>
                    <div className='modal__box'>
                        <p>Edit Start date Name</p>
                        <form onSubmit={updateField}>
                            <input type='date' name='newValue' placeholder='Enter new date'></input>
                            <button type='submit'>Update</button>
                            <button onClick={() => { setOpenDateModal(false) }}>Cancel</button>
                        </form>
                    </div>
                </div>
            )

            function updateField(e) {
                e.preventDefault()
                const newFieldValue = e.target.children.newValue.value;
                updateCourseDateDB(newFieldValue, courseId);
                setOpenDateModal(false)


            }

            function updateCourseDateDB(newValue, courseId) {
                DB.collection('courses').doc(courseId).update({ dates: { start: new Date(newValue) } })
                    .then(() => { console.info('course date was updated') })
                    .catch(e => { console.error(e) })
            }
        }

        function EditImageModal(props) {

            return (
                <div className='modal'>
                    <div className='modal__box'>
                        <p>Edit Course Image Source</p>
                        <form onSubmit={updateField}>
                            <input type='text' name='newValue' placeholder='Enter new value'></input>
                            <button type='submit'>Update</button>
                            <button onClick={() => { setOpenCourseModal(false) }}>Cancel</button>
                        </form>
                    </div>
                    
                </div>
            )

            function updateField(e) {
                e.preventDefault()
                const newFieldValue = e.target.children.newValue.value;
                updateCourseImageDB(newFieldValue, courseId);
                setOpenImageModal(false)
            }

            function updateCourseImageDB(newValue, courseId) {
                DB.collection('courses').doc(courseId).update({ image: newValue })
                    .then(() => { console.info('course image was updated') })
                    .catch(e => { console.error(e) })
            }
        }


    } catch (e) {
        console.log(e)
    }
}

export default InstructorCourse;




