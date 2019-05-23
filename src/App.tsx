/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Button, Card, Divider, Grid, Input, Segment } from 'semantic-ui-react';

const App: React.FC = () => {
  const wrapperCard = css`
    background-color: #282c34 !important;
    color: white !important;
  `;
  const wrapperOr = css`
    > .or:before {
      background-color: #282c34 !important;
      color: white !important;
    }
  `;
  const wrapperInput = css`
    > input {
      text-align: center !important;
      color: white !important;
    }
  `;

  const wrapperWinButton = css`
    background-color: green !important;
    color: white !important;
  `;

  const wrapperScore = css`
    > p {
      height: 60vh;
      font-size: 50vh;
      line-height: 60vh;
    }
  `;

  return (
    <Segment inverted color="black">
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Card centered fluid css={wrapperCard}>
            <Card.Content textAlign="center">
              <Input
                css={wrapperInput}
                transparent
                placeholder="Name"
                size="massive"
              />
            </Card.Content>
            <Card.Content textAlign="center" css={wrapperScore}>
              <p>0</p>
            </Card.Content>
            <Card.Content textAlign="center">
              <Grid columns="equal">
                <Grid.Row columns="equal">
                  <Grid.Column>
                    <Button.Group css={wrapperOr}>
                      <Button positive> + </Button>
                      <Button.Or />
                      <Button positive> - </Button>
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Button inverted color="green" css={wrapperWinButton}>
                      Win
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered fluid css={wrapperCard}>
            <Card.Content textAlign="center">
              <Input
                css={wrapperInput}
                transparent
                placeholder="Name"
                size="massive"
              />
            </Card.Content>
            <Card.Content textAlign="center" css={wrapperScore}>
              <p>0</p>
            </Card.Content>
            <Card.Content textAlign="center">
              <Grid columns="equal">
                <Grid.Row columns="equal">
                  <Grid.Column>
                    <Button.Group css={wrapperOr}>
                      <Button positive> + </Button>
                      <Button.Or />
                      <Button positive> - </Button>
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Button inverted color="green" css={wrapperWinButton}>
                      Win
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>

      <Divider vertical inverted>
        VS
      </Divider>
    </Segment>
  );
};

export default App;
