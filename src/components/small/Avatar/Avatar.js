import React from 'react';
import { AvatarImg, Container } from './Avatar.style';

const randomText = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const minLength = 3;
  const maxLength = 10;
  const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let randomString = '';
  for (let i = 0; i < randomLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

const Avatar = () => {
  const randomAvatarText = randomText(); // Wywołanie funkcji i przechowywanie wyniku w zmiennej
  return (
    <Container>
      <p>Hello!</p>
      <AvatarImg src={`https://robohash.org/${randomAvatarText}.png`}/>
    </Container>
  );
};

export default Avatar;
