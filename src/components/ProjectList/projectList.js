import minipro from './Image/mini_prproj.PNG';
import deploymen from './Image/deploymen.PNG';
import Todo from './Image/image.PNG'
import Product from './Image/product.PNG'

let projects = [
    {
        id: '1',
        name: ' Q and R COVID-19(ReactJS)',
        title: 'โปรเจคนี้สร้างขึ้นมาเพื่อช่วยผู้คน ในการวัดความเสี่ยงของโรคโควิด-19ในสถานการณ์ ณ ตอนนี้ที่เกิดขึ้นคือโรคระบาดโคโรน่าไวรัสโดยมีคำถาม 5 ข้อ ให้ผู้ใช้ตอบหลังจากนั้นจะประเมินผลและบอกวิธีแก้ไขเบื้องต้นเพื่อป้องกันโควิด-19',
        thumbnail: minipro,
        url: 'https://iffanpathan.medium.com/q-r-covid-19-reactjs-612b9e3ac90c',
        teg1:'#ReactJS ',
        teg2:"#firebase",
        teg3:"#Boostrap",
        teg4:"#axios",

    },
    {
        id: '2',
        name: ' pm2 and Nginx as reverse proxy',
        title: 'Reverse proxy จะคล้าย ๆ load balancer จะแตกต่างกันที่ตัว reverse proxy กับ web จะอยู่ที่เครื่อง เดียวกัน reverse proxy จะทำหน้าที่เป็นที่พักข้อมูล แล้วไปเรียกใช้จาก back end web server',
        thumbnail: deploymen,
        url: 'https://iffanpathan.medium.com/web-deploymen-936a22c742eb',
        teg1:'#Node.js',
        teg2:"#express",
        teg3:"#docker",
        teg4:"nginx",
    },
    {
        id: '3',
        name: ' React-redux-project ',
        title: 'เป็น React Redux ที่ใช้ Axios REST API ที่ดึงข้อมูลสินค้ามาจาก Fake Store API',
        thumbnail: Product,
        url: 'https://github.com/IFFANCOE/Redux-project',
        teg1:'#ReactJS',
        teg2:"#Redux",
        teg3:"#Axios ",
        teg4:"#Tailwind css",
    },
    {
        id: '4',
        name: ' Todo (react-redux-toolkit) ',
        title: 'Todo List มี api ระบบ Login / Register เก็บข้อมูลผู้ที่ Register ลงใน Database ใช้เป็น NoSQL MongoDB และ api ของ todo ใช้ Redux-toolkit เพื่อแก้ปัญหาการใช้งาน Redux ที่ยุ่งยาก ',
        thumbnail: Todo,
        url: 'https://github.com/IFFANCOE/Todo-reduxjs-toolkit-Thunk',
        teg1:'#ReactJS ',
        teg2:"#Redux-toolkit",
        teg3:"#MongoDB",
        teg4:"#api",
    },


]

export default projects