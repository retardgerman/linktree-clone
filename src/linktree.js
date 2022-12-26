import React from 'react';
import './LinkTree.css';

function LinkTree() {
  return (
    <div className="linktree">
      <h1 className='linktree-title'>@JanCebulla</h1>
      <ul>
        <li className="link-button">
          <img src="Instagram_logo_2022.png" alt="Instagram-Logo" className="social-logo" />
          <a href="https://www.instagram.com/jan.cebulla/">Instagram</a>
        </li>
        <li className="link-button">
          <img src="Twitter-logo.png" alt="Twitter-Logo" className="social-logo" />
          <a href="https://twitter.com/JanCebulla">Twitter</a>
        </li>
        <li className="link-button">
          <img src="Mastodon_logotype__simple__new_hue.png" alt="Mastodon-Logo" className="social-logo" />
          <a href="https://mastodon.social/@jancebulla">Mastodon</a>
        </li>
        <li className="link-button">
          <img src="mastodon-logo.pngpng" alt="GitHub-Logo" className="social-logo" />
          <a href="https://github.com/SimplyJanDE">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default LinkTree;
