import React from 'react';
import img1 from "./log.png";

export default function About() {
  return <div className='container'>
      <h1 className='mt-5 mb-2'>About <img src={img1} id="mylogo" alt="Droisys" width="350" height="40" /></h1> <br />
      <h5 className='w-75 lh-base text-justify text-left'>
        DROISYSVOCAB allows you to enter a word with meaning and current date/time and save to the localStorage. It will also help you to find your word from the localStorage. This app also ignore the repitition of the existing word prsesnt in local storage. This web app is made by interns (Mohd Nadeem and Mohd Aquil) under the guidance of sachin bhatt sir. The motivation behind the making of this web page is our(interns) vocabulary daily routine, inwhich we(interns) all have to publish one word with meaning. Right now, the collection of words is around 1000. And because of huge collection of words, there may be repitition of the existing word. Repitition of the words is not a problem, but being a curious learner, we just thought that we should make a webapp to overcome the repition of words. There is a lot more that can be added as a feature of this web app.
      </h5>
      <button class="btn btn-outline-primary">Read more on DROISYS</button>
  </div>;
}
