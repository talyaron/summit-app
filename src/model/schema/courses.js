const Course = {
    name:'string',
    instructors:[],
    date:{
        starting:'date',
        end:'date',
        repeat:[
            {days:1, hoursStart:'12:40', hoursEnd:'15:00'} //the hours should be in date format
        ]
    },
    students:[{'user object'}],
    active:'boolean'
}