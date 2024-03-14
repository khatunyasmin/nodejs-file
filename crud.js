const { default: mongoose } = require('mongoose');
const mongoose1 = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    rollno:Number
});

const create = async()=>{
    await mongoose1.connect("mongodb://localhost:27017/student_details");

    

    const studentModel = mongoose.model('student_info',studentSchema);

    let data = new studentModel({ name:"Marie",age:24,email:"marie@gmail.com",rollno:21});
    let data1 = new studentModel({name:"Alice",age:24,email:"marie@gmail.com",rollno:21});

        //let result = await data.save();
        let result = await studentModel.insertMany([data,data1]);

        console.log(result);    
};

//create();

 //Update

// const update = async ()=>{

//     await mongoose1.connect("mongodb://localhost:27017/student_details");

//     const update_data = mongoose1.model('student_info',studentSchema);

//     let data = await update_data.updateOne(
//         {
//             name:"Alice"
//         },
//         {
//             $set:{name:"Alexandria"}
//         }
//     )
    
//     console.log(data);
// }
// update();

// //Read

// const readDB = async()=>{
//     await mongoose1.connect("mongodb://localhost:27017/student_details");

//     const read_data = mongoose1.model('student_info',studentSchema);

//     let data = await read_data.find({name:"Marie"});

//     console.log(data);

// }
// readDB();

// //Delete

const deleteDB = async()=>{

    await mongoose1.connect("mongodb://localhost:27017/student_details");

    const delete_data = mongoose1.model('student_info',studentSchema);

    let data = await delete_data.deleteOne({name:"Alexandria"});

    console.log(data);

}
deleteDB();