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
                    <button className="edit" onClick={editImageSrc}>edit</button>
                </div>
                <div id="courseName">
                    <p>{courseName}</p>
                    <button className="edit" onClick={editName}>edit</button>
                </div>
                <div id="instructorAndDate">
                    <div id="date">
                        <p>{dates}</p>
                        <button className="edit" onClick={editDate}>edit</button>
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




