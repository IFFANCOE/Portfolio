import minipro from './Image/mini_prproj.PNG';
import deploymen from './Image/deploymen.PNG';

let projects = [ 
    { 
        id:'1',
     name:' Q and R COVID-19(ReactJS)',
     title:'มินิโปรเจคนี้สร้างขึ้นมาเพื่อช่วยผู้คน ในการวัดความเสี่ยงของโรคโควิด-19ในสถานการณ์ ณ ตอนนี้ที่เกิดขึ้นคือโรคระบาดโคโรน่าไวรัส',
     thumbnail: minipro,
     url:'https://iffanpathan.medium.com/q-r-covid-19-reactjs-612b9e3ac90c'
 
 },
     { id:'2',
     name:' pm2 and Nginx as reverse proxy',
     title:'Public web จำเป็นต้องใช้ผ่าน 2 port หลักๆ คือ 80 http, 443 https ซึ่งโดยปกติแล้วเราจะมักเขียนโปรแกรมภาษา node.js มักจะไม่ได้ให้ผู้ใช้เข้าผ่าน port 80 หรือ 443 ตรง ๆ มักต้องผ่าน http web server สักตัวหนึ่งซึ่งในที่นี่ขอแนะนำ nginx',
     thumbnail: deploymen,
     url:'https://iffanpathan.medium.com/web-deploymen-936a22c742eb'
     }
 
 ]

 export default projects