import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:ml-[70px] h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I'm <span className="text-2xl text-bold text-cyan-500 ">Syed Raihan Ali</span>, a passionate and motivated full stack web developer. Although I may not have professional experience, I have been dedicated to honing my skills and exploring the world of web development since 2021. I have immersed myself in various online resources, tutorials, and projects to gain practical knowledge and hands-on experience.
        </p>

        <br />

        <p className="text-xl">
        My journey as a self-taught developer has been an exciting one. I am a fast learner and possess a strong determination to tackle complex problems, finding innovative solutions along the way. The ever-evolving nature of web development fascinates me, and I continuously strive to stay up-to-date with the latest technologies and industry trends.
        </p>
        <br />

        <p className="text-xl">
        As a full stack web developer, I have acquired proficiency in both front-end and back-end technologies. On the front-end, I have a solid foundation in<span> HTML</span>,<span>CSS</span> , and JavaScript, enabling me to craft visually appealing and user-friendly interfaces. I am experienced in working with modern frameworks and libraries such as React.js, Vue.js, or Angular, which allow me to create dynamic and interactive web applications.
        
        </p>
        <br />

        <p className="text-xl">
        On the back-end side, I have a strong understanding of server-side programming languages like Node.js and Python, along with frameworks such as Express.js and Django. I am comfortable working with databases, both SQL and NoSQL, and have experience with query languages like SQL and MongoDB. Building robust and scalable APIs, integrating third-party services, and ensuring efficient data management are areas I excel in.
        </p>
        <br />

        <p className="text-xl">
        I believe that effective collaboration and communication are crucial for successful project development. I am a proactive team player who thrives in collaborative environments, bringing enthusiasm and fresh ideas to the table. I am also adept at understanding and translating client requirements into actionable plans, delivering results that align with their vision.
        </p>
        <br />

        <p className="text-xl">
        I am excited about the opportunity to apply my skills and contribute to meaningful web development projects. Whether it's creating responsive websites, developing e-commerce platforms, or building web applications from scratch, I am ready to take on new challenges and grow as a developer.
        </p>
        <br />

        <p className="text-xl">
        Thank you for taking the time to learn more about me. I look forward to connecting and discussing how we can work together to bring your ideas to life through innovative web solutions.
        </p>

      </div>
    </div>
  );
};

export default About;
