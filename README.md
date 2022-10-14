#### Course Registration System

#### Student registration system

To run this project, locally using npm:

- $ npm start

#### Routes

1. http://localhost:8080/ : home route - React front-end page with Welcome Msg

2. /api/ : student routes

- get(/api/students) - get all students
- get(/api/students/:id) - get student by id(Sno)
- patch(/api/updatestudent/:id) - update student by id(Sno)
- delete(/api/deletestudent/:id) - delete student by id(Sno)
- get(/api/publish/:Scourse) - publish/send Scourse to Professor Signup Sytem to get professor details
- get(/api/subscribe) - subscribe/receive the coursename from Professor Signup Sytem to show details of student with received specific course

---

#### Professor signup system

To run this project, locally using npm:

- $ npm start

#### Routes

1. http://localhost:8081/ : home route - React front-end page with Welcome Msg

2. /api/ : professor routes

- get(/api/professors) - get all professors
- get(/api/professors/:id) - get professor by id(Pid)
- patch(/api/updateprof/:id) - update professor by id(Pid)
- delete(/api/deleteprof/:id) - delete professor by id(Pid)
- get(/api/publish/:Pid) - publish/send Pid to Notification system to get course details
- get(/api/publish/:Pcourse) - publish/send Scourse to Student Registration Sytem to get student details
- get(/api/subscribe) - subscribe/receive the coursename from Student Registration Sytem to show details of professor with received specific course

---

#### Authentication system

To run this project, locally using npm:

- $ npm start

#### Routes

1. http://localhost:8082/ : home route - React front-end page with Welcome Msg

2. /api/ : user routes

- get(/api/userdata) - get all users
- patch(/api/updateuserdata/:id) - update user by id
- delete(/api/deleteuserdata/:id) - delete user by id
- get(/api/publish/:Uname) - publish/send username to Notification Sytem to display login username

---

#### Notification system

To run this project, locally using npm:

- $ npm start

#### Routes

1. http://localhost:8083/ : home route - React front-end page with Welcome Msg

2. /api/ : course routes

- get(/api/courses) - get all courses
- get(/api/notify) - subscribe/receive the username from Authentication Sytem to show who logs in
- get(/api/subscribe) - subscribe/receive the Pid from Professor signup system to show course details
- get(/api/subscribe-course) - subscribe/receive the coursename from Student Registration Sytem to show course details
