import {Carousel} from 'flowbite-react';

function SecondCarousel() {
  return (

<div style={{"width": "100%", "height":"550px"}} className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <img style={{"width":"100%", "height":"100%", }}
      src="https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
      alt="..."
    />
    
    <img style={{"width":"100%", "height":"100%", }}
      src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="..."
    />
    <img style={{"width":"100%", "height":"100%", }}
      src="https://images.unsplash.com/photo-1518873890627-d4b177c06e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="..."
    />
    <img style={{"width":"100%", "height":"100%", }}
      src="https://images.unsplash.com/photo-1509565840034-3c385bbe6451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      alt="..."
    />
    <img
    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
    //   src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>  );
}

export default SecondCarousel