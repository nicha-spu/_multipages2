import React, { useState, useEffect } from 'react';
import './Animation.css';
import { Button } from 'react-bootstrap';

function Animation() {
  const fieldWidth = 750;
  const fieldHeight = 550;
  const ballSize = 150;

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(fieldWidth / 2 - ballSize / 2);
  const [y, setY] = useState(fieldHeight / 2 - ballSize / 2);
  const [angle, setAngle] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [image, setImage] = useState('');
  const [rotationDirection, setRotationDirection] = useState(1);
  const [angularSpeed, setAngularSpeed] = useState(5);

  const [selectedButton, setSelectedButton] = useState(''); // ติดตามปุ่มที่กด

  const vx = 5;
  const vy = 5;
  const maxLeft = fieldWidth - ballSize;
  const maxTop = fieldHeight - ballSize;
  const minAngularSpeed = 2;
  const maxAngularSpeed = 8;

  const calculate = () => {
    setAngle((prev) => (prev + angularSpeed * rotationDirection) % 360);

    // คำนวณตำแหน่งใหม่ในแนวนอน
    let newX = x + (goRight ? vx : -vx);
    // ป้องกันไม่ให้ลูกบอลออกไปนอกขอบซ้ายและขวา
    if (newX >= maxLeft) {
      newX = maxLeft; // ชิดขวา
      setGoRight(false); // เปลี่ยนทิศทาง
      setRotationDirection(Math.random() < 0.5 ? 1 : -1); // สุ่มทิศทางการหมุน
      setAngularSpeed(Math.random() * (maxAngularSpeed - minAngularSpeed) + minAngularSpeed);
    } else if (newX <= 0) {
      newX = 0; // ชิดซ้าย
      setGoRight(true); // เปลี่ยนทิศทาง
    }

    // คำนวณตำแหน่งใหม่ในแนวตั้ง
    let newY = y + (goDown ? vy : -vy);
    // ป้องกันไม่ให้ลูกบอลออกไปนอกขอบบนและล่าง
    if (newY >= maxTop) {
      newY = maxTop; // ชิดล่าง
      setGoDown(false); // เปลี่ยนทิศทาง
      setRotationDirection(Math.random() < 0.5 ? 1 : -1); // สุ่มทิศทางการหมุน
      setAngularSpeed(Math.random() * (maxAngularSpeed - minAngularSpeed) + minAngularSpeed);
    } else if (newY <= 0) {
      newY = 0; // ชิดบน
      setGoDown(true); // เปลี่ยนทิศทาง
    }

    setX(newX);
    setY(newY);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calculate();
      }, 20);
      return () => clearInterval(interval);
    }
  }, [running, x, y]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const changeImage = (img, buttonId) => {
    setImage(img);
    setSelectedButton(buttonId); // ตั้งค่า buttonId เพื่อเปลี่ยนสี
  };

  return (
    <div id="container">
      <div id="field" style={{ width: fieldWidth, height: fieldHeight, position: 'relative', border: '2px solid black' }}>
        <div
          id="ball"
          style={{
            left: x,
            top: y,
            width: ballSize,
            height: ballSize,
            transform: `rotate(${angle}deg)`,
            backgroundImage: image ? `url(${image})` : '',
            backgroundSize: 'cover',
            position: 'absolute',
          }}
        ></div>
      </div>

      <div id="counter">
        <Button style={{ marginLeft: 10 }} id="run" variant={running ? 'danger' : 'success'} onClick={toggleRunning} className="me-2">
          {running ? (
            <span className="bi bi-pause">&nbsp;PAUSE</span>
          ) : (
            <span className="bi bi-play">&nbsp;RUN</span>
          )}
        </Button>
        <Button
          id="none"
          variant={selectedButton === 'none' ? 'secondary' : 'outline-secondary'}
          onClick={() => changeImage('', 'none')}
          className="me-2" // เพิ่มระยะห่าง
        >
          None
        </Button>
        <Button
          id="basketball"
          variant={selectedButton === 'basketball' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Basketball.png', 'basketball')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Basketball
        </Button>
        <Button
          id="football"
          variant={selectedButton === 'football' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Football.png', 'football')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Football
        </Button>
        <Button
          id="volleyball"
          variant={selectedButton === 'volleyball' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Volleyball.png', 'volleyball')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Volleyball
        </Button>
        <Button
          id="human"
          variant={selectedButton === 'human' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Human.jpeg', 'human')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Human
        </Button>
        <Button
          id="cartoon"
          variant={selectedButton === 'cartoon' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Cartoon.jpeg', 'cartoon')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Cartoon
        </Button>
        <Button
          id="logo"
          variant={selectedButton === 'logo' ? 'primary' : 'outline-primary'}
          onClick={() => changeImage('Logo.png', 'logo')}
          className="me-2" // เพิ่มระยะห่าง
        >
          Logo
        </Button>
      </div>
    </div>
  );
}

export default Animation;
