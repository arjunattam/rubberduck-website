import React from 'react';
import DownloadIcon from './downloadIcon';
import { startDownload } from '../../utils/download';
import 'devicon/devicon.css';

const CustomButton = ({ href, onClick, iconJsx, text, isHollow, subText }) => (
  <div className="btn-container mx-2">
    <a
      className={`btn btn-primary ${isHollow ? 'btn-hollow' : ''}`}
      href={href}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      {iconJsx} {text}
    </a>
    {subText ? <div className="button-sub">{subText}</div> : null}
  </div>
);

const downloadLink =
  'https://chrome.google.com/webstore/detail/rubberduck/nopekhgebkpkbjoclackdlofmcpokgmc';

const triggerInstall = event => {
  if (chrome && chrome.webstore && chrome.webstore.install) {
    event.preventDefault();
    return chrome.webstore.install(
      null,
      response => {
        console.log('Installation success', response);
      },
      error => {
        console.log('Installation failure', error);
      }
    );
  }
};

export const InstallButton = () => (
  <CustomButton
    text={'Install in your browser'}
    href={downloadLink}
    onClick={e => triggerInstall(e)}
    iconJsx={<i className="devicon-chrome-plain" />}
  />
);

export const GithubButton = () => (
  <CustomButton
    text={'View on GitHub'}
    href={'https://github.com/karigari/rubberduck'}
    isHollow={true}
    iconJsx={<i className="devicon-github-plain" />}
  />
);

export const DownloadButton = () => (
  <CustomButton
    text={'Download menu app'}
    href={'#'}
    onClick={startDownload}
    iconJsx={<DownloadIcon size={15} />}
    subText={'requires macOS 10.11+'}
  />
);

export const BuyButton = () => (
  <CustomButton text={'Buy license'} href={'/selfhosted'} isHollow={true} />
);
