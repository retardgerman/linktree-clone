import React from 'react';
import './LinkTree.css';




function LinkTree() {
  function handleClick(event, url) {
    window.open(url, '_blank');
  }

  return (
    <div className='linktree' style={{ height: '100vh',
    width: '100vw', }}> 
      <h1 className='linktree-title'>@JanCebulla</h1>
      <ul>
      <li style={{ textAlign: 'center', margin: '10px' }}>
        <button className='link-button' onClick={(e) => handleClick(e, 'https://www.instagram.com/jan.cebulla/')}>
          <img src="Instagram_logo_2022.png" alt="Instagram-Logo" className="social-logo"/> Instagram
        </button>
        </li>
        <li>
        <button className='link-button' onClick={(e) => handleClick(e, 'https://twitter.com/JanCebulla')}>
          <img src="Twitter-logo.png" alt="Twitter-Logo" className="social-logo" /> Twitter
          </button>
        </li>
        <li style={{ textAlign: 'center', margin: '10px' }}>
        <button className="link-button" onClick={(e) => handleClick(e, 'https://mastodon.social/@jancebulla')}>
          <img src="Mastodon_logotype__simple__new_hue.png" alt="Mastodon-Logo" className="social-logo" />Mastodon
          </button>
        </li>
        <li style={{ textAlign: 'center', margin: '10px' }}>
        <button className="link-button" onClick={(e) => handleClick(e, 'https://github.com/SimplyJanDE')}>
          <img src="github-mark-white.png" alt="GitHub-Logo" className="social-logo" />GitHub
          </button>
        </li>
        <li style={{ textAlign: 'center', margin: '10px' }}>
        <button className="website-button" onClick={(e) => handleClick(e, 'https://jan-cebulla.de/')}>
        Website </button>
        </li>
      </ul>
    </div>
  );
}

export default LinkTree;
