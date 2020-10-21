const Footer = () => {
  return (
    <footer className='footer'>
      <div className='main-box-1-in-footer'>
        <div className='box1-inside-mainbox1-footer'>
          <h3>Hindergast AS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi dignissimos quod, optio veniam accusantium minima saepe labore corporis cupiditate!</p>

        </div>
      </div>
      <div className='main-box-2-in-footer'>
        <div className='box1-inside-mainbox2-footer'>
          <h3>Legal</h3>
          <ul className='unordered-list-in-footer'>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
      <div className='main-box-3-in-footer'>
        <div className='box1-inside-mainbox3-footer'>
          <h3>About</h3>
          <ul className='unordered-list-in-footer'>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
      <div className='main-box-4-in-footer'>
        <div className='box1-inside-mainbox4-footer'>
          <h4>© 2020 Hindergast - all rights reserved</h4>
        </div>
      </div>
      <style jsx>
        {`      
          .footer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            height: 700px;
            margin-top: 200px;
            background-color: lightblue;
            grid-template-areas: '. one two three .'
                                 'four four four four four';
          }

          .main-box-1-in-footer {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            grid-area: one;
          }

          .main-box-2-in-footer {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            grid-area: two;
          }

          .main-box-3-in-footer {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            grid-area: three;
          }

          .main-box-4-in-footer {
            margin-top: 200px;
            display: flex;
            justify-content: center;
            grid-area: four;
          }

          .unordered-list-in-footer {
            list-style-type: none;
          }

          @media all and (max-width: 1200px) { 
          .footer {
            height: 1000px;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'one one'
                                 'two three'
                                 'four four';
          }
         
          .box1-inside-mainbox1-footer {
            width: 500px;
          }

          .main-box-2-in-footer, .main-box-3-in-footer {
            margin-top: 0;
          }

          }
                 
            `}
      </style>
    </footer>
  )
}

export default Footer
