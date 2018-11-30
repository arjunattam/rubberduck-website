import React from 'react';
import { Container } from 'reactstrap';
import { InstallButton, GithubButton } from '../Buttons';
import './index.css';

export const leadDescription = 'Finish your code reviews faster';
const subDescription =
  'Enhanced git diffs with symbol lookup and code-aware navigation';

export class Lead extends React.Component {
  render() {
    return (
      <div className="lead-container">
        <Container>
          <h1>{leadDescription}</h1>
          <h4>{subDescription}</h4>
          <div className="lead-button d-flex justify-content-center align-items-center">
            <InstallButton />
            <GithubButton />
          </div>
        </Container>
      </div>
    );
  }
}
