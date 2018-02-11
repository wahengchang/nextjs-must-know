// read more : https://github.com/zeit/next.js#fetching-data-and-component-lifecycle

export default () =>
  <div>
    Hello world
    <p>scoped!</p>
    <p className='cla1'> class 0001 !</p>
    <style jsx>{`
      .cla1 {
        color: grey;
      }
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>