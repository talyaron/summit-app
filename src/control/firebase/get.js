import { DB } from './firebase';


export const listenToTests = (props) => {
    try {
        const { setTests } = props;

        DB.collection('tests').onSnapshot(docsDB => {
            let testsArray = [];
            docsDB.forEach(docDB => {

                let testObj = docDB.data();


                if (typeof testObj === 'object' && {}.hasOwnProperty.call(testObj, 'title')) {
                    testObj.id = docDB.id
                    console.log(docDB.data())
                    testsArray.push(testObj)
                }
            })

            setTests(testsArray);
        })
    } catch (e) {
        console.error(e)
    }
}