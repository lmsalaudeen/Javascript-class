 let name = 'Mojisola';
 let Courses = ['HTML', 'CSS', 'Javascript', 'Python']

 console.log(name, Courses);

 const data = []
 for (let i = 0; i <= 200; i++) {
     if (Courses.length%2===0) {
         data.push(i%2===0);
         
     } else if (Courses.length%2===1) {
         data.push(i%2===1);
         
     }
    }
     
 console.log(data);
 typeof Courses
