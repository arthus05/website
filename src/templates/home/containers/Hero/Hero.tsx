import styles from './styles.module.css'

const Hero = () => {
  return (
    <section
      className="
        h-[calc(100vh-4rem)]
        text-3xl font-extralight">
      <section 
        className="
          h-full w-4/5 m-auto
          flex flex-col justify-evenly
          ">
        <h1 className='text-4xl'>Hello! I'm <br className='block md:hidden'/>
          <span className='relative'>
            <strong
              className='overflow-x-hidden whitespace-nowrap text-brand-accent text-[#04D9D9]'
              >
              Arthus Vinicius 👋
            </strong>
            <span
              className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-[var(--background-color)] w-full animate-type will-change`}
            ></span>
          </span>
        </h1>
        <p className='flex flex-col'>
          <span>👨🏾‍💻</span>
          I am a frontend-heavy Software Engineer with love for design and passion for
          architecture, building nice interfaces and good experiences!
        </p>
        <p className='text-2xl flex flex-col'>
          Contact me! 📬
          <a 
            href='mailto:arthusvinicius.dev@gmail.com'
            className={`
              ${styles.mail}
              relative
              w-fit font-bold text-xl`}> 
            arthusvinicius.dev@gmail.com
          </a>
        </p>
      </section>
    </section>
  )
}

export default Hero