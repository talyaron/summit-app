const User = {
    name:'string',
    surname:'string',
    email:'string',
    phone:'string',
    userId:'string',
    courses:[],
    photoURL:'string', //You guys forgot to add this. There are two different schemas in firebase - Consolidate! We're gonna need this for handle users, we'll pretend you populate this.
    role:'admin/public/student/instructor',
    createdAt:123
}