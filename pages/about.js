const { default: Head } = require("next/head");

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quia distinctio reprehenderit perspiciatis hic modi soluta cum
          assumenda laudantium similique asperiores fugiat inventore delectus,
          odit dolorum voluptas, eum quae in?
        </p>
      </div>
    </>
  );
};

export default About;
