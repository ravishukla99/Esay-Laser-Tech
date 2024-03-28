import React from 'react';

class ScrollButton extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling animation
    });
  };

  render() {
    return (
		<>
		
      <button onClick={this.scrollToTop} style={{ position: 'fixed', bottom: '80px', right: '20px',border:"none" }} >
        <img src="https://icon-library.com/images/arrow-up-icon/arrow-up-icon-25.jpg" style={{width:"40px"}}/>
      </button>
	  </>
    );
  }
}

export default ScrollButton;
